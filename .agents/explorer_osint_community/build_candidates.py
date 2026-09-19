import re
import json

existing = set(line.strip() for line in open('.agents/explorer_osint_community/existing_repos.txt'))
excluded = set(line.strip() for line in open('.agents/explorer_osint_community/excluded_repos.txt'))

candidates = {}

# 1. From Markdown files (fatwang2.md and cobanov.md)
for source_file, platform in [('fatwang2.md', 'Awesome Jev Community (fatwang2)'), ('cobanov.md', 'Awesome Jev Community (cobanov)')]:
    content = open('.agents/explorer_osint_community/' + source_file).read()
    pattern = re.compile(r'-\s+\[(?P<title>[^]]+)\]\((?P<url>https?://github\.com/(?P<owner>[^/\s()]+)/(?P<name>[^/\s()#?]+))\)\s*[-—:]*\s*(?P<desc>.*)')
    for line in content.split('\n'):
        m = pattern.search(line)
        if m:
            title = m.group('title').strip()
            owner = m.group('owner').strip()
            name = m.group('name').strip().rstrip('.git').rstrip('/')
            repo_id = f"{owner}/{name}"
            desc = m.group('desc').strip().replace(r'\_', '_').replace(r'\.', '.').replace(r'\(', '(').replace(r'\)', ')')
            repo_lower = repo_id.lower()

            # Skip blacklisted orgs or meta lists
            parts = repo_lower.split('/')
            if len(parts) != 2:
                continue
            owner_low, repo_name_low = parts
            if owner_low in ['orgs', 'users', 'collections', 'events', 'features', 'topics', 'sponsors']:
                continue
            if 'awesome-jev' in repo_name_low or 'awesome-typesafe' in repo_name_low:
                continue
            if repo_lower in existing or repo_lower in excluded:
                continue

            # Identify claimed primitives from description
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
                if any(x in desc_lower for x in ['decision', 'judge', 'routing', 'pick', 'rate', 'gate', 'decide', 'select', 'filter', 'eval']):
                    claimed.append('Decision Primitive')
                else:
                    claimed.append('TypeSafe SDK / Client')

            clean_repo_url = f'https://github.com/{repo_id}'
            source_url = f'https://github.com/{source_file.replace(".md", "")}/awesome-jev' if 'fatwang' in source_file else 'https://github.com/cobanov/awesome-jev'

            if repo_lower not in candidates:
                candidates[repo_lower] = {
                    'repo': repo_id,
                    'repoUrl': clean_repo_url,
                    'sourcePlatform': platform,
                    'candidateDescription': desc if desc else title,
                    'claimedPrimitive': ', '.join(claimed),
                    'contextUrl': source_url
                }
            else:
                # Merge description if more detailed
                if len(desc) > len(candidates[repo_lower]['candidateDescription']):
                    candidates[repo_lower]['candidateDescription'] = desc
                if platform not in candidates[repo_lower]['sourcePlatform']:
                    candidates[repo_lower]['sourcePlatform'] += f'; {platform}'

# 2. Known Reddit & HN & V2EX specific discoveries
community_discoveries = [
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
        'sourcePlatform': 'Reddit / V2EX / HN',
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

for item in community_discoveries:
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

print(f"Total Unique Filtered Candidates: {len(candidates)}")
with open('.agents/explorer_osint_community/candidates_raw.json', 'w') as f:
    json.dump(list(candidates.values()), f, indent=2)
