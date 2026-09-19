# Original User Request

## 2026-09-19T04:18:33Z

Use a very large team of agents. 全网多渠道（X/Twitter via Grok MCP gateway、Reddit、Hacker News、V2EX、Linux.do、技术博客与 GitHub）深度穷尽式搜索挖掘 JEV / TypeSafe 相关开源项目，审查并提取真实使用 Jev 决策机制的代码库，完成无 AI 味的多语言元数据编制与全站合规入库，并在本地执行全量测试与构建校验。

Working directory: /Users/chenrongwei/.gemini/antigravity/scratch/awesome-jev-projects
Integrity mode: development

## Requirements

### R1. 全网多渠道开源情报穷尽式挖掘
利用 Grok MCP gateway 针对 X/Twitter 平台深度检索知名 AI 极客（包括但不限于 @CompleteSkeptic、@trycua、@ctatedev、@jarrodwatts、@altryne、@nutlope、@karpathy 等）与 TypeSafe/Jev 关键词；并结合全网搜索工具对 Reddit、Hacker News、V2EX、Linux.do、技术论坛博客及 GitHub 全站代码进行全方位横向扫描，汇总所有声称或实际使用 Jev 的开源代码库。

### R2. 严格源码级准入审查与防套壳去重
对所有候选项目进行代码级查验（定位到具体的固定 Commit SHA 与关键源文件），验证其在核心执行流程中真实接入了 TypeSafe Jev 决策机制（调用 Choice 选项抉择、Score 离散评分、Noul 概率推理或 systemOne API），严格剔除注册机、号池反代、纯依赖声明、无源码 Demo 以及已收录的重复项目。

### R3. 深度逆向理解与高质量原创多语言编制
深入阅读候选项目源码，提炼其真实架构中的“Jev 在哪里做决策”（Decision Role）与“核心工程收益”（Highlight Benefit），以自然优雅、无 AI 味的技术语言编写中英双语介绍，并在 scripts/readme-i18n.mjs 中补齐地道的日文（JA）与韩文（KO）词典映射。

### R4. 全站元数据集成与全量自动化校验
将新项目安全合规地增补至 src/data/projects.json，同步更新 index.html（Schema.org 计数）与 public/llms.txt；重新编译 4 国语言 README（EN、ZH、JA、KO）；执行 npm test 确保 90+ 项自动化测试全部通过，执行 npm run build 确保生产构建与代码审计通过；在本地创建规范的 Git 检查点，等待用户人工确认后方可推送。

## Acceptance Criteria

### 准入与真实性标准
- [ ] 所有新入库项目必须具备公开可访问的 GitHub 仓库地址，且绑定具体的不可变 Commit SHA 与可查验的源码文件路径。
- [ ] 源码中必须包含确凿的 Jev 决策原语调用证据（如 from typesafe import ...、TypeSafeClient、.choice(、.score(、.noul(、.systemOne( 或经过 OpenRouter 的 Jev 决策模型 API 调用），杜绝任何概念炒作或套壳项目。
- [ ] 不引入任何已存在于 src/data/projects.json 中的重复仓库（检查 GitHub 仓库路径与 Numeric ID）。

### 语言与文案标准
- [ ] 英文 README (README.md) 与韩文 README (README.ko.md) 保持纯正语言环境，全局 0 中文字符泄漏（通过自动化测试验证）。
- [ ] 中文描述表述自然、极客风范、简洁专业，绝无机械翻译或模板痕迹。
- [ ] 日文与韩文字典映射完备，没有未翻译的英文回退占位符。

### 测试与构建验证
- [ ] 执行 DEVELOPER_DIR=/Library/Developer/CommandLineTools npm test，全量测试套件（90+ tests）100% 通过（0 失败、0 告警）。
- [ ] 执行 DEVELOPER_DIR=/Library/Developer/CommandLineTools npm run build，TypeScript 类型检查与生产产物审计（audit-build.mjs）全部通过。
- [ ] 保持本地 Git 干净工作区，生成原子性提交记录，不自动 push 到远端。
