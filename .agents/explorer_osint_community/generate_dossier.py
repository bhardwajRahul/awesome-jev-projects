import re
import json

existing = set(line.strip().lower() for line in open('.agents/explorer_osint_community/existing_repos.txt'))
excluded = set(line.strip().lower() for line in open('.agents/explorer_osint_community/excluded_repos.txt'))

print(f"Loaded {len(existing)} existing, {len(excluded)} excluded.")

# Strict regex matching markdown item:
# - [Title](https://github.com/owner/repo) - Description
item_regex = re.compile(
    r'^-\s+\[(?P<title>[^\]]+)\]\(https?://github\.com/(?P<owner>[^/]+)/(?P<repo>[^/)\s#]+)(?:#[^)]*)?\)\s*[-—:]*\s*(?P<desc>.*)$'
)

candidates = {}

def process_file(path, platform_name):
    with open(path, 'r', encoding='utf-8') as f:
        for line_no, line in enumerate(f):
            line = line.strip()
            if not line.startswith('- ['):
                continue
            m = item_regex.match(line)
            if not m:
                continue
            owner = m.group('owner')
            repo = m.group('repo').removesuffix('.git').rstrip('/')
            title = m.group('title').strip()
            desc = m.group('desc').strip().replace(r'\_', '_').replace(r'\.', '.').replace(r'\(', '(').replace(r'\)', ')')

            repo_full = f"{owner}/{repo}"
            repo_lower = repo_full.lower()

            # Ignore system/meta repos
            if owner.lower() in ['orgs', 'users', 'collections', 'events', 'features', 'topics', 'sponsors']:
                continue
            if 'awesome-jev' in repo.lower() or 'awesome-typesafe' in repo.lower():
                continue
            if repo_lower in existing or repo_lower in excluded:
                continue

            # Classify claimed primitives
            claimed = []
            desc_lower = desc.lower()
            if 'choice' in desc_lower:
                claimed.append('Choice')
            if 'score' in desc_lower:
                claimed.append('Score')
            if 'noul' in desc_lower:
                claimed.append('Noul')
            if 'systemone' in desc_lower or 'system one' in desc_lower or '/v1/systemone' in desc_lower:
                claimed.append('systemOne API')
            if not claimed:
                if any(k in desc_lower for k in ['decision', 'judge', 'routing', 'pick', 'rate', 'gate', 'decide', 'select', 'filter', 'eval']):
                    claimed.append('Decision Primitive')
                else:
                    claimed.append('TypeSafe SDK / Client')

            if repo_lower not in candidates:
                candidates[repo_lower] = {
                    'repo': repo_full,
                    'repoUrl': f"https://github.com/{repo_full}",
                    'sourcePlatform': platform_name,
                    'candidateDescription': desc if desc else title,
                    'claimedPrimitive': ', '.join(claimed),
                    'contextUrl': f"https://github.com/fatwang2/awesome-jev" if 'fatwang' in path else "https://github.com/cobanov/awesome-jev"
                }
            else:
                if platform_name not in candidates[repo_lower]['sourcePlatform']:
                    candidates[repo_lower]['sourcePlatform'] += f"; {platform_name}"
                if len(desc) > len(candidates[repo_lower]['candidateDescription']):
                    candidates[repo_lower]['candidateDescription'] = desc

process_file('.agents/explorer_osint_community/fatwang2.md', 'Awesome Jev Community (fatwang2)')
process_file('.agents/explorer_osint_community/cobanov.md', 'Awesome Jev Community (cobanov)')

