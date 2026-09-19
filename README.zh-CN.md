<div align="center">

<a href="https://logicrw.github.io/awesome-jev-projects/">
  <img src="https://raw.githubusercontent.com/logicrw/awesome-jev-projects/main/public/banner-zh.svg" alt="Awesome Jev Projects Banner" width="880" style="max-width: 100%; border-radius: 12px;" />
</a>

<br/><br/>

<p>
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="https://logicrw.github.io/awesome-jev-projects/"><img src="https://img.shields.io/badge/Live%20Radar-logicrw.github.io-059669?style=flat-square&logo=safari" alt="Live Radar" /></a>
  <a href="#contents"><img src="https://img.shields.io/badge/Curated%20Projects-169%2B-2563eb?style=flat-square" alt="Projects Count" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-d97706.svg?style=flat-square" alt="License: MIT" /></a>
  <a href="https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml"><img src="https://img.shields.io/badge/PRs-Welcome-16a34a.svg?style=flat-square" alt="PRs Welcome" /></a>
</p>

<p>
  <strong>多语言版本:</strong>&nbsp;
  <a href="README.md">English</a> • 
  <a href="README.zh-CN.md">简体中文</a> • 
  <a href="README.ja.md">日本語</a> • 
  <a href="README.ko.md">한국어</a>
</p>

<p>
  <a href="https://logicrw.github.io/awesome-jev-projects/"><strong>🌐 访问在线交互雷达站</strong></a> • 
  <a href="https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml"><strong>📝 提交开源项目</strong></a>
</p>

<p>严谨收录 **169+** 个由 TypeSafe AI Jev 模型驱动的真实开源应用、工程工具与评测基准。拒绝无源码概念炒作，每项均绑定可查验的提交版本。</p>

</div>

---

> **为什么建立 Awesome Jev？**  
> 与长文本自回归生成模型不同，TypeSafe AI 的 Jev 专攻 100 毫秒以内的结构化决策判断（`Choice` 选项抉择、`Score` 离散评分与 `Noul` 概率推理）。  
> 本雷达站专为开发者呈现真正将 Jev 落地为核心决策单元的开源项目。纯净真实、代码可查、开箱即用。

---
<a id="contents"></a>
## 目录索引

