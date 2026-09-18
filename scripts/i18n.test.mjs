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