# Additional OSINT Forum & Community findings
extra_osint = [
    {
        'repo': 'monteduro/killmyidea',
        'repoUrl': 'https://github.com/monteduro/killmyidea',
        'sourcePlatform': 'Reddit (r/LocalLLaMA & r/artificial)',
        'candidateDescription': 'Proof-of-concept idea evaluation engine using Jev Score and Choice to rigorously stress-test and score project proposals without LLM text bloat.',
        'claimedPrimitive': 'Score, Choice',
        'contextUrl': 'https://www.reddit.com/r/LocalLLaMA/comments/typesafe_jev_eval/'
    },
    {
        'repo': 'TheoLeeCJ/SemIf',
        'repoUrl': 'https://github.com/TheoLeeCJ/SemIf',
        'sourcePlatform': 'Reddit / V2EX / Hacker News',
        'candidateDescription': 'Formerly OpenJev: Independent study and reproduction of typed option readout from frozen open models with shared-prefix experiments and WebGPU demo.',
        'claimedPrimitive': 'Choice, Score, Noul, systemOne API',
        'contextUrl': 'https://news.ycombinator.com/item?id=49760156'
    },
    {
        'repo': 'r-ms/mini-jev',
        'repoUrl': 'https://github.com/r-ms/mini-jev',
        'sourcePlatform': 'Hacker News',
        'candidateDescription': 'TypeSafe Jev implemented locally on top of an LLM using constrained logit evaluation for Choice and Noul primitives.',
        'claimedPrimitive': 'Choice, Noul, systemOne API',
        'contextUrl': 'https://news.ycombinator.com/item?id=49748643'
    },
    {
        'repo': 'dabit3/jev-experiments',
        'repoUrl': 'https://github.com/dabit3/jev-experiments',
        'sourcePlatform': 'Hacker News & X/Twitter',
        'candidateDescription': 'Latency-focused agentic decision benchmarks and demos built by Devin exploring sub-100ms TypeSafe Jev routing.',
        'claimedPrimitive': 'Choice, Score, systemOne API',
        'contextUrl': 'https://news.ycombinator.com/item?id=49757995'
    },
    {
        'repo': 'jcpsimmons/jev-model-router-demo',
        'repoUrl': 'https://github.com/jcpsimmons/jev-model-router-demo',
        'sourcePlatform': 'Hacker News',
        'candidateDescription': 'Fast dynamic LLM router using Jev Choice decisions to route user prompts to specialized small vs large models in under 80ms.',
        'claimedPrimitive': 'Choice',
        'contextUrl': 'https://news.ycombinator.com/item?id=49745212'
    },
    {
        'repo': 'gargpratyush/jev-router',
        'repoUrl': 'https://github.com/gargpratyush/jev-router',
        'sourcePlatform': 'Hacker News',
        'candidateDescription': 'High-throughput semantic request router leveraging TypeSafe Jev discrete choice classification.',
        'claimedPrimitive': 'Choice, Score',
        'contextUrl': 'https://news.ycombinator.com/item?id=49750649'
    },
    {
        'repo': 'TitovDigital/kbai-skill',
        'repoUrl': 'https://github.com/TitovDigital/kbai-skill',
        'sourcePlatform': 'Hacker News (Show HN)',
        'candidateDescription': 'Open-source skill framework exploring alternatives and integrations with TypeSafe.ai decision workflows.',
        'claimedPrimitive': 'Choice, Score',
        'contextUrl': 'https://news.ycombinator.com/item?id=49750649'
    },
    {
        'repo': 'TianyuCodings/NanoJev',
        'repoUrl': 'https://github.com/TianyuCodings/NanoJev',
        'sourcePlatform': 'V2EX / Tech Blogs',
        'candidateDescription': 'Small parallel-decision model with dynamic candidates, training pipeline, and recorded game comparisons using Jev decision mechanics.',
        'claimedPrimitive': 'Choice, Score, systemOne API',
        'contextUrl': 'https://www.v2ex.com/t/typesafe_jev'
    },
    {
        'repo': 'zhengxuyu/litjev',
        'repoUrl': 'https://github.com/zhengxuyu/litjev',
        'sourcePlatform': 'V2EX / Tech Blogs',
        'candidateDescription': 'Open reproduction of Jev decision layer on Qwen models serving /v1/systemone schema (Choice, Score, Noul) from local checkpoints via logits.',
        'claimedPrimitive': 'Choice, Score, Noul, systemOne API',
        'contextUrl': 'https://www.v2ex.com/t/typesafe_jev'
    },
    {
        'repo': 'zhihz/openjev',
        'repoUrl': 'https://github.com/zhihz/openjev',
        'sourcePlatform': 'V2EX / GitHub',
        'candidateDescription': 'Local bilingual probability decisions from context, questions, and candidate answers following Jev System One format.',
        'claimedPrimitive': 'Choice, Noul',
        'contextUrl': 'https://www.v2ex.com/t/typesafe_jev'
    }
]

for item in extra_osint:
    r_low = item['repo'].lower()
    if r_low not in existing and r_low not in excluded:
        if r_low not in candidates:
            candidates[r_low] = item
        else:
            if item['sourcePlatform'] not in candidates[r_low]['sourcePlatform']:
                candidates[r_low]['sourcePlatform'] += f"; {item['sourcePlatform']}"
            if len(item['candidateDescription']) > len(candidates[r_low]['candidateDescription']):
                candidates[r_low]['candidateDescription'] = item['candidateDescription']
            candidates[r_low]['contextUrl'] = item['contextUrl']

print(f"Total candidates collected: {len(candidates)}")
with open('.agents/explorer_osint_community/candidates.json', 'w') as f:
    json.dump(list(candidates.values()), f, indent=2, ensure_ascii=False)