- [⚡ 高频模拟与实时博弈 (13)](#high-frequency-simulation-zh)
- [🛠️ 开发工具包与决策框架 (11)](#sdk-decision-frameworks-zh)
- [🔌 生态框架与接入适配器 (8)](#sdk-integrations-zh)
- [💻 命令行工具与自动化工作流 (26)](#cli-pipelines-zh)
- [💾 数据库扩展与语义检索 (4)](#data-search-zh)
- [🌐 浏览器与桌面端自动化 (14)](#browser-os-action-zh)
- [🧹 上下文垃圾回收与降噪 (7)](#context-gc-filter-zh)
- [🛡️ 安全防御与输入护栏 (9)](#security-guardrails-zh)
- [🧩 MCP 协议与工具扩展 (28)](#mcp-integrations-zh)
- [🧭 代码库分析与图谱寻路 (9)](#codebase-graph-pathfinding-zh)
- [🔀 模型路由与成本优化 (9)](#routing-cost-optimization-zh)
- [📊 垂直行业与专业业务系统 (15)](#domain-vertical-tools-zh)
- [🎯 通用决策与启发式评估 (10)](#decision-tools-zh)
- [🏷️ 文本分类与分类学标注 (2)](#classification-taxonomy-zh)
- [📈 评测基准与系统可观测性 (1)](#evaluation-observability-zh)
- [🎙️ 实时语音与多轮对话 (1)](#voice-conversation-zh)
- [🎨 创意生成与多媒体编排 (2)](#creative-tools-zh)
- [📖 本地运行与架构原理](#dev-arch-zh)
- [🤝 如何提交你的项目](#submit-guide-zh)

---

<a id="high-frequency-simulation-zh"></a>
## ⚡ 高频模拟与实时博弈

*在游戏对战、机器人与高频仿真模拟闭环中做出毫秒级离散动作抉择。*

- [**jevpilot**](https://github.com/standardagents/jevpilot) `★ 58` - 在浏览器里开一辆小车，让 Jev 从提前算好的路线和速度里选下一步。
  - 🎯 **核心决策**: 读取路况、附近车辆和候选轨迹，选择转向与速度；碰撞预测和紧急刹车由代码处理。
  - 💡 **收益亮点**: 把驾驶判断和物理计算拆开，能直接查看每次选择及其概率。

- [**1v1 Jev**](https://github.com/emrickgarrett/OneVOneJev) `★ 5` - 在浏览器里和 Jev 打一局 1v1 射击。它看结构化战况，选走位、瞄准和开火。
  - 🎯 **核心决策**: 每个决策 tick 同时询问移动、视角、开镜、开火与跳跃；API 不可用时切到启发式逻辑。
  - 💡 **收益亮点**: 把结构化判断放进持续交互的游戏循环，直观看到决策过程。

- [**live-jev**](https://github.com/vinilana/live-jev) `★ 3` - 俯视小车模拟器：Jev 选车道和速度，还能与聊天模型跑同一条路线。
  - 🎯 **核心决策**: 一次请求判断变道、速度、危险程度和是否让行，代码再按阈值执行。
  - 💡 **收益亮点**: 把两种模型放进相同路况里，直接对照决策、耗时和用量。

- [**jev-shield**](https://github.com/vmendes90/jev-shield) `★ 2` - 读取当前状态，在可用动作中做选择。
  - 🎯 **核心决策**: 读取当前状态，在可用动作中做选择。
  - 💡 **收益亮点**: 在连续交互中观察决策效果；频率依实际运行而定。

- [**JevBird**](https://github.com/leftspace89/JevBird) `★ 2` - 让 Jev 玩 Flappy Bird：代码先算候选飞行路线，再让模型选走哪条。
  - 🎯 **核心决策**: 每根管道通常问一次 Choice 选轨迹，同时用 Noul 判断危险；代码安排拍翅时间。
  - 💡 **收益亮点**: 不用每帧问模型，界面还能画出选中和被拒绝的路线。

- [**doom-jev**](https://github.com/AmoghCreator/doom-jev) `★ 1` - 让 Jev 玩 Doom：看结构化战况，决定往哪走、瞄谁和什么时候开火。
  - 🎯 **核心决策**: 选择宏观目标、敌人、移动、转向、跳跃与开火；几何逻辑接手细微瞄准。
  - 💡 **收益亮点**: 把游戏运行和网络推理分开，不必每一帧都等待模型。

- [**jev-curate**](https://github.com/AkashPriyadarshii/jev-curate) `★ 1` - 读取当前状态，在可用动作中做选择。
  - 🎯 **核心决策**: 读取当前状态，在可用动作中做选择。
  - 💡 **收益亮点**: 在连续交互中观察决策效果；频率依实际运行而定。

- [**jev-doom-agent**](https://github.com/lukaske/jev-doom-agent) `★ 1` - 在浏览器里跑两份 Doom 引擎，让 Jev 根据游戏状态选择战术动作。
  - 🎯 **核心决策**: 读取结构化血量、弹药和可见目标，从战术宏中选一项，再交给本地控制器执行。
  - 💡 **收益亮点**: 能在相同起点对照不同策略，并查看每次模型决策。

- [**jev-gomoku**](https://github.com/XieChengYuan/jev-gomoku) `★ 1` - 弈瞬：双 Jev 玩家在九宫格五子棋中对战，比较不同输入信息对落子决策的影响，并逐手展示真实请求与返回。
  - 🎯 **核心决策**: 每盘每手回答一个 Choice 问题：根据棋盘、规则、颜色和合法候选选择落子点，由本地代码校验执行。
  - 💡 **收益亮点**: 逐手展示真实请求与返回概率，支持免 API Key 真实对局回放与 OpenRouter 自定义对战，支持 JSON 导出。
  - 🌐 [在线演示](https://xiechengyuan.github.io/jev-gomoku/)

- [**jev-little-airways**](https://github.com/lbotinelly/jev-little-airways) `★ 1` - 小岛机场模拟器：让 Jev 判断飞机是否改降、盘旋、让行，以及谁先落地。
  - 🎯 **核心决策**: 每架飞机提交油量、预计时间和附近交通，塔台另问降落顺序。
  - 💡 **收益亮点**: 把多飞机冲突做成可观察的决策场景，每次请求都能展开查看。

- [**jevarena**](https://github.com/raihankhan-rk/jevarena) `★ 1` - 读取当前状态，在可用动作中做选择。
  - 🎯 **核心决策**: 读取当前状态，在可用动作中做选择。
  - 💡 **收益亮点**: 在连续交互中观察决策效果；频率依实际运行而定。

- [**jev-demos**](https://github.com/Bud-ro/jev-demos) - 用迷宫考 Jev：只问下一步，或一次问后面很多步，看看它何时撞墙、绕路或反复打转。
  - 🎯 **核心决策**: 把迷宫状态与多步候选动作交给 Jev，再由模拟器逐步执行和判分。
  - 💡 **收益亮点**: 用明确的合法移动规则比较不同问法，展示空间推理的局限。

- [**jev-experiments**](https://github.com/mittal-parth/jev-experiments) - 让 Jev 玩 Chrome 小恐龙和本地射击竞技场：读取结构化状态，选跳跃、移动、瞄准和开火。
  - 🎯 **核心决策**: 每个 tick 并行询问动作与相关开关，Python 或页面代码执行物理和碰撞规则。
  - 💡 **收益亮点**: 把持续游戏决策做成带日志和观察面板的可试验循环。

---

<a id="sdk-decision-frameworks-zh"></a>
## 🛠️ 开发工具包与决策框架

*封装 Jev 结构化调用与类型安全交互的多语言客户端、绑定库与决策引擎。*

- [**req_llm**](https://github.com/agentjido/req_llm) `★ 577` - 在 Elixir 的 ReqLLM 里接入 Jev 判断题。使用 evaluate 接口提交状态与问题，返回答案和概率；聊天生成仍走其他模型。
  - 🎯 **核心决策**: TypeSafe provider 把 evaluate 请求发到 System One，并统一是非、单选和评分结果。
  - 💡 **收益亮点**: Elixir 应用能沿用同一套鉴权、重试、用量与遥测接口。

- [**instructor-php**](https://github.com/cognesy/instructor-php) `★ 327` - 让 PHP 应用通过统一的 Decision 接口使用 Jev。把业务状态和判断题交进去，拿回程序可处理的选项、分数与概率。
  - 🎯 **核心决策**: 通过 Polyglot 的 TypeSafe 驱动调用 Jev，对调用方指定的问题作答。
  - 💡 **收益亮点**: 现有 PHP 项目可以复用配置、错误处理和事件记录；这是新增的决策模型支持。

- [**openai-scala-client**](https://github.com/cequence-io/openai-scala-client) `★ 248` - 让 Scala 应用也能接入 Jev。这个多模型客户端新增了独立 TypeSafe 模块，用状态和判断题获取结构化答案。
  - 🎯 **核心决策**: 调用 System One 返回单选、评分和是非概率；可把受支持的封闭 JSON Schema 转成判断题。
  - 💡 **收益亮点**: 能沿用 Scala 的异步接口和错误处理；Jev 是额外支持的 provider，不承担普通聊天生成。

- [**pi-fabric**](https://github.com/monotykamary/pi-fabric) `★ 233` - 给 Pi 的工具运行时加上可编程的 Jev 决策循环。先写好观察、判断和执行步骤，再让它按预算在前台或后台运行。
  - 🎯 **核心决策**: 对程序提交的状态做单选、是非判断或评分；循环和动作执行由本地程序控制。
  - 💡 **收益亮点**: 适合把反复发生的小判断写成可复用流程；Jev 是需要配置的可选能力。

- [**effect-agent**](https://github.com/danieljvdm/effect-agent) `★ 116` - 在 Effect Agent 里接入 Jev 决策模型。TypeScript 程序可以用带类型的问题集做判断，也能把它用于可选的模型选择。
  - 🎯 **核心决策**: TypeSafeDecisionModel 通过 TypeSafeClient 调用 Jev，并把概率、单选与评分结果接回 Effect。
  - 💡 **收益亮点**: 复用 Effect 的配置、类型和错误处理；重试与超时由应用自己设置。

- [**jev-visual**](https://github.com/hr98w/jev-visual) `★ 95` - 在 Apple Silicon Mac 本地跑的视觉版 Jev 实验。对单张图片做选择、打分与是非判断，自带 3 个本地视觉游戏 Demo。
  - 🎯 **核心决策**: 复用图像上下文，读取模型 logits 直接为候选答案打分，由本地代码拼装结构化结果。
  - 💡 **收益亮点**: 把 Jev 的多问题单次打分范式拓展到端侧视觉场景，本地秒级跑通分拣与体感游戏。

- [**advocaat**](https://github.com/pithings/advocaat) `★ 66` - 用简短的 TypeScript 调用向 Jev 提问。把同一份数据里的多个判断一次写好，直接拿到概率、选项和分数。
  - 🎯 **核心决策**: 将带类型的问题转成 System One 请求，并把命名答案映射回调用方。
  - 💡 **收益亮点**: 减少手写请求和解析代码，也支持通过 Vercel 网关调用。

- [**jev-java**](https://github.com/Olti1947/jev-java) `★ 2` - 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 🎯 **核心决策**: 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 💡 **收益亮点**: 在现有程序中复用接入代码，减少重复处理接口细节。

- [**jev-starter**](https://github.com/hamakyo/jev-starter) `★ 1` - 给 Jev 判断补上应用里的后半段：把结果送去自动处理、备用模型或人工复核，并记录每条规则的效果。
  - 🎯 **核心决策**: 为分类或检查任务提供选项与概率；代码里的阈值决定后续处理路线。
  - 💡 **收益亮点**: 把业务规则留在代码里，便于评估误判、转人工比例和不同阈值的取舍。

- [**jevclient**](https://github.com/AboveColin/jevclient) `★ 1` - 在 Python 异步程序里调用 Jev 的小客户端。一次发出多个判断问题，直接拿到分类、分数和概率对象。
  - 🎯 **核心决策**: 围绕同一份状态回答是非、单选和评分问题，把结果交还 Python 程序继续处理。
  - 💡 **收益亮点**: 省去自己封装请求和解析回答的工作；可复用 aiohttp 连接，重试策略由调用方掌握。

- [**jevify**](https://github.com/altryne/jevify) `★ 1` - 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 🎯 **核心决策**: 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 💡 **收益亮点**: 在现有程序中复用接入代码，减少重复处理接口细节。

---

<a id="sdk-integrations-zh"></a>
## 🔌 生态框架与接入适配器

*将现有智能体框架、调度器与上层应用系统平滑接入 Jev 的集成适配器。*

- [**langchain**](https://github.com/langchain-ai/langchain) `★ 146595` - 给 Python LangChain 流程加一个可选 Jev 分类节点，返回类别、概率和等级评分。
  - 🎯 **核心决策**: TypeSafeClassifier 将 JSON 状态及类型化问题发送到 /v1/systemone，支持同步与异步 Runnable 调用。
  - 💡 **收益亮点**: 把结构化判断接进已有 LangChain 流程与追踪接口。

- [**oh-my-pi**](https://github.com/can1357/oh-my-pi) `★ 31786` - Oh My Pi 可选用 Jev 处理小判断：该用多深思考、是否意外停下，以及 Git 暂存相关分类。
  - 🎯 **核心决策**: 统一 judgment 接口在提供 TypeSafe 凭据后调用 Jev；结构化问题返回概率供本地策略使用。
  - 💡 **收益亮点**: 把小型分类任务集中到专门接口，保留替换后端的能力。

- [**composio**](https://github.com/ComposioHQ/composio) `★ 30228` - 给 Composio 工具箱接一个可选 Jev 决策层：从工具列表挑工具，填能枚举的参数，其余交给调用方补。
  - 🎯 **核心决策**: 把工具与封闭参数编译成类型化问题，返回完整调用、部分调用或弃权；随后显式 execute。
  - 💡 **收益亮点**: 复用已有 Composio 工具，同时把缺少的参数和置信度明确暴露出来。

- [**ai**](https://github.com/vercel/ai) `★ 26825` - AI SDK 的可选 TypeSafe provider：用统一 evaluate 接口一次问 Jev 多个选择、评分和是非问题。
  - 🎯 **核心决策**: 把共享状态与问题发到 System One API，将原生概率、分数和用量映射回 SDK 结果。
  - 💡 **收益亮点**: 已有 AI SDK 项目可以沿用接口接入结构化评估。

- [**pydantic-ai**](https://github.com/pydantic/pydantic-ai) `★ 20027` - Pydantic AI 的可选 Jev 模型：把输出模型里的布尔和枚举字段变成问题，拿回符合类型的判断。
  - 🎯 **核心决策**: TypeSafeModel 将支持的 output_type 字段编译为类型化问题，经 TypeSafeProvider 请求 API 后还原输出。
  - 💡 **收益亮点**: 决策型 Agent 可以复用 Pydantic 输出定义，并与其他模型作对照。

- [**eliza**](https://github.com/elizaOS/eliza) `★ 19359` - Eliza 源码内有一个可选 TypeSafe HTTP 适配器，供明确调用时发送结构化判断请求。
  - 🎯 **核心决策**: 调用方提供模型、状态和问题，systemOne 校验输入输出后请求 Jev。
  - 💡 **收益亮点**: 为需要接入的代码提供受约束的请求与响应验证。

- [**langchainjs**](https://github.com/langchain-ai/langchainjs) `★ 18207` - LangChain.js 的可选 Jev 分类器：给状态配上问题，返回可直接在程序里使用的类别和评分。
  - 🎯 **核心决策**: TypeSafeClassifier 按 Runnable 接口发送共享状态与 Choice、Noul、Score，校验并整理回答。
  - 💡 **收益亮点**: TypeScript 工作流可以直接组合结构化判断节点。

- [**ax**](https://github.com/ax-llm/ax) `★ 2926` - Ax 的可选 TypeSafe 接口：用布尔或固定类别签名调用 Jev，也可直接读取原生概率与评分。
  - 🎯 **核心决策**: 适配器将支持的输出字段变成 Jev 问题，原生 client 的 systemOne 负责发送和验证回答。
  - 💡 **收益亮点**: 结构化决策可以和 Ax 的生成式步骤显式组合。

---

<a id="cli-pipelines-zh"></a>
## 💻 命令行工具与自动化工作流

*在终端脚本、Unix 管道与 CI/CD 自动化流程中引入语义判断的工程工具。*

- [**jev-voice-browser**](https://github.com/moritzkremb/jev-voice-browser) `★ 35` - 对输入文本做分类或打分，交给本地规则继续处理。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**supercov**](https://github.com/supercorp-ai/supercov) `★ 32` - 给编码 agent 的代码质量与测试覆盖率 CLI：Jev 给每个源文件打分，agent 就知道该先修哪里。覆盖率在本地跑，不需要账号。
  - 🎯 **核心决策**: 每个源文件一次请求，问 Jev 12 个命名属性的 Noul 判断；分数、good/fair/weak 分档和文件排序都由 CLI 自己算。
  - 💡 **收益亮点**: 分数可以拆回具体属性，对着文件核对；答案按内容缓存，第二次只为改动付费。

- [**hono-jev-router**](https://github.com/yusukebe/hono-jev-router) `★ 19` - 对输入文本做分类或打分，交给本地规则继续处理。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**jev-playground**](https://github.com/mizchi/jev-playground) `★ 14` - 一个 MoonBit 实验场：让 Jev 下五子棋、打简化 MOBA、判断命令风险，也试着把判断写进小语言。
  - 🎯 **核心决策**: 把棋盘、游戏状态、命令或候选任务转成类型化问题，让 Jev 选动作或给风险评分。
  - 💡 **收益亮点**: 把不同问题的问法、结果和限制放到可重跑的小实验里比较。

- [**openjev**](https://github.com/razorback16/openjev) `★ 14` - 对输入文本做分类或打分，交给本地规则继续处理。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**SemDecide**](https://github.com/sharziki/semdecide) `★ 5` - 给终端管道加一点语义判断：一句话分类、一批文本过滤，都能接在 Bash 和 CI 后面。
  - 🎯 **核心决策**: 对输入做分类或概率判断，再由本地规则执行阈值、退出码与 allow/escalate/block。
  - 💡 **收益亮点**: 不用搭一个完整 Agent，也能把语义判断嵌进现有脚本。

- [**jev-lm**](https://github.com/y0usaf/jev-lm) `★ 4` - 把下一个词当选择题，试着用 Jev 拼出句子；也能让它挑选本地草拟的整段续写。
  - 🎯 **核心决策**: Choice 选词，Noul 判断候选续写能否接上以及是否该停止。
  - 💡 **收益亮点**: 用一套小实验看清决策模型拿来生成文字时会遇到什么问题。

- [**typesafe-jev-workflow**](https://github.com/GiesN/typesafe-jev-workflow) `★ 4` - typesafe-jev-workflow 在终端和自动化脚本中加入文本判断。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**jev-chat**](https://github.com/adhyaay-karnwal/jev-chat) `★ 3` - 一个研究聊天解码器：不断让 Jev 选词或短语，再由代码接成回答。
  - 🎯 **核心决策**: 从分层候选表选下一段内容，或一次选定完整回复。
  - 💡 **收益亮点**: 把选答案和生成语言的差别变成可查看的实验记录。

- [**jev-cli**](https://github.com/tumf/jev-cli) `★ 2` - 在终端发一段文本或 JSON，直接拿回「是不是、选哪个、打几分」。输出能接进脚本继续处理。
  - 🎯 **核心决策**: 将单题或多题状态发送给 Jev，返回 Noul、Choice、Score 的完整 JSON 或主值。
  - 💡 **收益亮点**: 只用 Python 标准库提供输入、退出码和结构化错误，方便管道调用。

- [**jev-pref**](https://github.com/doeixd/jev-pref) `★ 2` - 把 AGENTS.md 中的项目偏好转为 jev-pref.json 规则，用 Jev 审查代码变更（hunk、暂存文件、PR），并把发现反馈给编码 Agent。
  - 🎯 **核心决策**: 对每条偏好规则和每个代码变更片段，判断该变更是否违反这条规则。
  - 💡 **收益亮点**: 以 CLI 形式运行（npx jev-pref setup），可接入 pre-commit、PR 与 Agent 工作流，区分阻断与建议级发现。

- [**jev-system-one**](https://github.com/haseeb-heaven/jev-system-one) `★ 2` - 在终端里提问：OpenAI 写回答，Jev 负责定回答方式、检查草稿并决定是否重写。
  - 🎯 **核心决策**: 先判断模式、深度与澄清需求，再检查草稿是否切题、有无无依据陈述。
  - 💡 **收益亮点**: 回答和决策报告并排显示，方便看模型为什么进入下一步。

- [**jevcal**](https://github.com/abhixhek/jevcal) `★ 2` - 对输入文本做分类或打分，交给本地规则继续处理。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**pi-fast-jev-compaction**](https://github.com/joelhooks/pi-fast-jev-compaction) `★ 2` - 给 Pi 删掉过时的工具调用和结果，保留原话，不另外生成摘要。
  - 🎯 **核心决策**: 对每个工具调用分别问是否保留调用与结果，再执行保留、截短结果或成对删除。
  - 💡 **收益亮点**: 减少送给主模型的旧工具内容，并保留可重建的裁剪记录。

- [**todo-jev**](https://github.com/maker-KK/todo-jev) `★ 2` - 对输入文本做分类或打分，交给本地规则继续处理。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**ask-jev**](https://github.com/omni-/ask-jev) `★ 1` - 在 Windows Codex 会话里输入 :jev，让它按已记录的执行证据做一次检查。
  - 🎯 **核心决策**: 向 Jev 批量询问测试、执行与证据是否支持结论，也可单独问一个是非题。
  - 💡 **收益亮点**: 把“Agent 说做了”与日志里实际留下的证据分开检查。

- [**is-odd-jev**](https://github.com/alxcrt/is-odd-jev) `★ 1` - 一个刻意小题大做的实验：把数字交给 Jev，问它是不是奇数，再看返回的概率。
  - 🎯 **核心决策**: 用 Noul 回答 Is n odd，本地按概率转成布尔值。
  - 💡 **收益亮点**: 用极小接口示例观察模型判断与确定性计算的差别。

- [**jev-askable-arm**](https://github.com/TarunTomar122/jev-askable-arm) `★ 1` - 对输入文本做分类或打分，交给本地规则继续处理。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**jev-cli**](https://github.com/jtsang4/jev-cli) `★ 1` - 在终端里问 Jev 判断题。输入文本或 JSON，再给出分类、是非或评分问题，拿回脚本能直接读取的 JSON。
  - 🎯 **核心决策**: 针对同一份输入做分类、真假判断和分级评分，返回选项及其概率。
  - 💡 **收益亮点**: 能接收标准输入，把语义校验接进已有脚本和 CI；支持直连 TypeSafe 或走 Vercel 网关。

- [**jev-cli**](https://github.com/Nasrallah-AL/jev-cli) `★ 1` - 对输入文本做分类或打分，交给本地规则继续处理。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**jev-code**](https://github.com/rhighs/jev-code) `★ 1` - 一个实验性编程终端：让 Jev 做受限选择，逐步拼出 AST，并调用本地工具。
  - 🎯 **核心决策**: 在有限语法和工具候选里选下一步，代码负责组合成 Python、Bash 等输出。
  - 💡 **收益亮点**: 能观察结构化决策如何参与代码生成和执行。

- [**jev-synergy-screening**](https://github.com/PistachioAIHQ/jev-synergy-screening) `★ 1` - 对输入文本做分类或打分，交给本地规则继续处理。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**LightJev**](https://github.com/rongxinzy/LightJev) `★ 1` - 用于训练和评测轻量级决策主干模型的实验框架，探索基于 CE/Brier 损失的离线端到端判断。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**pi-jev-compaction**](https://github.com/Wang-auspicious/pi-jev-compaction) `★ 1` - 让 Jev 判断哪些旧工具记录仍有用，把保留的原文交还给 Pi。
  - 🎯 **核心决策**: 对输入文本做分类或打分，交给本地规则继续处理。
  - 💡 **收益亮点**: 把语义判断接到已有的命令行工作流。

- [**TypeSafe AI Playground**](https://github.com/markjaquith/typesafe-ai-playground) `★ 1` - 一个 Rust 实验箱：查隐私信息、看代码注释、判断表达是否友善，直接在终端试 Jev。
  - 🎯 **核心决策**: 把短任务拆成概率或类别判断，例如是否含 PHI、注释是否有用、语气是否友善。
  - 💡 **收益亮点**: 用可运行的小实验理解结构化判断能放在哪里。

- [**jevscript**](https://github.com/amberwhitehead/jevscript) - 一个把语义判断写进程序语言的早期实验。目前先用手写脚本验证：几个问题合在一起问 Jev 会怎样。
  - 🎯 **核心决策**: M0 脚本对同一工单发送 Choice、Noul、Score，比较合并请求与逐题请求。
  - 💡 **收益亮点**: 给后续解释器设计建立接口与批量请求的基线。

---

<a id="data-search-zh"></a>
## 💾 数据库扩展与语义检索

*免安装插件的原生数据库 SQL 语义扩展、数据表行级智能过滤与重排检索。*

- [**pg-jev**](https://github.com/realZachi/pg-jev) `★ 137` - 让 SQL 直接问「哪些工单的客户正在生气」。用一句人话给数据库行筛选、分类和排序。
  - 🎯 **核心决策**: 把行内容成批交给 Jev，返回是否符合条件、所属类别或等级分数，供 WHERE、GROUP BY、ORDER BY 使用。
  - 💡 **收益亮点**: 语义条件可以和原有 SQL 一起写，并复用同一会话里已经算过的判断。

- [**jev-search**](https://github.com/superagents-lab/jev-search) `★ 38` - 用人话搜网页，先挑搜索源和时间范围，再把相关链接排到前面。页面给链接和摘要，不代写答案。
  - 🎯 **核心决策**: Jev 对请求做结构化判断以选择检索参数，再给 Search1API 返回的标题和摘要评分。
  - 💡 **收益亮点**: 把来源选择与结果排序串起来，同时保留可改的过滤条件和失败来源提示。

- [**jevql**](https://github.com/kylemclaren/jevql) `★ 2` - 针对原生 Postgres 的 Jev 语义 SQL 扩展。无需装插件，在终端和 Go/TS/Python SDK 中直接用 WHERE jev() 做语义过滤、排序与分组。
  - 🎯 **核心决策**: 对 SQL 初筛后的每一行数据调用 Jev 进行 Noul、Choice 或 Score 判断，结果用于客户端的语义过滤、概率排序或分组。
  - 💡 **收益亮点**: 纯客户端/双阶段执行，支持高并发批量请求与本地缓存（重复内容不重复打分），附带开箱即用的在线 Demo。
  - 🌐 [在线演示](https://jevql.fly.dev/)

- [**llama-index-jev**](https://github.com/WiktorB2004/llama-index-jev) `★ 2` - 给候选记录判断相关性或打分，再由本地程序筛选和排序。
  - 🎯 **核心决策**: 给候选记录判断相关性或打分，再由本地程序筛选和排序。
  - 💡 **收益亮点**: 把语义判断接进已有的数据查询流程。

---

<a id="browser-os-action-zh"></a>
## 🌐 浏览器与桌面端自动化

*网页无障碍树解析、自主浏览器操作与桌面端智能体操作动作裁决。*

- [**jev-ultrafast**](https://github.com/browser-use/jev-ultrafast) `★ 4673` - 给浏览器一个目标，Jev 负责选按钮和动作，文字交给小模型写。作者的 Google Flights 示例约 7.1 秒完成。
  - 🎯 **核心决策**: 读当前 DOM，在一次请求里选择操作和目标元素；需要输入时才调用文本模型。
  - 💡 **收益亮点**: 把界面选择与文字生成分开，减少重复读页面。

- [**jev-desktop**](https://github.com/lahfir/agent-desktop) `★ 1266` - 把电脑里的按钮和菜单交给 Jev 来选。它读原生无障碍结构，一步步完成桌面操作。
  - 🎯 **核心决策**: Jev 同时选择动作与目标，并评估置信度和操作风险；本地策略决定是否执行或停止。
  - 💡 **收益亮点**: 让主 Agent 不必把整棵界面树塞进上下文。

- [**omg.dev**](https://github.com/BennyKok/omg.dev) `★ 531` - omg.dev 的移动端测试脚本可用 Jev 看无障碍树：选下一控件，判断步骤是否完成或已经走不通。
  - 🎯 **核心决策**: 测试辅助 judge 将界面树与 Noul、Choice 问题发往 Jev，精确字符串断言仍由代码控制。
  - 💡 **收益亮点**: 让端到端测试在界面略有变化时多一个语义判断信号。

- [**mobile-jev**](https://github.com/droidrun/mobile-jev) `★ 93` - 给 Android 手机一个目标，Jev 选应用和控件，Mobilerun 负责打开、点击、输入；网页面板能看过程。
  - 🎯 **核心决策**: 一次请求选择操作及兼容目标，本地重新核对控件后通过 Mobilerun 执行。
  - 💡 **收益亮点**: 把移动端动作、观察和执行记录接成可检查的任务循环。

- [**jev-use**](https://github.com/vlad-terin/jev-use) `★ 76` - 让 Codex 先定目标，再让 Jev 连续选控件。浏览器和桌面动作仍由 Codex 的现有工具执行。
  - 🎯 **核心决策**: 根据观察选择目标控件；本地循环执行、检查结果，遇到例外再交回主 Agent。
  - 💡 **收益亮点**: 把多个常规操作收进一次连续流程，减少主模型逐步接力。

- [**jev-browser**](https://github.com/jkudish/jev-browser) `★ 70` - 给它一个网址和任务，它会选按钮、填字段、翻页面，最后交回页面内容和每一步的操作记录。
  - 🎯 **核心决策**: 每步用 Choice 选 DOM 动作，用两个 Noul 判断是否完成或卡住；输入文字交给另一小模型。
  - 💡 **收益亮点**: 通过 MCP、CLI 或库复用同一浏览器循环，并查看动作、恢复过程和错误记录。

- [**unclutter**](https://github.com/kitze/unclutter) `★ 66` - 给网页做视觉减法的浏览器扩展。让 Jev 识别广告、促销和订阅弹窗，再把可复用的隐藏规则存在本地。
  - 🎯 **核心决策**: 对页面元素候选做分类，只让通过阈值的非必要元素进入隐藏规则，不确定的保留。
  - 💡 **收益亮点**: 常见页面可以复用规则，隐藏操作可撤销；它不阻止追踪请求，也不代替用户处理同意选项。

- [**AskJev**](https://github.com/ranjan2829/AskJev) `★ 2` - 给浏览器装一个任务副驾。输入目标后自动点按钮、填表；碰到付款、删除等高风险操作时停下来确认。
  - 🎯 **核心决策**: 从当前网页的交互元素里选择下一步动作，并评估点击的风险与不可逆程度。
  - 💡 **收益亮点**: 把日常网页操作和高风险确认放进同一个扩展，也能通过 MCP 接给其他 Agent。

- [**computer-use-jev**](https://github.com/paulsmith/computer-use-jev) `★ 2` - 用 Go 控制 macOS 应用，让 Jev 从当前可访问性树里选控件和下一步操作。
  - 🎯 **核心决策**: 根据窗口快照选择动作、目标、是否需要输入文字及任务是否完成。
  - 💡 **收益亮点**: 控件候选来自实时界面，模型只选已发现的对象。

- [**aside-jev**](https://github.com/himomohi/aside-jev) `★ 1` - 给 Aside 浏览器 Agent 接一个 Jev 决策助手。Agent 先列好可执行动作，Jev 选一个，再交给 Aside 操作网页。
  - 🎯 **核心决策**: 从应用提供的动作表里选择候选 ID，结合概率阈值决定执行、放弃或交给人确认。
  - 💡 **收益亮点**: 把选动作和执行动作分开，方便检查候选是否合法，并独立复查操作结果。

- [**jev-browser**](https://github.com/tontoko/jev-browser) `★ 1` - 让 Playwright 听懂网页操作指令。支持点按钮、填整张表和按记录提取信息，也能通过持久会话 CLI、MCP 或 SDK 使用。
  - 🎯 **核心决策**: 从真实页面元素与文本候选中选择操作目标、字段对应关系和要提取的值。
  - 💡 **收益亮点**: 动作来自页面候选，完成与否交给页面回读或明确断言，方便接入自动化测试。

- [**ego-jev**](https://github.com/phd-peter/ego-jev) - 把 Jev 接入 Ego Lite 浏览器。读取轻量语义快照，由 Jev 决定点哪个控件、怎么滚轮，需要输文字时才叫大模型。
  - 🎯 **核心决策**: 读取当前页面的动作空间候选，在单次请求里选定目标控件与操作类型；由 ego-lite 本地执行。
  - 💡 **收益亮点**: 用轻量语义快照替代昂贵的视觉多模态，5 步跑完维基百科复杂导航，延迟极低。

- [**grokskill-jev**](https://github.com/AE-AlphaEdge/grokskill-jev) - 把 Jev Ultrafast 接到 Grok Build，复用已打开的 Chrome 标签页，并提供 PowerShell 启动方式。
  - 🎯 **核心决策**: 沿用上游：Jev 选择点击、选择或完成动作，需要写文字时再调用小模型。
  - 💡 **收益亮点**: 为 Grok 和 Windows 使用流程补上 skill、启动器及浏览器复用。

- [**jev-macos-loop**](https://github.com/jcpsimmons/jev-macos-loop) - 在 Mac 本地识别屏幕文字和控件，把文字选项交给 Jev，再点击它选中的元素。
  - 🎯 **核心决策**: Jev 从本地视觉、OCR 与无障碍标签组成的有限元素列表中选择；坐标和输入执行留在 Mac。
  - 💡 **收益亮点**: 让原生界面点击使用可枚举目标，并在执行前复核焦点与元素状态。

---

<a id="context-gc-filter-zh"></a>
## 🧹 上下文垃圾回收与降噪

*大模型上下文窗口压缩、冗余信息垃圾回收与社交媒体长尾降噪过滤。*

- [**fast-jev-compaction**](https://github.com/tamaratran/fast-jev-compaction) `★ 2645` - 给 Claude Code 压缩上下文时，先删掉过时的工具调用和结果。留下来的原文不改写，关键对话仍按原样保留。
  - 🎯 **核心决策**: 分别判断一条工具调用是否还要记住、它的结果是否仍需完整保留；本地规则决定保留、截短或删除。
  - 💡 **收益亮点**: 用原文筛选替代部分摘要，减少路径、报错和命令在改写中走样。

- [**skillbox**](https://github.com/kitze/skillbox) `★ 149` - 自建一个有版本管理的 Agent 技能库，还能选配 Jev 推荐：告诉它当前任务，从你有权限使用的技能里挑更相关的。
  - 🎯 **核心决策**: 对候选技能逐项评估任务相关度，再由应用整理推荐结果。
  - 💡 **收益亮点**: 技能查找不只依赖关键词；未配置或调用失败时仍可使用确定性搜索。

- [**bluenoise**](https://github.com/rokcso/bluenoise) `★ 82` - 推特/X 浏览器的降噪过滤扩展。本地规则过滤垃圾，疑难回复成批交给 Jev 判定噪音概率（>=0.9 则隐藏）。
  - 🎯 **核心决策**: 对未命中本地规则的长尾回复，单次最多批量提交 25 条询问 noul 噪音概率，由代码决定是否隐藏。
  - 💡 **收益亮点**: 不调用任何 X 官方 API，用本地混合架构实现毫秒级社交媒体时间线清洁。

- [**Winnow**](https://github.com/GhalebDweikat/winnow) `★ 13` - 给 Claude Code 的长日志装一道筛子。暂时不相关的内容先藏起来，想看时还能完整找回。
  - 🎯 **核心决策**: 逐块判断 Read、Bash、Grep 输出是否有用；保留相关或不确定内容，隐藏高置信度无关块。
  - 💡 **收益亮点**: 减少进入上下文的冗余输出，并保留可召回的原文。

- [**jevlogs**](https://github.com/reachjalil/jevlogs) `★ 5` - 日志照样归档，先让 Jev 挑出值得继续分析的部分，再决定哪些送给更重的模型。
  - 🎯 **核心决策**: 评估诊断价值、优先级与可行动概率，本地规则注释日志或路由到分析分支。
  - 💡 **收益亮点**: 在保留原始日志链路的同时，把后续分析注意力集中到高价值事件。

- [**jev-skill-gate**](https://github.com/ShivamPansuriya/jev-skill-gate) `★ 2` - 技能装得多，先别把说明全塞给 Claude Code。它按当前项目给技能排相关度，保留有用的说明，其余只留名字或手动入口。
  - 🎯 **核心决策**: 结合项目技术栈、目录和 README，逐个判断已安装技能是否相关，再由规则调整可见程度。
  - 💡 **收益亮点**: 减少进入上下文的技能描述，同时保留手动调用入口；没有 API key 时可用本地评分。

- [**jev-context**](https://github.com/zbush/jev-context) `★ 1` - 给 Codex 的代码搜索加一道筛子。先用 ripgrep 找候选，再只把 Jev 判为相关的片段送回来。
  - 🎯 **核心决策**: 逐段判断代码是否与问题相关，只返回 Yes 片段，并记录筛选前后的文本。
  - 💡 **收益亮点**: 能按指定 tokenizer 核对取回文本的变化；不等同整项任务的成本节省。

---

<a id="security-guardrails-zh"></a>
## 🛡️ 安全防御与输入护栏

*提示词注入防御、内容合规审查、风险评估与关键策略安全护栏拦截。*

- [**agentgateway**](https://github.com/agentgateway/agentgateway) `★ 4916` - Agentgateway 的一个可选护栏示例：让 Jev 检查模型请求和回复里的越狱、有害内容及秘密泄露。
  - 🎯 **核心决策**: Bun webhook 通过网关调用 Jev 评分，本地阈值达到拒绝等级就返回 HTTP 403。
  - 💡 **收益亮点**: 把内容检查挂到已有网关的请求和响应路径。

- [**interlinked-cli**](https://github.com/QuentinCody/interlinked-cli) `★ 177` - 给编程 Agent 的本地规则检查加上可选 Jev 评分。它为检查流程提供补充判断，保留确定性规则作为基础。
  - 🎯 **核心决策**: 对传入状态回答是非、选择或评分问题，供上层策略使用；失败时返回“未测量”。
  - 💡 **收益亮点**: 可以对补充判断设置超时和用量上限；Jev 分数本身不是权限许可。

- [**pi-jev**](https://github.com/y0usaf/pi-jev) `★ 126` - 给 Pi 编程助手加一个风险观察员：执行前看命令会不会越界，执行后看日志是否泄露秘密、错误该怎么处理。
  - 🎯 **核心决策**: 先判断破坏性、外传、越界和影响，再给输出做秘密检测与错误分类；也提供可直接调用的 jev_ask。
  - 💡 **收益亮点**: 把操作风险和故障类型及时提示给 Agent 与用户。

- [**pi-warden**](https://github.com/DevMortimer/pi-warden) `★ 61` - 给 Pi 编程 Agent 加一位规则监督员。写文件时检查是否违反项目约定，执行命令前评估危险操作，把问题直接反馈给 Agent。
  - 🎯 **核心决策**: 通过 Jev 判断改动是否违背规则、是否偏离任务或不可逆，再与本地模式规则合并处理。
  - 💡 **收益亮点**: 让规则提醒进入实际工具流程；多数问题是提示，少数破坏性操作才会被拦下。

- [**pi-jev-auto-mode**](https://github.com/jomatsu/pi-jev-auto-mode) `★ 9` - 给 Pi 的命令执行加一道门禁。明确安全的先通过，其余交给 Jev 判断；默认拿不准就拦住。
  - 🎯 **核心决策**: 本地规则先处理硬拒绝和允许项，Jev 再检查升级上来的 bash、write、edit 是否符合授权及风险条件。
  - 💡 **收益亮点**: 把常见允许规则与语义检查接起来，保留每次判断记录供调阈值。

- [**Safer with Jev**](https://github.com/andrelandgraf/typesafe-on-neon) `★ 3` - 给 HTTP 请求装一道内容门禁。Jev 先检查注入指令或不安全内容，通过了再转发到指定地址。
  - 🎯 **核心决策**: 检查请求内容是否允许通过；本地代码在 pass 时转发，review 或 block 时拦住。
  - 💡 **收益亮点**: 把内容检查放到上游请求前，直接复用现有 HTTP 服务。

- [**jev-guard**](https://github.com/leepokai/jev-guard) `★ 2` - 在编程 Agent 调工具前后加一道检查：操作是否危险、是不是用户要求的、返回内容里有没有诱导 Agent 越界的指令。
  - 🎯 **核心决策**: 结合会话对工具风险、用户意图与提示注入迹象做判断，由本地规则决定放行、提醒或拦截。
  - 💡 **收益亮点**: 把风险检查接到多种 Agent 的工具流程；确认能力因客户端而异，也不能替代沙箱。

- [**jev-judgment**](https://github.com/HyunjunJeon/jev-judgment) `★ 2` - 给编程 Agent 增加一次判断检查：该不该问用户、命令是否越界、失败后还能不能重试。主模型继续负责写代码。
  - 🎯 **核心决策**: 根据对话和命令结果，回答授权是否明确、操作风险多大、失败属于哪一类。
  - 💡 **收益亮点**: 把需要停下确认的节点写清楚；模型给出的概率不能替代用户授权。

- [**jev-tool-permissions**](https://github.com/NicolasMontone/jev-tool-permissions) `★ 1` - 给 Vercel AI SDK 的工具调用加门禁，顺便收起本轮用不到的工具。
  - 🎯 **核心决策**: 确定性规则先检查，再让 Jev 判断自动放行、问人或拦截，以及工具是否相关。
  - 💡 **收益亮点**: 把权限检查和工具筛选接进现有 Agent；请求失败时转人工或保留工具。

---

<a id="mcp-integrations-zh"></a>
## 🧩 MCP 协议与工具扩展

*基于模型上下文协议（MCP）的标准服务器，向智能体开放结构化判定能力。*

- [**vellum-assistant**](https://github.com/vellum-ai/vellum-assistant) `★ 1285` - Vellum Assistant 增加了一个 Jev provider。选用它后，可以把对话状态或明确的问题包交给 Jev，获得结构化判断。
  - 🎯 **核心决策**: 调用原生 System One 接口回答命名问题，并通过适配层把结果送回现有助手接口。
  - 💡 **收益亮点**: 能在同一个助手框架里试用 Jev；这证明兼容接入，不代表助手默认由 Jev 驱动。

- [**ai**](https://github.com/hackclub/ai) `★ 133` - Hack Club 的 AI 代理增加了 Jev 转发接口。获准用户可通过统一入口提交判断题，同时走现有的鉴权、限额和用量记录。
  - 🎯 **核心决策**: 代理把状态与问题转发给 TypeSafe，再将 Jev 的结构化答案返回调用方。
  - 💡 **收益亮点**: 接入已有账户和配额体系；固定版本里的 Jev 通道处于受开关控制的封闭测试。

- [**taskuary**](https://github.com/ldbumble/taskuary) `★ 102` - Taskuary 把消息、任务和 Agent 工作汇到一起，并提供可选 Jev 判断器，对一次运行的状态检查是否满足用户设定的条件。
  - 🎯 **核心决策**: 把同一份运行状态与多条条件提交为是非问题，返回布尔结果及原始概率。
  - 💡 **收益亮点**: 让任务路由使用可查看的判断信号；Jev 不承担助手的聊天或写作。

- [**jev-mcp**](https://github.com/jkudish/jev-mcp) `★ 67` - 给 Agent 配三个小助手：核对引用、筛查注入指令、从候选里挑出相关结果。
  - 🎯 **核心决策**: 通过 verify、screen、find 分别给证据支持度、内容风险和候选相关性做判断。
  - 💡 **收益亮点**: 让每次读取和引用都能加一道可配置的检查。

- [**typesafe-mcp**](https://github.com/itsmostafa/typesafe-mcp) `★ 59` - 给 Claude Code、Claude Desktop 和 Codex 接上一个选择题外脑：选哪个、打几分、是不是，都用同一个 MCP 工具问。
  - 🎯 **核心决策**: 把状态和 typed questions 交给 Jev，返回 Choice、Score、Noul 及概率。
  - 💡 **收益亮点**: 拿到可以直接写进分支判断的答案，省去解析一大段文字。

- [**synkora-ai**](https://github.com/getsynkora/synkora-ai) `★ 34` - Synkora Agent 平台提供 TypeSafe 客户端，可把业务数据交给 Jev 做分类、评分或是非判断，作为工作流中的一项能力。
  - 🎯 **核心决策**: 把调用方的 question、options 和 levels 转成 Jev 的题型与标准，再调用 System One。
  - 💡 **收益亮点**: 应用可以沿用统一的凭据和结果格式；这是兼容接入，不代表整个平台默认使用 Jev。

- [**Jevbridge**](https://github.com/gamesonrblx/Jevbridge) `★ 13` - 给现有 Agent 接一个结构化决策适配器：同样的问题可以交给 Jev，也可以交给普通模型或离线规则。
  - 🎯 **核心决策**: 对状态回答 Choice、Score、Noul，再按置信度把动作建议分成执行、确认、升级或放弃。
  - 💡 **收益亮点**: 统一决策接口，便于试验任务路由、工具门禁和界面动作选择。

- [**jev**](https://github.com/dannote/jev) `★ 10` - 把 Jev 变成 Elixir 程序里的一个异步同伴。发去状态和问题，答案回来后直接用模式匹配决定下一步。
  - 🎯 **核心决策**: 把 Noul、Choice、Score 的回复转成 Elixir map，再由 GenServer 的 handle_answer 与 guard 路由。
  - 💡 **收益亮点**: 沿用 OTP 的消息、监督和错误处理方式接入模型判断。

- [**jev-mcp**](https://github.com/blakestone-x/jev-mcp) `★ 7` - 给 MCP 客户端加上分类、打分、是非判断和候选匹配工具。
  - 🎯 **核心决策**: 将工具参数转成 Jev 的 Choice、Score、Noul 问题，返回结构化答案和概率。
  - 💡 **收益亮点**: Agent 拿到能直接用于分支判断的结果，不用再解析一段回答。

- [**pi-jev**](https://github.com/TheoOliveira/pi-jev) `★ 6` - 帮 Pi 编程 Agent 按任务找工具和技能。还提供结构化判断，并可选择开启模型分流与工具历史筛选。
  - 🎯 **核心决策**: 判断哪些未启用工具、技能和历史记录与当前任务有关，供本地规则决定加载或保留。
  - 💡 **收益亮点**: 让能力按需进入工作流；自动模式需主动开启，Jev 不可用时有本地或原生流程回退。

- [**zod-jev**](https://github.com/jomatsu/zod-jev) `★ 6` - 给 Zod 表单校验补上「意思对不对」这一层：字段格式过关后，再看描述是否匹配、内容是否含个人信息。
  - 🎯 **核心决策**: 把同一次解析的语义规则合并成 Jev Noul 问题，再按概率映射成通过、拒绝、不确定或不可用。
  - 💡 **收益亮点**: 继续使用熟悉的 Zod 错误对象，把语义问题定位到具体字段。

- [**JevRouter**](https://github.com/BillionsBobby/JevRouter) `★ 4` - JevRouter 是一个本地优先的 Agent 能力路由器，将模型、Subagent、Skill、MCP 工具、CLI 和 DSH 插件统一为候选集，由 Jev 做出类型安全的选择，并由 JevRouter 执行权限、风险、可用性和确认策略。
  - 🎯 **核心决策**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **收益亮点**: 让现有 Agent 通过通用接口使用 Jev。

- [**daf-jev**](https://github.com/docxology/daf-jev) `★ 3` - 把 Jev 常用零件装成一个 Python 工具箱：提问、批量跑样本、看校准情况，再把结果接到程序或 MCP。
  - 🎯 **核心决策**: 构造 Noul、Choice、Score 问题，接收概率后由本地函数组合评分、路由及置信度门槛。
  - 💡 **收益亮点**: 同一套接口覆盖调用、失败记录和评估，便于比较问法与阈值。

- [**hermes-jev-approvals**](https://github.com/anpicasso/hermes-jev-approvals) `★ 3` - Hermes 命令审批插件：让 Jev 选通过、拒绝或交给人看，再由代码应用本机策略。
  - 🎯 **核心决策**: 一次判断审批结果、策略覆盖、影响范围、敏感信息与外发行为。
  - 💡 **收益亮点**: 把只需要三个结果的审批环节接到专门的选择接口。

- [**jevex**](https://github.com/jvsteiner/jevex) `★ 3` - 让 Jev 当流程指挥，普通语言模型只填参数和写最后回答，MCP 工具负责真正做事。
  - 🎯 **核心决策**: Jev 选择工具或结束，语言模型填开放内容，Python 验参后再由 Jev批准具体调用。
  - 💡 **收益亮点**: 把选工具、写内容和执行权限拆开，逐步记录两种模型各做了什么。

- [**jevwire**](https://github.com/Brainwires/jevwire) `★ 3` - 通过工具接口提供选择、评分或概率判断。
  - 🎯 **核心决策**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **收益亮点**: 让现有 Agent 通过通用接口使用 Jev。

- [**jev-mcp**](https://github.com/rashedInt32/jev-mcp) `★ 2` - 把 Jev 装成通用 MCP 判断工具。Agent 可以拿它做分类、打分、是非检查，也能一次提交多个问题。
  - 🎯 **核心决策**: 在调用方提供的选项和评分标准内作答，返回答案、概率分布及可供规则使用的判断信号。
  - 💡 **收益亮点**: 现有 MCP 客户端就能接入；带选项校验和弃权结果，方便处理不确定的回答。

- [**jev-workbench**](https://github.com/molis-ai/jev-workbench) `★ 2` - 在本地网页里定义、试跑并发布 Jev 判断函数，后端和 Agent 调用同一个固定版本。
  - 🎯 **核心决策**: 把工单分类、证据判断等问题保存为 Noul、Choice 或 Score 函数，再调用 TypeSafe。
  - 💡 **收益亮点**: 同一套判断不用在每个 Agent 或后端里重写，调用方版本也能固定。

- [**laravel-typesafe-jev**](https://github.com/Butochnikov/laravel-typesafe-jev) `★ 2` - 把 Jev 接入 Laravel，提供配置、依赖注入、Facade 和可记录请求的测试替身。
  - 🎯 **核心决策**: 复用社区 PHP SDK 发出三类判断请求，保留类型、异步 Promise 和异常。
  - 💡 **收益亮点**: Laravel 服务与队列任务可以沿用自己的配置和测试方式。

- [**codex-jev-compaction**](https://github.com/Wang-auspicious/codex-jev-compaction) `★ 1` - 用 Jev 筛选旧上下文，为 Codex 生成保留原文、可追溯的任务交接包。
  - 🎯 **核心决策**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **收益亮点**: 让现有 Agent 通过通用接口使用 Jev。

- [**jev_ampcode**](https://github.com/thesammykins/jev_ampcode) `★ 1` - 给 Amp 一个比较方案的小工具。把备选方案、证据和偏好摆出来，让 Jev 帮忙选。
  - 🎯 **核心决策**: 在明确候选中分配选择概率，并分别检查各方案是否符合要求。
  - 💡 **收益亮点**: 把方案取舍记录成可对照的判断；结果只作建议，不授权执行。

- [**jev-classifier**](https://github.com/felpsdev/jev-classifier) `★ 1` - 通过工具接口提供选择、评分或概率判断。
  - 🎯 **核心决策**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **收益亮点**: 让现有 Agent 通过通用接口使用 Jev。

- [**jev-go**](https://github.com/Stumble/jev-go) `★ 1` - 社区 Go SDK 和交互命令行，既能直连 TypeSafe，也能走 Vercel AI Gateway。
  - 🎯 **核心决策**: 用 Go 类型构建 Choice、Noul、Score 请求，解析并校验返回值。
  - 💡 **收益亮点**: Go 项目可以直接接入 Jev，并处理超时、重试和请求取消。

- [**jev-go**](https://github.com/guillemus/jev-go) `★ 1` - 一个接口很小的社区 Go SDK，用来发 Jev 请求和读取模型列表。
  - 🎯 **核心决策**: 将 Go 的 Choice、Noul、Score 问题转成 System One API 请求。
  - 💡 **收益亮点**: 给 Go 项目提供最基本的 Jev 调用入口。

- [**jev-mcp**](https://github.com/BYK/jev-mcp) `★ 1` - 通过工具接口提供选择、评分或概率判断。
  - 🎯 **核心决策**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **收益亮点**: 让现有 Agent 通过通用接口使用 Jev。

- [**jev-resilience**](https://github.com/Vicente-MD/jev-resilience) `★ 1` - 给 Spring WebFlux 检查“HTTP 200 但正文其实报错”的响应。
  - 🎯 **核心决策**: Jev 判断响应正文是否是隐藏错误或维护通知，超过阈值就抛出业务异常。
  - 💡 **收益亮点**: 让现有错误处理能看到状态码掩盖的失败。

- [**jevgo**](https://github.com/fgn/jevgo) `★ 1` - 一个只依赖 Go 标准库的 Jev 客户端，可选接上 Langfuse 记录调用。
  - 🎯 **核心决策**: 发送结构化状态和三类问题，返回带类型的答案，并检查响应是否符合请求。
  - 💡 **收益亮点**: 把连接、校验、取消和观测接入 Go 服务。

- [**jevscan**](https://github.com/jevbook/jevscan) `★ 1` - 通过工具接口提供选择、评分或概率判断。
  - 🎯 **核心决策**: 通过工具接口提供选择、评分或概率判断。
  - 💡 **收益亮点**: 让现有 Agent 通过通用接口使用 Jev。

---

<a id="codebase-graph-pathfinding-zh"></a>
## 🧭 代码库分析与图谱寻路

*代码库依赖关系导航、AST 符号审查、代码评审分流与知识图谱关系推理。*

- [**celesto**](https://github.com/CelestoAI/celesto) `★ 943` - Celesto 仓库里的 Jev 代码审查示例。先整理 PR 的疑似问题，再让 Jev 检查它是否由本次修改引入、是否有证据、是否值得修。
  - 🎯 **核心决策**: 对每条候选发现分别回答“是、否、证据不足”，由代码合成保留或退回补证据的结果。
  - 💡 **收益亮点**: 把审查意见拆成可逐项追问的判断；这是示例流程，不代表整个 Celesto 默认使用 Jev。

- [**Jev Review**](https://github.com/devagrawal09/jev-review) `★ 241` - 先给代码变更分诊，再沿着风险线索往下查。结果放在本地面板里，方便逐条看证据。
  - 🎯 **核心决策**: 分阶段评估风险、选择文件和证据、判定机制与严重程度，再决定审查路径。
  - 💡 **收益亮点**: 把审查收敛到具体代码片段和风险信号。

- [**jev-review**](https://github.com/NiazMorshed2007/jev-review) `★ 111` - 给写代码的 Agent 一块质量仪表盘：每改一段，就看看可读性、安全性和测试等维度有没有变好。
  - 🎯 **核心决策**: 接收聚焦的代码差异与上下文，用 Score、Choice、Noul 给各质量维度打分，再与上一轮比较。
  - 💡 **收益亮点**: 把每轮修改的质量变化摆出来，帮助主 Agent 决定接下来查哪里。

- [**neo4jev**](https://github.com/jexp/neo4jev) `★ 16` - 在 Neo4j 里一步步找关系：每到一个节点，就问 Jev 下一条边该往哪走。
  - 🎯 **核心决策**: Choice 为相邻关系分配概率，Noul 判断是否到达目标；本地 beam search 保留候选路径。
  - 💡 **收益亮点**: 把自然语言目标接到可查看的图谱路径上。

- [**Blink**](https://github.com/ellipsis-dev/blink) `★ 14` - 描述你要找的代码，让一群探针顺着目录往下走。看起来越相关的路径，分到的探针越多。
  - 🎯 **核心决策**: 给文件和目录名判断相关概率，按概率把 walkers 分配到下一层。
  - 💡 **收益亮点**: 直接沿文件树查找，无需先建立向量索引。

- [**jev-code**](https://github.com/devagrawal09/jev-code) `★ 6` - 给编程 Agent 一个小帮手：找相关文件、检查改动是否偏题、整理测试失败和审查意见。
  - 🎯 **核心决策**: 先在四个固定流程中选一个，再对有限的 diff、代码或日志片段做结构化判断；本地规则形成带位置的报告。
  - 💡 **收益亮点**: 把需要继续检查的线索和未检查范围一起返回，帮助 Agent 安排下一步。

- [**claude-jev**](https://github.com/buchmark/claude-jev) `★ 1` - 给 Claude Code 的审查结论找个复核助手。把疑似 Bug、排错猜想、设计方案和搜索结果交给 Jev 打分，再决定先看什么。
  - 🎯 **核心决策**: 判断缺陷是否存在且可触发、哪个假设更符合症状，以及哪些文件与当前问题有关。
  - 💡 **收益亮点**: 把复查优先级变成可查看的分数；评分仍需配合读代码和实际复现。

- [**jev-flash-review**](https://github.com/TheBous/jev-flash-review) `★ 1` - jev-flash-review 在代码或图谱中缩小需要查看的范围。
  - 🎯 **核心决策**: 评估候选代码或关系与目标的相关程度，选择下一条路径。
  - 💡 **收益亮点**: 把下一步调查集中到更相关的证据上。

- [**foreman-jev**](https://github.com/Shifty-Eye-Games/foreman-jev) - 给 Codex 工人配一个 Jev 监督员。它评估进展，但完成前还必须跑程序员指定的验收命令。
  - 🎯 **核心决策**: 对工作状态和证据做进展与完成判断，本地运行验收命令并检查源码在验证期间是否变化。
  - 💡 **收益亮点**: 把模型判断和实际命令结果一并留档，方便检查任务是否真的收尾。

---

<a id="routing-cost-optimization-zh"></a>
## 🔀 模型路由与成本优化

*根据任务复杂度智能分流、多级模型动态路由与 API 调用成本大幅缩减。*

- [**litellm**](https://github.com/BerriAI/litellm) `★ 59076` - LiteLLM 的复杂度路由可选用 Jev：先判断请求需要哪个模型档，再交给路由策略处理。
  - 🎯 **核心决策**: Jev Choice 在配置的模型档位中选一个，HTTP 客户端返回概率与置信度供复杂度路由使用。
  - 💡 **收益亮点**: 把请求难度判断接进现有模型分层与路由配置。

- [**openchamber**](https://github.com/openchamber/openchamber) `★ 10038` - OpenChamber 可选开启自动模型路由：Jev 看消息属于哪类任务，再使用该类绑定的模型和思考档位。
  - 🎯 **核心决策**: Choice 判断任务类别；另可用 Noul 判断自动批准的权限是否应留给用户确认。
  - 💡 **收益亮点**: 把模型选择和权限提示接进现有会话界面，并记录失败回退原因。

- [**firstmate**](https://github.com/kunchenguid/firstmate) `★ 6502` - Firstmate 可选用 Jev 看任务简报，匹配派工规则，再由本地规则选出具体代理配置。
  - 🎯 **核心决策**: 对任务与候选派工规则做一次 Choice；置信度、审批、配额和候选排序留在 shell 逻辑。
  - 💡 **收益亮点**: 把规则匹配变成一个可记录的步骤，并在不确定时交回决策。

- [**atomic**](https://github.com/bastani-inc/atomic) `★ 805` - Atomic 编程 Agent 的可选决策后端。路由需要在给定选项中做判断时，可以交给 Jev；写代码仍由常规模型完成。
  - 🎯 **核心决策**: 把结构化选择题编译为 Jev Choice 请求，并校验返回选项与概率分布。
  - 💡 **收益亮点**: 把小范围选择从聊天生成里分出来，保留明确的候选和响应校验。

- [**vexjoy-agent**](https://github.com/notque/vexjoy-agent) `★ 420` - 给 VexJoy 的任务分派增加一条 Jev 路线。输入需求后，判断该选哪位专长 Agent、哪项技能和哪条工作流。
  - 🎯 **核心决策**: 先判断是否需要路由，再从实际清单中选择候选；非法选择或调用失败交回原有流程。
  - 💡 **收益亮点**: 提供可对照的路由实验入口；项目文档明确说当前评测不足以把它提升为默认路线。

- [**WrongStack**](https://github.com/WrongStack/WrongStack) `★ 327` - 给 WrongStack 编程 Agent 增加一个可选分派助手。遇到多个相近的专长 Agent 时，用 Jev 判断谁更适合当前任务。
  - 🎯 **核心决策**: 从候选角色中选一个，同时判断有没有任何候选真正适合；不合适时交回原有策略。
  - 💡 **收益亮点**: 分派结果带有可检查的概率，也能明确表示没有合适人选。

- [**Jev Codex Router**](https://github.com/0xNatoshi/jev-codex-router) `★ 26` - 每轮先看任务有多难，再给 Codex 选模型和思考深度。简单活省一点，难活再上强模型。
  - 🎯 **核心决策**: Jev 判断当前轮次的任务层级与推理需求，本地策略决定模型、effort 和速度档。
  - 💡 **收益亮点**: 作者对 237 轮历史会话按标价重算，估计比全用最贵模型省约 60%。

- [**jev-demo**](https://github.com/minghanminghan/jev-demo) - 一个客服分流小样：同一轮先问全套分类问题，再沿答案选路径；用户想转人工时就提前交接。
  - 🎯 **核心决策**: 并行评估分类树各层，同时判断转人工意愿和挫败程度，再由本地规则选用需要的答案。
  - 💡 **收益亮点**: 把多层分流问题合并询问，避免每走一层就重新请求。

- [**jev-router-playground**](https://github.com/hugo-alves/jev-router-playground) - 把几种模型放进候选池，让 Jev 选一个，再把各模型的实际回答摆出来由你评判。
  - 🎯 **核心决策**: 对任务与候选模型描述做适配度判断，本地整理概率并选择候选；可继续调用候选模型作比较。
  - 💡 **收益亮点**: 留下路由选择与人工偏好的对照记录，便于检查选得是否合适。

---

<a id="domain-vertical-tools-zh"></a>
## 📊 垂直行业与专业业务系统

*去中心化金融（DeFi）、量化交易策略、合规法务等垂直行业的专业决策系统。*

- [**Prism**](https://github.com/irfndi/prism-liquidity-agent) `★ 32` - 观察 Solana 流动性池的 Agent。Jev 在旁边给风险打分，先与规则结果对照，不直接决定买卖。
  - 🎯 **核心决策**: 对入池分布、毒性交易流、回归持有与市场压力给出影子判断，日志用于校准。
  - 💡 **收益亮点**: 给既有规则多一组可比较的信号；交易决定仍由确定性规则控制。

- [**Jev-Trades**](https://github.com/zadescoxp/Jev-Trades) `★ 7` - 用实时加密货币行情练习模拟交易。Jev 给出交易判断，面板展示虚拟仓位和技术指标，不连真实下单接口。
  - 🎯 **核心决策**: 读取已完成的分钟 K 线与技术指标，对启用的资产返回结构化交易判断；Python 按置信度和仓位限制更新模拟账户。
  - 💡 **收益亮点**: 把行情、模型信号和模拟持仓放在一起观察，便于检查决策过程。

- [**HA-Jev**](https://github.com/AboveColin/HA-Jev) `★ 6` - 让智能家居回答「衣服是不是洗完却忘了拿」。Jev 的答案变成 Home Assistant 传感器，接进已有自动化。
  - 🎯 **核心决策**: 把选定设备和实体的状态交给 Jev，得到概率、选项或分数，再按配置阈值触发自动化。
  - 💡 **收益亮点**: 自然语言条件能复用现有传感器、通知和场景，不必另搭聊天助手。

- [**jev-trade**](https://github.com/aowang-ai/jev-trade) `★ 3` - 在 Hyperliquid 永续合约上做高频交易（带实时看板 jev-trade.com）。每个 Tick 读取行情，由 Jev 决定开仓平仓。
  - 🎯 **核心决策**: 每个币种用独立状态调用 Jev，秒级评估盘口深度与失衡，决定多空方向与挂单。
  - 💡 **收益亮点**: 实现在去中心化衍生品上的亚秒级自动化交易，并配有完整的 Web 实时监控看板。

- [**jev-for-engineers**](https://github.com/Foadsf/jev-for-engineers) `★ 2` - 机械与电气工程的八组 Jev 小实验：分派设计任务、检查仿真日志、匹配零件，再由 Python 规则决定怎么处理。
  - 🎯 **核心决策**: 对工程文本做分类、候选选择与风险判断；尺寸计算和最终处置仍交给普通代码。
  - 💡 **收益亮点**: 用合成样例看清工程判断如何接入程序；示例阈值需要用自己的数据重测。

- [**got-jev**](https://github.com/phureewat29/got-jev) `★ 1` - 《权力的游戏》文字冒险：大模型写剧情，Jev 判断地点、情绪和危险，再切换配乐与背景。
  - 🎯 **核心决策**: 对新剧情判断 location、beat、mood、danger、inFiction 五项状态。
  - 💡 **收益亮点**: 用固定状态驱动界面和下一回合，不必从生成的故事里硬拆字段。

- [**hermes-jev-north-star**](https://github.com/poponline63/hermes-jev-north-star) `★ 1` - 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 🎯 **核心决策**: 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 💡 **收益亮点**: 增加一组可记录、可对照的判断信号。

- [**jev-broadcast-lab**](https://github.com/4anti/jev-broadcast-lab) `★ 1` - 一个以国际象棋为主的 Jev 实验台，也能试工单分类、文档匹配和审核。
  - 🎯 **核心决策**: 从 chess.js 算出的合法走法中选择一步；Stockfish 分数只给操作者看。
  - 💡 **收益亮点**: 可以同时观察模型选步和本地棋力评估，检查两者的差别。

- [**jev-exploration**](https://github.com/SamuelSacco/jev-exploration) `★ 1` - 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 🎯 **核心决策**: 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 💡 **收益亮点**: 增加一组可记录、可对照的判断信号。

- [**jev-review-action**](https://github.com/fatwang2/jev-review-action) `★ 1` - 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 🎯 **核心决策**: 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 💡 **收益亮点**: 增加一组可记录、可对照的判断信号。

- [**jevsome-projects**](https://github.com/ozers/jevsome-projects) `★ 1` - 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 🎯 **核心决策**: 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 💡 **收益亮点**: 增加一组可记录、可对照的判断信号。

- [**jevsume**](https://github.com/unownone/jevsume) `★ 1` - 给简历做一次结构化体检。既检查措辞、结构和机器可读性，也能对照具体职位描述，看这份简历是否匹配。
  - 🎯 **核心决策**: 对提取出的简历文本与职位要求逐项判断和打分，再由 Worker 汇总成页面里的评审结果。
  - 💡 **收益亮点**: 能保存输入、问题与输出，方便回看每次评审；没有 API key 时运行的是模拟结果。

- [**ha-conversation-jev**](https://github.com/luxus/ha-conversation-jev) - 给 Home Assistant 语音入口做分流：简单灯光命令直接走设备服务，其余交给 Grok 对话助手。
  - 🎯 **核心决策**: Jev 把语句分成 fast_service、grok 或 reject，并结合本地目标匹配与置信度门槛处理。
  - 💡 **收益亮点**: 让支持的开灯、关灯、调亮度命令走明确的设备操作路径。

- [**jev-music-theory-1**](https://github.com/adammichaelwood/jev-music-theory-1) - 让 Jev 做和声习题，也让它选和弦弹一段电钢琴。重点是观察它懂哪些乐理、在哪些关系上出错。
  - 🎯 **核心决策**: 从有限的声部、音高、时值或根音、和弦类型中选择，代码负责发声和规则评分。
  - 💡 **收益亮点**: 把音乐判断拆成可测的小选择题，并留下失败边界。

- [**jev-trade**](https://github.com/Waxmell114514/jev-trade) - 把 BTC、ETH 的行情变成文字状态，让 Jev 给交易判断，再放进含延迟和费用的模拟撮合里观察。
  - 🎯 **核心决策**: 代码先计算市场特征；Jev 回答有限的方向与风险问题，本地策略决定模拟仓位。
  - 💡 **收益亮点**: 把判断、延迟和执行成本放到同一实验记录里比较。

---

<a id="decision-tools-zh"></a>
## 🎯 通用决策与启发式评估

*开箱即用的通用判定组件、启发式打分工具与业务动作多选辅助器。*

- [**jev-benchmarks**](https://github.com/AbdelStark/jev-benchmarks) `★ 7` - 把 Jev 和 GLiNER 放到同一批分类题上，除了答对率，也检查概率靠不靠谱。
  - 🎯 **核心决策**: 对固定文本和标签集合做分类，记录每个标签的概率、耗时和失败。
  - 💡 **收益亮点**: 能看清模型在哪些任务上适合自动处理，在哪些任务上容易过度自信。

- [**jev-benchmark**](https://github.com/wondertwins/jev-benchmark) `★ 2` - 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 🎯 **核心决策**: 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 💡 **收益亮点**: 把选择和打分接进现有程序；暂无可核验的性能对照。

- [**jev-frontend-qa**](https://github.com/Nainish-Rai/jev-frontend-qa) `★ 2` - 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 🎯 **核心决策**: 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 💡 **收益亮点**: 把选择和打分接进现有程序；暂无可核验的性能对照。

- [**omp-jev-compaction**](https://github.com/jerryfane/omp-jev-compaction) `★ 2` - 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 🎯 **核心决策**: 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 💡 **收益亮点**: 把选择和打分接进现有程序；暂无可核验的性能对照。

- [**jev-agent-failure-benchmark**](https://github.com/TokenTrim/jev-agent-failure-benchmark) `★ 1` - 给失败的多 Agent 记录找原因：哪个 Agent、哪一步、哪种错误。
  - 🎯 **核心决策**: 每条轨迹问三道 Choice，分别选择责任 Agent、关键步骤和错误类型。
  - 💡 **收益亮点**: 把故障归因做成可重复评分的实验，保留失败请求与结果。

- [**jev-playground**](https://github.com/Little-Planet-Labs/jev-playground) `★ 1` - 在网页里贴一段状态、添加选择题或评分题，直接看 Jev 的答案和概率分布。
  - 🎯 **核心决策**: 把多道 Noul、Choice、Score 问题放进同一次请求。
  - 💡 **收益亮点**: 不用先写业务代码就能调整问题、候选和评分标准。

- [**jev-predict-skill**](https://github.com/DanielKillenberger/jev-predict-skill) `★ 1` - 一个 Agent skill：读另一个 skill 的规则和现有证据，预测它下一次会选哪个结论。
  - 🎯 **核心决策**: 先判断任务能否变成有限选项，再从目标 skill 原有结论里选一项。
  - 💡 **收益亮点**: 在不执行目标 skill 的情况下，先得到一次可检查的候选判断。

- [**jev-rerank-bench**](https://github.com/anessbelbati/jev-rerank-bench) `★ 1` - 把搜索出来的三十段文字交给 Jev，测试它能否像专用 reranker 一样排出相关内容。
  - 🎯 **核心决策**: 用相关性评分、是非判断或 Choice 对相同候选重排，并记录原始响应。
  - 💡 **收益亮点**: 能按数据集查看质量、延迟、成本和置信区间。

- [**jev-research**](https://github.com/sherajdev/jev-research) `★ 1` - 一份 Jev 与 Herdr 协作指南，附带把任务分给不同 Agent 的小原型。
  - 🎯 **核心决策**: 根据任务和仓库状态选择执行者、判断风险和是否准备好派发。
  - 💡 **收益亮点**: 给多 Agent 调度提供一个能看懂、能改的起点。

- [**jevchat**](https://github.com/kt3k/jevchat) `★ 1` - jevchat 把 Jev 接入软件，让程序拿到可直接使用的判断。
  - 🎯 **核心决策**: 把任务状态交给 Jev，返回供本地程序使用的结构化判断；具体策略请查看来源。
  - 💡 **收益亮点**: 把选择和打分接进现有程序；暂无可核验的性能对照。

---

<a id="classification-taxonomy-zh"></a>
## 🏷️ 文本分类与分类学标注

*多标签层级分类、文档结构化标引与分类学数据集构建工具。*

- [**orchestkit**](https://github.com/yonatangross/orchestkit) `★ 278` - OrchestKit 可选用 Jev 给编程会话分类：这是排错、开发还是其他工作。达到设定阈值时，用分类结果决定会话标识颜色。
  - 🎯 **核心决策**: 对会话开头的信息在固定类别中做单选；不确定或失败时继续使用原有 Haiku 分类。
  - 💡 **收益亮点**: 能并排记录两种分类结果，也能先用影子模式观察；默认不会调用 Jev。

- [**jev-tree**](https://github.com/reachjalil/jev-tree) `★ 2` - 选项太多，一次问不下？先把目录分成树，让 Jev 逐层选分支，最后落到具体商品、事件类型或工作流。
  - 🎯 **核心决策**: 每次只在当前层的候选分支里做单选，再沿选中的分支继续查找。
  - 💡 **收益亮点**: 不用直接截掉大目录尾部的候选，还能返回完整选择路径；失败时明确报告不可用。

---

<a id="evaluation-observability-zh"></a>
## 📈 评测基准与系统可观测性

*决策时延监控、错误遥测追踪与端到端系统性能评测看板。*

- [**latitude-llm**](https://github.com/latitude-dev/latitude-llm) `★ 4654` - 给 Latitude 的对话检查流程加一个旁路观察员。可选调用 Jev，记录它认为哪些检查值得运行，先与原流程比较。
  - 🎯 **核心决策**: 对对话状态回答一个是非问题，再由阈值记为“会运行”或“会跳过”。
  - 💡 **收益亮点**: 能积累模型决策与用量记录；当前是默认关闭的影子试验，不改变现有检查结果。

---

<a id="voice-conversation-zh"></a>
## 🎙️ 实时语音与多轮对话

*多轮对话轮次裁决、插话检测与实时低延迟语音交互系统。*

- [**aiavatarkit**](https://github.com/uezo/aiavatarkit) `★ 674` - 让语音角色少一点抢话。AIAvatarKit 可用 Jev 判断用户是真的说完了，还是停下来想一想、准备继续说。
  - 🎯 **核心决策**: 结合转写文本和停顿时长，估计是否应该继续等待，再由配置决定何时结束这一轮。
  - 💡 **收益亮点**: 为固定静音计时补充语义线索；这是可选的语音轮次判断组件。

---

<a id="creative-tools-zh"></a>
## 🎨 创意生成与多媒体编排

*界面组件动态组合生成、算法音乐编排与智能 MIDI 旋律生成工具。*

- [**jevthoven**](https://github.com/cocktailpeanut/jevthoven) `★ 3` - 用一句话描述想听的音乐，让 Jev 逐小节选音符，生成能编辑、播放和导出的多轨 MIDI。
  - 🎯 **核心决策**: 依次选择曲式、乐器、和弦、节奏和整小节模式，本地程序把选择变成音符。
  - 💡 **收益亮点**: 保留每一步选曲依据，也能手动修改并导出 MIDI。

- [**ui-generator-instinct-jev**](https://github.com/joevidev/ui-generator-instinct-jev) `★ 1` - 描述想要的界面，让 Jev 从现成组件里选类型、字段和样式，再由程序拼出来。
  - 🎯 **核心决策**: 从有限候选中选择组件家族、具体组件、字段类型与外观；分不清时追加比较。
  - 💡 **收益亮点**: 输出已有组件组成的界面和可复制 JSX，不依赖模型随手编写代码。

---

<a id="dev-arch-zh"></a>
## 📖 本地运行与架构原理

需要 **Node.js 22+** 环境。

```bash
# 安装项目依赖
npm ci

# 启动本地可视化雷达站 (Vite + React + Tailwind)
npm run dev

# 执行全量自动化测试（包含 87 项静态审查与数据规范测试）
npm test

# 生产环境编译打包
npm run build

# 根据 projects.json 自动重新编译 4 国语言 README
npm run build:readme
```

### 自动化同步机制
雷达系统完全基于 GitHub Actions 自动化运转：
1. **定时全网扫描**（`.github/workflows/radar.yml` 每 12 小时）：检索 GitHub 开源生态，识别具备真实 Jev 接入代码的新项目。
2. **提报自动核验**（`.github/workflows/auto-ingest-issue.yml`）：沙盒审查投稿源码，拦截无代码凭证的虚假提报，核验通过后原子入库。
3. **全网发布流**（`.github/workflows/deploy-pages.yml`）：自动编译静态资源并推送到 [GitHub Pages 生产雷达站](https://logicrw.github.io/awesome-jev-projects/)。

---

<a id="submit-guide-zh"></a>
## 🤝 如何提交你的项目

热烈欢迎各类接入 Jev 的开源工具、生产系统与实验 Demo！

1. **方式一（网页提交）**：访问[在线雷达站](https://logicrw.github.io/awesome-jev-projects/)，点击右上角「提交项目」。
2. **方式二（Issue 提交）**：[直接发起项目 Issue](https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml)，填写仓库地址、客观用途与 Jev 决策位置。
3. **审查准入原则**：仓库必须包含真实可调用的 Jev 逻辑代码，并附带可验证的运行或复现证据。核验通过后系统将自动合并上线！

---

## 开源协议

MIT © [Logicrw](https://github.com/logicrw).
