import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
const localeSource=ts.createSourceFile('i18n.ts',await readFile(new URL('../src/lib/i18n.ts',import.meta.url),'utf8'),ts.ScriptTarget.Latest,true);
const app=ts.createSourceFile('App.tsx',await readFile(new URL('../src/App.tsx',import.meta.url),'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
function walk(node,fn){fn(node);ts.forEachChild(node,child=>walk(child,fn));}
test('every static UI translation key has a nonempty English value',()=>{
 const translated=new Map();walk(localeSource,node=>{if(ts.isVariableDeclaration(node)&&node.name.getText(localeSource)==='english'&&ts.isObjectLiteralExpression(node.initializer)){for(const p of node.initializer.properties)if(ts.isPropertyAssignment(p)&&ts.isStringLiteral(p.initializer))translated.set(p.name.text,p.initializer.text)}});
 let checked=0;walk(app,node=>{if(ts.isCallExpression(node)&&['t','translate'].includes(node.expression.getText(app))&&ts.isStringLiteral(node.arguments[0])){const key=node.arguments[0].text;assert.ok(translated.get(key)?.trim(),`Missing English UI copy: ${key}`);checked++;}});assert.ok(checked>70);
});
test('visible JSX contains no untranslated Chinese except the bilingual language control',()=>{
 walk(app,node=>{if(ts.isJsxText(node)&&/\p{Script=Han}/u.test(node.text))assert.equal(node.text.trim(),'中',`Unlocalized JSX: ${node.text.trim()}`)});
});

test('all projects in projects.json have complete, non-empty English copy without Chinese leaks', async () => {
  const raw = await readFile(new URL('../src/data/projects.json', import.meta.url), 'utf8');
  const projects = JSON.parse(raw);
  for (const p of projects) {
    for (const k of ['plainSummaryEn', 'jevDecisionPointEn', 'highlightBenefitEn', 'claimStatusEn']) {
      const val = p[k];
      assert.ok(typeof val === 'string' && val.trim().length > 0, `Missing ${k} in project ${p.id}`);
      assert.ok(!/\p{Script=Han}/u.test(val), `Leaked Chinese in ${k} of project ${p.id}: ${val}`);
    }
  }
});

test('README.md contains zero Chinese characters outside the language toggle link', async () => {
  const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
  for (const line of readme.split('\n')) {
    if (line.includes('简体中文') || line.includes('日本語') || line.includes('한국어')) continue;
    assert.ok(!/\p{Script=Han}/u.test(line), `Chinese leaked into English README: ${line}`);
  }
});

test('README.ko.md contains zero Chinese characters outside the language toggle link', async () => {
  const readme = await readFile(new URL('../README.ko.md', import.meta.url), 'utf8');
  for (const line of readme.split('\n')) {
    if (line.includes('简体中文') || line.includes('日本語') || line.includes('한국어')) continue;
    assert.ok(!/\p{Script=Han}/u.test(line), `Chinese leaked into Korean README: ${line}`);
  }
});

const localeModule = await import(`data:text/javascript;base64,${Buffer.from(ts.transpileModule(await readFile(new URL('../src/lib/i18n.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText).toString('base64')}`);

test('Japanese and Korean cover the complete UI dictionary and every category', () => {
  const {english, japanese, korean, categoryEnglish, categoryLabel} = localeModule;
  for (const [locale, dictionary] of Object.entries({ja: japanese, ko: korean})) {
    for (const key of Object.keys(english)) assert.ok(dictionary[key]?.trim(), `${locale}: missing ${key}`);
    for (const category of Object.keys(categoryEnglish)) assert.notEqual(categoryLabel(category, locale), category, `${locale}: untranslated ${category}`);
  }
});

test('locale paths are authoritative and project paths are stable across four locales', () => {
  const {localeFromPath, projectPath, localizedProjectText} = localeModule;
  for (const locale of ['en','ja','ko']) {
    assert.equal(localeFromPath(`/awesome-jev-projects/${locale}/`), locale);
    assert.equal(projectPath('logicrw:project.name', locale), `/awesome-jev-projects/${locale}/projects/logicrw/project.name/`);
  }
  assert.equal(localeFromPath('/awesome-jev-projects/projects/en/tool/'), null);
  assert.equal(projectPath('logicrw:project.name', 'zh'), '/awesome-jev-projects/projects/logicrw/project.name/');
  for (const locale of ['zh','en','ja','ko']) {
    assert.equal(projectPath('jev-ultrafast', locale), `/awesome-jev-projects/${locale === 'zh' ? '' : `${locale}/`}projects/jev-ultrafast/`);
    assert.ok(!projectPath('semdecide', locale).includes('//'));
  }
  assert.deepEqual(localizedProjectText({plainSummary:'原文内容',plainSummaryEn:'Source text',plainSummaryJa:'日本語の説明'},'plainSummary','ja'),{text:'日本語の説明',language:'ja'});
  assert.deepEqual(localizedProjectText({plainSummary:'原文内容',plainSummaryEn:'Source text'},'plainSummary','ko'),{text:'Source text',language:'en'});
});

test('catalog server render is browser-independent and initially bounded to 24 crawlable cards', async () => {
  const {createServer} = await import('vite');
  const {renderToString} = await import('react-dom/server');
  const {createElement} = await import('react');
  const server = await createServer({server:{middlewareMode:true,hmr:false,ws:false},appType:'custom'});
  try {
    const {default:App} = await server.ssrLoadModule('/src/App.tsx');
    const {tagLabel} = await import('../src/lib/tags.mjs');
    const initialProjects = Array.from({length:60}, (_, i) => ({
      id:`logicrw:tool-${i}`,name:`tool-${i}`,author:'logicrw',url:`https://github.com/logicrw/tool-${i}`,
      category:'Browser & OS Action',plainSummary:'浏览器工具的中文说明',plainSummaryEn:'Browser source description',plainSummaryJa:'ブラウザの操作を選ぶツール',plainSummaryKo:'브라우저 동작을 선택하는 도구',
      jevDecisionPoint:'选择浏览器操作',highlightBenefit:'查看源码',claimStatus:'尚未独立复测',summarySource:'author',catalogStatus:i === 59 ? 'review-pending' : 'active',tags:['browser-automation'],stars:i,forks:0,openIssues:0,license:null,lastCommitAt:null,createdAt:null,
    }));
    for (const initialLocale of ['zh','en','ja','ko']) {
      const html = renderToString(createElement(App,{initialProjects,initialLocale}));
      assert.equal((html.match(/data-project-id=/g)||[]).length,24);
      assert.ok(html.includes(localeModule.projectPath('logicrw:tool-59',initialLocale)));
      assert.ok(html.includes(localeModule.translate('加载更多项目',initialLocale)));
      const ticker = html.match(/<div class="ticker-items">([\s\S]*?)<\/div>/)?.[1] ?? '';
      assert.ok(!ticker.includes('tool-59'));
      assert.ok(!html.includes(localeModule.translate('正在读取项目…',initialLocale)));
      assert.ok(html.includes('aria-pressed="true"'));
      const header = html.match(/<header[^>]*>([\s\S]*?)<\/header>/)?.[1] ?? '';
      assert.ok(header.includes('class="header-nav"'));
      assert.ok(html.includes('class="quick-filters"'));
      const suggestions = html.match(/<div class="search-suggestions"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? '';
      assert.equal((suggestions.match(/<button /g) || []).length, 5);
      assert.ok(suggestions.includes(localeModule.translate('热门搜索',initialLocale)));
      assert.ok(suggestions.includes('Rust'));
      assert.ok(suggestions.includes('Claude'));
      assert.ok(html.includes('class="hero-tabs"'));
      assert.ok(html.includes('role="tablist"'));
      assert.ok(html.includes('class="hello-jev"'));
      assert.equal((html.match(/class="hello-jev"/g) || []).length, 1, 'One code preview shared by all breakpoints');
      assert.ok(html.includes('class="card-dispenser"'));
      assert.equal((html.match(/role="tab"/g) || []).length, 3);
      assert.equal((html.match(/developer-clone-button/g) || []).length, 24);
      assert.ok(!html.includes('jev.choice()'));
      assert.ok(html.includes(localeModule.translate('快速接入',initialLocale)));
      assert.ok(html.includes(localeModule.translate('决策流程',initialLocale)));
      assert.ok(html.includes(localeModule.translate('商业友好',initialLocale)));
      assert.ok(!html.includes('aria-label="'+localeModule.translate('星数范围',initialLocale)+'"'));
      assert.ok(header.includes('class="header-actions"'));
      const chips = html.match(/<div class="tags">([\s\S]*?)<\/div>/)?.[1] ?? '';
      assert.ok(chips.includes('type="button"'));
      assert.ok(chips.includes('aria-pressed="false"'));
      assert.ok(chips.includes(tagLabel('browser-automation', initialLocale)));
      assert.ok(!chips.includes('>browser-automation<'));
      assert.ok(header.includes('class="sponsor-entry-button"'));
      assert.ok(header.includes('class="agent-skill-btn"'));
      assert.ok(header.indexOf('class="language-control"') > header.indexOf('submit-top'));
      assert.equal((html.match(/class="featured-partners"/g) || []).length, 1);
      assert.ok(!html.includes('class="featured-banner"'));
      assert.ok(html.indexOf('class="featured-partners"') < html.indexOf('class="project-grid"'));
    }
  } finally { await server.close(); }
});

test('language navigation preserves explorer state and hash while rejecting stale filters', async () => {
  const {createServer} = await import('vite');
  const server = await createServer({server:{middlewareMode:true,hmr:false,ws:false},appType:'custom'});
  try {
    const {readExplorerState, localeNavigationUrl} = await server.ssrLoadModule('/src/App.tsx');
    const projects = [{category:'Browser & OS Action',tags:['MCP','Context GC']}];
    const state = readExplorerState('?q=ブラウザ&category=Browser+%26+OS+Action&tag=MCP&view=popular&sort=updated&saved=1', projects);
    assert.deepEqual(state, {q:'ブラウザ', category:'Browser & OS Action', tag:'mcp-integrations', quickFilter:'popular', sort:'updated', onlySaved:true});
    const japanese = localeNavigationUrl('https://logicrw.github.io/awesome-jev-projects/en/?v=build&lang=zh#project=semdecide', 'ja', state);
    assert.equal(japanese.pathname, '/awesome-jev-projects/ja/');
    assert.equal(japanese.hash, '#project=semdecide');
    assert.equal(japanese.searchParams.get('v'), 'build');
    assert.equal(japanese.searchParams.has('lang'), false);
    assert.deepEqual(readExplorerState(japanese.search, projects), state);
    const chinese = localeNavigationUrl(japanese.href, 'zh', state);
    assert.equal(chinese.pathname, '/awesome-jev-projects/');
    assert.equal(chinese.searchParams.get('lang'), 'zh');
    assert.deepEqual(readExplorerState(chinese.search, projects), state);
    const invalid = readExplorerState('?q='+ 'x'.repeat(201) +'&category=unknown&tag=missing&stars=-1&sort=__proto__&saved=true', projects);
    assert.deepEqual(invalid, {q:'x'.repeat(200),category:'all',tag:'all',quickFilter:'all',sort:'stars',onlySaved:false});
    assert.equal(readExplorerState('?category=__proto__').category,'all');
    assert.equal(readExplorerState('?stars=100%2B').quickFilter,'all');
    assert.equal(readExplorerState('?view=__proto__').quickFilter,'all');
    const cleared = localeNavigationUrl(japanese.href, 'en', readExplorerState('',projects));
    assert.deepEqual([...cleared.searchParams.keys()], ['v']);
  } finally { await server.close(); }
});


test('English and Korean UI dictionaries do not contain Han characters', () => {
  for (const [locale, dictionary] of Object.entries({en: localeModule.english, ko: localeModule.korean})) {
    for (const [key, value] of Object.entries(dictionary)) {
      assert.ok(!/\p{Script=Han}/u.test(value), `${locale}: untranslated UI text for ${key}`);
    }
  }
});


test('tag search recognizes four-language domains while technical names require project evidence', async () => {
  const {createServer} = await import('vite');
  const {tagLabel} = await import('../src/lib/tags.mjs');
  const server = await createServer({server:{middlewareMode:true,hmr:false,ws:false},appType:'custom'});
  try {
    const {createProjectSearch, searchProjects} = await server.ssrLoadModule('/src/App.tsx');
    const rows = [
      {id:'logicrw:example',name:'example',stars:999999,tags:['browser-automation'],plainSummary:'选择网页控件'},
      {id:'logicrw:implementation',name:'implementation',stars:1,tags:['browser-automation'],plainSummaryEn:'Uses Playwright to select page controls.'},
      {id:'logicrw:other',name:'other',tags:['voice-conversation'],plainSummary:'语音工具'},
    ];
    const index = createProjectSearch(rows);
    for (const query of [...['zh','en','ja','ko'].map((locale) => tagLabel('browser-automation',locale)), 'Browser Extension']) {
      assert.ok(searchProjects(index, query).some((project) => project.id === 'logicrw:example'), query);
    }
    assert.deepEqual(searchProjects(index, 'Playwright').map((project) => project.id), ['logicrw:implementation']);
  } finally { await server.close(); }
});

test('tag selection preserves compatible context and clears conflicting filters without an empty dead end', async () => {
  const {createServer} = await import('vite');
  const server = await createServer({server:{middlewareMode:true,hmr:false,ws:false},appType:'custom'});
  try {
    const {tagSelectionState} = await server.ssrLoadModule('/src/App.tsx');
    const rows = [{id:'logicrw:example',category:'Browser & OS Action',stars:1200,tags:['browser-automation']}, {id:'logicrw:other',category:'MCP & Integrations',stars:5,tags:['mcp-integrations']}];
    const state = {q:'specific project', category:'Browser & OS Action', tag:'all', quickFilter:'popular', sort:'updated', onlySaved:true};
    assert.deepEqual(tagSelectionState(state,'browser-automation',rows,['logicrw:example']), {...state,q:'',tag:'browser-automation'});
    assert.deepEqual(tagSelectionState(state,'MCP',rows,['logicrw:example']), {...state,q:'',tag:'mcp-integrations',category:'all',quickFilter:'all',onlySaved:false});
    assert.deepEqual(tagSelectionState(state,'all',rows), {...state,q:'',tag:'all'});
  } finally { await server.close(); }
});


test('popular search suggestions and placeholders are localized, specific and backed by catalog matches', async () => {
  const {createProjectSearch, searchProjects} = await import('../src/lib/search.mjs');
  const projects = JSON.parse(await readFile(new URL('../src/data/projects.json', import.meta.url), 'utf8'));
  const index = createProjectSearch(projects);
  const placeholderKey = '搜项目、作者或场景（如：Playwright、Claude、降本路由、Rust、上下文）...';
  for (const locale of ['zh', 'en', 'ja', 'ko']) {
    const placeholder = localeModule.translate(placeholderKey, locale);
    assert.ok(!/9\s?hz/iu.test(placeholder));
    for (const term of ['Playwright', 'Claude', 'Rust']) assert.ok(placeholder.includes(term));
    const suggestions = localeModule.popularSearches[locale];
    assert.equal(suggestions.length, 5);
    assert.equal(new Set(suggestions.map(({query}) => query)).size, 5);
    for (const {label, query} of suggestions) {
      assert.ok(searchProjects(index, query).length > 0, `${locale}: ${query} must find real projects`);
      if (locale === 'en' || locale === 'ko') assert.ok(!/\p{Script=Han}/u.test(label));
      assert.ok(!/9\s?hz/iu.test(label + query));
    }
  }
  const appText = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8');
  assert.ok(!/9\s?hz/iu.test(appText));
});
