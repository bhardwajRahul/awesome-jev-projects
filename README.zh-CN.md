<div align="center">

<a href="https://logicrw.github.io/awesome-jev-projects/">
  <img src="https://raw.githubusercontent.com/logicrw/awesome-jev-projects/main/public/banner-zh.svg" alt="Awesome Jev Projects Banner" width="880" style="max-width: 100%; border-radius: 12px;" />
</a>

<br/><br/>

<p>
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
  <a href="https://logicrw.github.io/awesome-jev-projects/"><img src="https://img.shields.io/badge/Live%20Radar-logicrw.github.io-059669?style=flat-square&logo=safari" alt="Live Radar" /></a>
  <a href="#contents"><img src="https://img.shields.io/badge/Curated%20Projects-259%2B-2563eb?style=flat-square" alt="Projects Count" /></a>
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
  <a href="https://logicrw.github.io/awesome-jev-projects/skill.md"><strong>🤖 Agent 技能包 (SKILL.md)</strong></a> • 
  <a href="https://github.com/logicrw/awesome-jev-projects/issues/new?template=project.yml"><strong>📝 提交开源项目</strong></a>
</p>

<p>严谨收录 **259+** 个由 TypeSafe AI Jev 模型驱动的真实开源应用、工程工具与评测基准。拒绝无源码概念炒作，每项均绑定可查验的提交版本。</p>

</div>

---

> **为什么建立 Awesome Jev？**  
> 与长文本自回归生成模型不同，TypeSafe AI 的 Jev 专攻 100 毫秒以内的结构化决策判断（`Choice` 选项抉择、`Score` 离散评分与 `Noul` 概率推理）。  
> 本雷达站专为开发者呈现真正将 Jev 落地为核心决策单元的开源项目。纯净真实、代码可查、开箱即用。  
>  
> **Agent 友好接入：** AI 编码助手可通过 `npx skills add logicrw/awesome-jev-projects` 或 `npx skills add https://logicrw.github.io/awesome-jev-projects/` 一键加载能力，或直接访问 [`skill.md`](https://logicrw.github.io/awesome-jev-projects/skill.md) / [`llms.txt`](https://logicrw.github.io/awesome-jev-projects/llms.txt)。

---
<a id="contents"></a>
## 目录索引

- [⚡ 高频模拟与实时博弈 (20)](#high-frequency-simulation-zh)
- [🛠️ 开发工具包与决策框架 (32)](#sdk-decision-frameworks-zh)
- [🔌 生态框架与接入适配器 (7)](#sdk-integrations-zh)
- [💻 命令行工具与自动化工作流 (32)](#cli-pipelines-zh)
- [💾 数据库扩展与语义检索 (7)](#data-search-zh)
- [🌐 浏览器与桌面端自动化 (22)](#browser-os-action-zh)
- [🧹 上下文垃圾回收与降噪 (11)](#context-gc-filter-zh)
- [🛡️ 安全防御与输入护栏 (17)](#security-guardrails-zh)
- [🧩 MCP 协议与工具扩展 (33)](#mcp-integrations-zh)
- [🧭 代码库分析与图谱寻路 (13)](#codebase-graph-pathfinding-zh)
- [🔀 模型路由与成本优化 (16)](#routing-cost-optimization-zh)
- [📊 垂直行业与专业业务系统 (17)](#domain-vertical-tools-zh)
- [🎯 通用决策与启发式评估 (14)](#decision-tools-zh)
- [🏷️ 文本分类与分类学标注 (1)](#classification-taxonomy-zh)
- [📈 评测基准与系统可观测性 (7)](#evaluation-observability-zh)
- [🎙️ 实时语音与多轮对话 (4)](#voice-conversation-zh)
- [🎨 创意生成与多媒体编排 (6)](#creative-tools-zh)
- [📖 本地运行与架构原理](#dev-arch-zh)
- [🤝 如何提交你的项目](#submit-guide-zh)

---

<a id="high-frequency-simulation-zh"></a>
## ⚡ 高频模拟与实时博弈

*在游戏对战、机器人与高频仿真模拟闭环中做出毫秒级离散动作抉择。*

- [**jev-trader**](https://github.com/jarrodwatts/jev-trader) `★ 934` - 在 Monad 的 Kuru MON-USDC 订单簿上，每个区块让 Jev 选择买卖方向；可用 dry run 按真实行情模拟挂单与成交，也支持配置钱包发送真实 post-only 限价单。
  - 🎯 **核心决策**: Jev 读取盘口价差、深度与失衡、滚动收益、近期成交和吃单量流向，判断约 100 个区块后价格更可能上涨还是下跌，并返回买卖概率。
  - 💡 **收益亮点**: 把结构化 Jev 判断接入逐区块挂单循环，并用同一事件流展示决策、挂单、成交、持仓和 P&L，便于先在 dry run 中观察行为再决定是否启用真实交易。

- [**typesafe-mario**](https://github.com/fhshaik/typesafe-mario) `★ 263` - 无需截图输入的任天堂红白机超级马力欧实时游戏控制器，直接解析模拟器 RAM 结构化状态，由 Jev 决策手柄按键。
  - 🎯 **核心决策**: 输入马力欧运动速度、起跳轨迹、前方障碍物与敌人物体列表，裁决手柄按键。
  - 💡 **收益亮点**: 将游戏画面感知降维为确定性对象数据，在极短帧周期内输出合法离散操作。

- [**jev-drone**](https://github.com/RomanSlack/jev-drone) `★ 63` - MuJoCo 物理仿真中仅依赖机载摄像头的自主穿越无人机，以 2.5Hz Jev 战术判断做机动决策，底层 50Hz/500Hz 控制层确保安全。
  - 🎯 **核心决策**: 输入由传统视觉处理后的空间距离扇区与障碍物高度，在绕行、爬升、制动中做出战术选择。
  - 💡 **收益亮点**: 分层控制架构：让大模型仅负责宏观战术判断，把硬实时控制与安全急停留给代码。

- [**jevpilot**](https://github.com/standardagents/jevpilot) `★ 58` - 在浏览器里开一辆小车，让 Jev 从提前算好的路线和速度里选下一步。
  - 🎯 **核心决策**: 读取路况、附近车辆和候选轨迹，选择转向与速度；碰撞预测和紧急刹车由代码处理。
  - 💡 **收益亮点**: 把驾驶判断和物理计算拆开，能直接查看每次选择及其概率。

- [**tsai-sc**](https://github.com/phyous/tsai-sc) `★ 15` - 星际争霸 1998 经典战役 AI 控制框架，经历 421 次真实 Jev 决策完成 Strongarm 关卡，提供完整的复现记录与胜局复核。
  - 🎯 **核心决策**: 输入结构化战场态势与资源数据，独立选择经济建造与部队微操指令。
  - 💡 **收益亮点**: 验证复杂实时策略游戏中将全局态势解构为离散语义决策的可行性。

- [**jevscape**](https://github.com/Skyvern-AI/jevscape) `★ 6` - RuneBench 智能体基准测试 Harness：为 Jev 接入有界动作目录、Tick 模式控制器与实时监控面板。
  - 🎯 **核心决策**: 在每个游戏 Tick 周期内，读取游戏状态数据并在有界动作空间中挑选最合理的行进或操作动作。
  - 💡 **收益亮点**: 为复杂游戏环境提供可量化、高可控的决策测试平台，展示 Jev 在有界离散动作空间中的卓越表现。

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

- [**jev-play-ping-pong**](https://github.com/Icohen007/jev-play-ping-pong) - 实时网页乒乓球对战：Jev 接收球台坐标遥测，毫秒级裁决球拍移动指令与击球时机。
  - 🎯 **核心决策**: 根据乒乓球实时坐标、速度矢量与球拍当前位置，做出上移、下移或保持动作选择。
  - 💡 **收益亮点**: 完全剥离了笨重的生成式 Prompt，以低延迟离散动作调用满足实时球类物理反射要求。

- [**mk-jev-fly-brain**](https://github.com/lavallee/mk-jev-fly-brain) - 果蝇脑连接组 vs 语言模型：在 mk.js 格斗游戏中将生物脉冲神经网络与 Jev 决策模型实时对战。
  - 🎯 **核心决策**: 在每帧游戏状态中评估双方血量、距离与对手动作，裁决下一个攻击、跳跃或防御输入。
  - 💡 **收益亮点**: 在高频动作博弈中验证离散决策模型的低延迟响应与战术对抗策略。

---

<a id="sdk-decision-frameworks-zh"></a>
## 🛠️ 开发工具包与决策框架

*封装 Jev 结构化调用与类型安全交互的多语言客户端、绑定库与决策引擎。*

- [**rig-typesafeai**](https://github.com/0xPlaygrounds/rig) `★ 8669` - Rust 顶流开源大模型框架 Rig 官方适配库，为 Rust 生态带来原生的 Jev Choice、Score 与 Noul 类型安全决策原语。
  - 🎯 **核心决策**: 基于 Rust 泛型 Struct 单次声明问题与答案布局，由 Jev 直接解码对应强类型字段。
  - 💡 **收益亮点**: Rust 零抽象开销集成，无需在应用层拼装和校验 JSON 文本。

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

- [**typesafe-sdk-js**](https://github.com/typesafe-ai/typesafe-sdk-js) `★ 138` - TypeSafe 官方 TypeScript/JavaScript 客户端：提供最权威、最新的 Jev 核心接口绑定与类型定义。
  - 🎯 **核心决策**: 全面支持 System One 的 Choice、Score、Noul 与批处理决策请求，提供类型推导与流式支持。
  - 💡 **收益亮点**: 官方维护，始终与最新 API 规范保持一致，是整个 Jev 生态大部分 JS/TS 项目的基石。

- [**effect-agent**](https://github.com/danieljvdm/effect-agent) `★ 116` - 在 Effect Agent 里接入 Jev 决策模型。TypeScript 程序可以用带类型的问题集做判断，也能把它用于可选的模型选择。
  - 🎯 **核心决策**: TypeSafeDecisionModel 通过 TypeSafeClient 调用 Jev，并把概率、单选与评分结果接回 Effect。
  - 💡 **收益亮点**: 复用 Effect 的配置、类型和错误处理；重试与超时由应用自己设置。

- [**jev-visual**](https://github.com/hr98w/jev-visual) `★ 95` - 在 Apple Silicon Mac 本地跑的视觉版 Jev 实验。对单张图片做选择、打分与是非判断，自带 3 个本地视觉游戏 Demo。
  - 🎯 **核心决策**: 复用图像上下文，读取模型 logits 直接为候选答案打分，由本地代码拼装结构化结果。
  - 💡 **收益亮点**: 把 Jev 的多问题单次打分范式拓展到端侧视觉场景，本地秒级跑通分拣与体感游戏。

- [**advocaat**](https://github.com/pithings/advocaat) `★ 66` - 用简短的 TypeScript 调用向 Jev 提问。把同一份数据里的多个判断一次写好，直接拿到概率、选项和分数。
  - 🎯 **核心决策**: 将带类型的问题转成 System One 请求，并把命名答案映射回调用方。
  - 💡 **收益亮点**: 减少手写请求和解析代码，也支持通过 Vercel 网关调用。

- [**ruby_decision_model**](https://github.com/obie/ruby_decision_model) `★ 36` - 面向 Ruby 社区的决策模型客户端：提供针对 TypeSafe Jev 的强类型调用封装与异常重试。
  - 🎯 **核心决策**: 把 Ruby 哈希与枚举问题构造成 Jev System One 规范请求并解码结构化答案。
  - 💡 **收益亮点**: 符合 Ruby 习惯的流畅语法，避免手写原始 HTTP 请求与散乱的 JSON 解析代码。

- [**typesafe-ai**](https://github.com/Twister915/typesafe-ai) `★ 8` - 类型安全的 Rust 客户端：同时提供异步与阻塞后端支持，内置可观察重试与详细遥测。
  - 🎯 **核心决策**: 管理对 Jev System One API 的网络握手、鉴权与强类型请求编解码。
  - 💡 **收益亮点**: 同时满足 Tokio 异步运行时与轻量 CLI 同步脚本需求，具有极高的工程灵活性。

- [**typesafe-sdk-go**](https://github.com/Tangerg/typesafe-sdk-go) `★ 7` - 规范的 Go SDK：输入强类型问题，输出精确校准的离散概率分布，专为分布式系统设计。
  - 🎯 **核心决策**: 为 Go 后端服务提供标准 Jev 问答接口，完成结构化 JSON 编码与网络重试。
  - 💡 **收益亮点**: 线程安全，支持并发调用，为微服务架构提供稳定的低延迟决策通道。

- [**jev-dsl**](https://github.com/inanna-malick/jev-dsl) `★ 6` - 面向智能体的 Haskell 领域特定语言：为 TypeSafe Jev 带来强类型推导与带标签的答案映射。
  - 🎯 **核心决策**: 利用 Haskell 类型系统为判断问题声明严格的返回类型，并在解析时实施完备性保证。
  - 💡 **收益亮点**: 纯函数式安全范式，确保每个进入下游业务逻辑的 Jev 判断结果在编译期即被证明完全合法。

- [**swift-typesafe**](https://github.com/ainame/swift-typesafe) `★ 6` - 非官方 Swift 客户端库：为 Apple 平台开发者提供原生、符合 Swift 语法习惯的 Jev 接口封装。
  - 🎯 **核心决策**: 通过强类型 Swift 结构体定义问题并接收 Jev 的离散选择与评分结果。
  - 💡 **收益亮点**: 无缝集成进 Xcode 工程与 Swift 现代并发工作流，无第三方臃肿依赖。

- [**super-jev**](https://github.com/Kevthetech143/super-jev) `★ 5` - 紧凑可扩展的 Jev 决策-执行 Harness：把多选题结果映射为确定性业务动作或函数调用。
  - 🎯 **核心决策**: 解析业务场景问题，调用 Jev 获取离散 Choice / Noul 判定并触发绑定的回调函数。
  - 💡 **收益亮点**: 免去冗余的 JSON Schema 解析与重试环节，将不可预测的生成式输出收敛为有限状态机跳转。

- [**typesafe-sdk**](https://github.com/joshmn/typesafe-sdk) `★ 4` - 面向 Ruby 社区的轻量客户端：为 typesafe.ai 提供简洁现代的 Ruby 请求包装与结果映射。
  - 🎯 **核心决策**: 以 Ruby Hash 构造题目与选项列表，发起 HTTP 请求并解析返回的离散判断数据。
  - 💡 **收益亮点**: 简单直接，依赖极少，适合快速将 Jev 嵌入已有的 Rails 项目或后台自动化作业中。

- [**typesafe-ai-rs**](https://github.com/gilljon/typesafe-ai-rs) `★ 3` - 独立 Rust SDK：专注于 TypeSafe AI System One API 的严密类型化与零开销异常处理。
  - 🎯 **核心决策**: 将业务分类与评分问题解析为结构化枚举，并安全映射来自服务端的浮点概率数组。
  - 💡 **收益亮点**: 清晰的错误类型枚举设计，方便上层调用方进行精细化故障降级处理。

- [**typesafe-sdk-java**](https://github.com/Premo-Cloud/typesafe-sdk-java) `★ 3` - 社区 Java 客户端与 Spring Boot Starter：在微服务架构中开箱即用注入 Jev 判定能力。
  - 🎯 **核心决策**: 通过 Java 注解与 POJO 强类型封装发起 Jev System One 请求，自动处理反序列化。
  - 💡 **收益亮点**: 完美契合企业级 Spring 生态，支持配置类自动装配、连接池管理与优雅超时回退。

- [**jev-go**](https://github.com/Gaurav-Gosain/jev-go) `★ 2` - 专注于结构化判断的 Go 客户端：输出经过校准的置信度概率而非随机生成的非结构化长文本。
  - 🎯 **核心决策**: 将业务问题与候选选项序列化，提交给 Jev 并返回带有校准概率分布的 Choice 结果。
  - 💡 **收益亮点**: 严格对齐 System One 接口契约，适合对结果确定性与概率度量有严苛要求的生产服务。

- [**jev-java**](https://github.com/Olti1947/jev-java) `★ 2` - 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 🎯 **核心决策**: 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 💡 **收益亮点**: 在现有程序中复用接入代码，减少重复处理接口细节。

- [**typesafe_sdk**](https://github.com/nshkrdotcom/typesafe_sdk) `★ 2` - 符合 Elixir 习惯的类型安全 AI SDK：统一 LLM 与 System One Jev 接口，提供高并发 Actor 模型支持。
  - 🎯 **核心决策**: 在 Elixir 进程中发起非阻塞 Jev 决策请求，以模式匹配直接处理分类与评分结果。
  - 💡 **收益亮点**: 将 Jev 极速判定带入 Erlang/OTP 容错体系，轻松支撑百万级并发长连接的实时决策。

- [**typesafe-go**](https://github.com/2389-research/typesafe-go) `★ 2` - 零第三方依赖的 Go 客户端：仅依靠标准库实现对 TypeSafe System One API 的类型安全调用。
  - 🎯 **核心决策**: 将 Go 原生类型安全地转换为 Jev 请求载荷，并解析 Choice/Score/Noul 结构化响应。
  - 💡 **收益亮点**: 极简实现，零供应链污染风险，体积轻量且可无缝交叉编译至各类嵌入式与容器环境。

- [**typesafe-go**](https://github.com/cole-gillespie/typesafe-go) `★ 2` - 非官方 Go SDK：具备完善的指数退避重试、上下文取消控制与强类型答案解析功能。
  - 🎯 **核心决策**: 处理 HTTP 连接生命周期，将 Jev 概率输出转换为 Go 结构体中的强类型枚举。
  - 💡 **收益亮点**: 针对高并发云服务优化，支持 context.Context 超时熔断与智能重试。

- [**typesafe-sdk-rust**](https://github.com/codeitlikemiley/typesafe-sdk-rust) `★ 2` - TypeSafe AI API 的 Rust SDK：提供轻量常数定义、序列化模型与网络客户端封装。
  - 🎯 **核心决策**: 在 Rust 代码中构造 Jev System One 交互载荷，处理端点路由与身份认证。
  - 💡 **收益亮点**: 利用 Rust 所有权与类型系统消除非法请求格式，编译期捕获字段缺失错误。

- [**jev-starter**](https://github.com/hamakyo/jev-starter) `★ 1` - 给 Jev 判断补上应用里的后半段：把结果送去自动处理、备用模型或人工复核，并记录每条规则的效果。
  - 🎯 **核心决策**: 为分类或检查任务提供选项与概率；代码里的阈值决定后续处理路线。
  - 💡 **收益亮点**: 把业务规则留在代码里，便于评估误判、转人工比例和不同阈值的取舍。

- [**jevclient**](https://github.com/AboveColin/jevclient) `★ 1` - 在 Python 异步程序里调用 Jev 的小客户端。一次发出多个判断问题，直接拿到分类、分数和概率对象。
  - 🎯 **核心决策**: 围绕同一份状态回答是非、单选和评分问题，把结果交还 Python 程序继续处理。
  - 💡 **收益亮点**: 省去自己封装请求和解析回答的工作；可复用 aiohttp 连接，重试策略由调用方掌握。

- [**jevify**](https://github.com/altryne/jevify) `★ 1` - 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 🎯 **核心决策**: 由业务代码定义问题，客户端负责提交 Jev 请求并解析结构化结果。
  - 💡 **收益亮点**: 在现有程序中复用接入代码，减少重复处理接口细节。

- [**qualm**](https://github.com/qddegtya/qualm) `★ 1` - 面向不确定性处理的 System One 决策封装库：在 Jev 输出低置信度时强制开发者提供回退策略。
  - 🎯 **核心决策**: 查询 Jev 的概率分布，当最大概率未达安全阈值时主动抛出或触发 Qualm 回退机制。
  - 💡 **收益亮点**: 从类型系统层面杜绝盲目信任模型预测的隐患，构建防御性智能体决策链路。

- [**typesafe-go**](https://github.com/zhirschtritt/typesafe-go) `★ 1` - 符合 Go 语言工程习惯的 SDK：为 TypeSafe AI API 提供优雅的客户端调用接口与完备的上下文传递。
  - 🎯 **核心决策**: 管理底层 HTTP 通信与 JSON 编解码，把 Jev 的多项选择与评分结果结构化注入业务代码。
  - 💡 **收益亮点**: 接口设计简洁明了，无多余设计负担，便于集成进现有的 Go 后端微服务或命令行工具中。

- [**typesafe-sdk-php**](https://github.com/Butochnikov/typesafe-sdk-php) `★ 1` - PHP 生态客户端：为现代 PHP 8+ 应用提供接入 TypeSafe Jev 的强类型客户端与请求构建器。
  - 🎯 **核心决策**: 封装 HTTP Guzzle/Curl 请求，将 PHP 关联数组与枚举转换为符合规范的 Jev 问题载荷。
  - 💡 **收益亮点**: 让 Laravel、Symfony 等 PHP Web 框架轻松引入 Jev 毫秒级决策能力，无需单独搭建 Python 微服务。

- [**typesafe-rs**](https://github.com/AbdelStark/typesafe-rs) - 面向超低延迟场景的 Rust SDK：封装 TypeSafe System One API，具备极致序列化性能与连接复用。
  - 🎯 **核心决策**: 将强类型 Rust 结构体序列化为标准 Jev 请求，并以极致速度解析返回的概率分布。
  - 💡 **收益亮点**: 零不必要内存分配，为高频量化、系统守护进程与终端工具提供最底层性能保证。

- [**typesafe-sdk-swift**](https://github.com/marandaneto/typesafe-sdk-swift) - Swift 原生移植客户端：将官方 JS/Python SDK 的核心功能移植到 Swift 现代异步并发体系中。
  - 🎯 **核心决策**: 通过 Swift async/await 接口发起 Jev 决策调用，并利用 Codable 完成无缝数据解析。
  - 💡 **收益亮点**: 适配 iOS、macOS 与 Linux 上的 Swift 应用程序，充分享受 Swift 强类型系统的安全保障。

---

<a id="sdk-integrations-zh"></a>
## 🔌 生态框架与接入适配器

*将现有智能体框架、调度器与上层应用系统平滑接入 Jev 的集成适配器。*

- [**langchain**](https://github.com/langchain-ai/langchain) `★ 146595` - 给 Python LangChain 流程加一个可选 Jev 分类节点，返回类别、概率和等级评分。
  - 🎯 **核心决策**: TypeSafeClassifier 将 JSON 状态及类型化问题发送到 /v1/systemone，支持同步与异步 Runnable 调用。
  - 💡 **收益亮点**: 把结构化判断接进已有 LangChain 流程与追踪接口。

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

- [**ruby_llm-typesafe**](https://github.com/kieranklaassen/ruby_llm-typesafe) `★ 12` - RubyLLM 2 适配插件：为 Ruby 生态统一大模型框架提供 TypeSafe 结构化输出提供商驱动。
  - 🎯 **核心决策**: 将 RubyLLM 定义的结构化 Schema 转换为 Jev 问题，接管分类与选择类判断。
  - 💡 **收益亮点**: 无缝融入现有 RubyLLM 应用代码，无需更改上层业务逻辑即可将特定分支切换为 Jev 极速推理。

---

<a id="cli-pipelines-zh"></a>
## 💻 命令行工具与自动化工作流

*在终端脚本、Unix 管道与 CI/CD 自动化流程中引入语义判断的工程工具。*

- [**orchestkit**](https://github.com/yonatangross/orchestkit) `★ 278` - OrchestKit 可选用 Jev 给编程会话分类：这是排错、开发还是其他工作。达到设定阈值时，用分类结果决定会话标识颜色。
  - 🎯 **核心决策**: 对会话开头的信息在固定类别中做单选；不确定或失败时继续使用原有 Haiku 分类。
  - 💡 **收益亮点**: 能并排记录两种分类结果，也能先用影子模式观察；默认不会调用 Jev。

- [**jev-experiments**](https://github.com/dabit3/jev-experiments) `★ 255` - Nader Dabit 打造的 Jev 实验库与 Commit Sentry：包含代码提交守护、意图判定等前沿探索范例。
  - 🎯 **核心决策**: 在 commit-sentry 示例中对提交差异进行风险分级，拦截潜在问题提交并推荐改进建议。
  - 💡 **收益亮点**: 获得 250+ GitHub Stars，以极具启发性的实战代码展示了 Jev 在开发者工具链中的无限可能。

- [**runline**](https://github.com/Michaelliv/runline) `★ 162` - 面向智能体的命令行交互运行环境：集成 Jev 判定插件，把控智能体生成的 Shell 指令安全性。
  - 🎯 **核心决策**: 在命令实际执行前，裁决 Shell 脚本是否涉及敏感目录破坏、权限提权或未知网络外联。
  - 💡 **收益亮点**: 比固定正则更具泛化能力，为智能体全自动终端操作建立坚实的最后一道安全护栏。

- [**captaincore**](https://github.com/CaptainCore/captaincore) `★ 71` - WordPress 站点运维命令行工具：集成 Jev 进行插件兼容性风险与更新决策预判。
  - 🎯 **核心决策**: 评估待更新插件的版本变更说明与已知冲突信息，裁决自动更新或人工复核。
  - 💡 **收益亮点**: 在批量站点自动化维护中加入语义风控，有效预防插件更新导致的白屏故障。

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

- [**jev-axi**](https://github.com/shiftynick/jev-axi) `★ 13` - 面向智能体开发者的实用命令行套件：在终端一键执行 pick、rate、check、rank、triage 与 guard 任务。
  - 🎯 **核心决策**: 根据传入的子命令分别执行多项选择、数值评分、真伪核实、候选排序与输入拦截。
  - 💡 **收益亮点**: 将所有 Jev 核心原语包装为 Unix 友好的单行命令，轻松插入 Bash 脚本与自动化管道。

- [**rift**](https://github.com/exYze/rift) `★ 9` - Rust 打造的高性能终端 TUI：内嵌 Jev 决策组件，用于终端代码辅助与快捷动作裁决。
  - 🎯 **核心决策**: 分析终端上下文与光标所在代码块，裁决最契合的补全类型或重构动作建议。
  - 💡 **收益亮点**: Rust 零开销运行时结合 Jev 亚秒级决策，提供极度丝滑的终端键盘操作流。

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

- [**jev-git**](https://github.com/AkashPriyadarshii/jev-git) `★ 1` - 亚秒级 Git pre-commit 与 pre-push 语义反射门禁：在本地提交阶段拦截潜在逻辑错误与敏感凭证泄露。
  - 🎯 **核心决策**: 扫描 staged diff 的新增与删除行，判定代码改动是否违反预设工程规范或包含硬编码密钥。
  - 💡 **收益亮点**: 纯 Rust 实现，执行耗时通常低于 300ms，为每次 git commit 提供无缝贴合的语义守护。

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

- [**pg_typesafe**](https://github.com/giuliosmall/pg_typesafe) `★ 76` - PostgreSQL 原生 C 扩展：在 SQL 语句中直接调用 Jev 对数据表字段进行语义类别分类。
  - 🎯 **核心决策**: 对 SQL 查询流经的每一行文本数据，实时请求 Jev 并将离散分类结果作为 SQL 列返回。
  - 💡 **收益亮点**: 无需将数据导出到外部 Python 脚本，直接利用数据库内部流水线完成海量数据的语义分类与过滤。

- [**jev-search**](https://github.com/superagents-lab/jev-search) `★ 38` - 用人话搜网页，先挑搜索源和时间范围，再把相关链接排到前面。页面给链接和摘要，不代写答案。
  - 🎯 **核心决策**: Jev 对请求做结构化判断以选择检索参数，再给 Search1API 返回的标题和摘要评分。
  - 💡 **收益亮点**: 把来源选择与结果排序串起来，同时保留可改的过滤条件和失败来源提示。

- [**duckdb-jev**](https://github.com/colliber/duckdb-jev) `★ 8` - DuckDB 扩展：将 Jev 的强类型决策作为原生 SQL 函数暴露，直接把语义判断映射为 SQL 原生数据类型。
  - 🎯 **核心决策**: 在执行 SQL 查询时，对表格行中的文本表达式由 Jev 进行离散分类或打分，直接生成结构化列。
  - 💡 **收益亮点**: 无需复杂的外部数据迁移，在单机列式数据库分析流水线内直接实现超高速语义打标与智能过滤。

- [**jevsql**](https://github.com/EugeneBoondock/jevsql) `★ 3` - 自然语言谓词 SQL 引擎：在标准 SQL 中通过 Jev 实现由语义含义驱动的 WHERE、ORDER BY 与打分过滤。
  - 🎯 **核心决策**: 在 SQL 执行计划中，对候选行记录由 Jev 批量评估自然语言条件匹配度，决定行的筛选与排序权重。
  - 💡 **收益亮点**: 具备自动批处理、结果内容缓存与成本配额保护机制，让传统数据库瞬间具备语义理解能力。

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

- [**cua**](https://github.com/trycua/cua) `★ 23548` - 开源 Computer Use 智能体底层基座，通过 jev-use 驱动将桌面与浏览器原子操作交由 Jev 离散裁决，开源 CUA-S1 专用模型族。
  - 🎯 **核心决策**: 接收有界 UI 状态与屏幕区域表，裁决具体的点击、聚焦与快捷键动作。
  - 💡 **收益亮点**: 规避慢速多模态规划循环，将操作系统界面控制拆为极速离散动作。

- [**jev-ultrafast**](https://github.com/browser-use/jev-ultrafast) `★ 4673` - 给浏览器一个目标，Jev 负责选按钮和动作，文字交给小模型写。作者的 Google Flights 示例约 7.1 秒完成。
  - 🎯 **核心决策**: 读当前 DOM，在一次请求里选择操作和目标元素；需要输入时才调用文本模型。
  - 💡 **收益亮点**: 把界面选择与文字生成分开，减少重复读页面。

- [**jev-desktop**](https://github.com/lahfir/agent-desktop) `★ 1266` - 把电脑里的按钮和菜单交给 Jev 来选。它读原生无障碍结构，一步步完成桌面操作。
  - 🎯 **核心决策**: Jev 同时选择动作与目标，并评估置信度和操作风险；本地策略决定是否执行或停止。
  - 💡 **收益亮点**: 让主 Agent 不必把整棵界面树塞进上下文。

- [**Agent**](https://github.com/AgentiLoop/Agent) `★ 616` - macOS 原生自主智能体：内置 TypeSafeKit 模块，将系统自动化动作与脚本调用交给 Jev 决策。
  - 🎯 **核心决策**: 从当前应用状态与用户任务出发，裁决下一步调用的 macOS 原生自动化接口与参数。
  - 💡 **收益亮点**: Swift 原生实现与 Jev 结构化判断深度结合，极大减少高阶操作的规划等待时间。

- [**omg.dev**](https://github.com/BennyKok/omg.dev) `★ 531` - omg.dev 的移动端测试脚本可用 Jev 看无障碍树：选下一控件，判断步骤是否完成或已经走不通。
  - 🎯 **核心决策**: 测试辅助 judge 将界面树与 Noul、Choice 问题发往 Jev，精确字符串断言仍由代码控制。
  - 💡 **收益亮点**: 让端到端测试在界面略有变化时多一个语义判断信号。

- [**typesafe-computer-use**](https://github.com/awlevin/typesafe-computer-use) `★ 237` - 极低成本的 macOS 桌面控制工具，用确定性 OCR 提取文字坐标，由 Jev 裁决下一步动作，单步成本约两美分的两百分之一。
  - 🎯 **核心决策**: 比对当前屏幕元素列表与目标意图，从候选中选取下一个原子点击或按键。
  - 💡 **收益亮点**: 不向大模型传输高分辨率截图，避免截图多模态高昂 token 计费与等待。

- [**jev-browser-use**](https://github.com/wy-coliney/jev-browser-use) `★ 132` - EZCollegeApp 出品的极速浏览器自动化：Jev 负责点击与交互裁决，Codex 负责宏观思考与结果复核，提速 5-10 倍。
  - 🎯 **核心决策**: 在每一步页面交互中，由 Jev 从轻量 DOM 候选中裁决具体点击的目标元素与滚动动作。
  - 💡 **收益亮点**: 解耦高频局部操作与低频全局规划，不仅速度提升 5-10 倍，更大幅节省大模型多模态调用费用。

- [**mobile-jev**](https://github.com/droidrun/mobile-jev) `★ 93` - 给 Android 手机一个目标，Jev 选应用和控件，Mobilerun 负责打开、点击、输入；网页面板能看过程。
  - 🎯 **核心决策**: 一次请求选择操作及兼容目标，本地重新核对控件后通过 Mobilerun 执行。
  - 💡 **收益亮点**: 把移动端动作、观察和执行记录接成可检查的任务循环。

- [**jev-use**](https://github.com/vlad-terin/jev-use) `★ 76` - 让 Codex 先定目标，再让 Jev 连续选控件。浏览器和桌面动作仍由 Codex 的现有工具执行。
  - 🎯 **核心决策**: 根据观察选择目标控件；本地循环执行、检查结果，遇到例外再交回主 Agent。
  - 💡 **收益亮点**: 把多个常规操作收进一次连续流程，减少主模型逐步接力。

- [**jev-browser**](https://github.com/jkudish/jev-browser) `★ 70` - 给它一个网址和任务，它会选按钮、填字段、翻页面，最后交回页面内容和每一步的操作记录。
  - 🎯 **核心决策**: 每步用 Choice 选 DOM 动作，用两个 Noul 判断是否完成或卡住；输入文字交给另一小模型。
  - 💡 **收益亮点**: 通过 MCP、CLI 或库复用同一浏览器循环，并查看动作、恢复过程和错误记录。

- [**plasmallm**](https://github.com/joshuaeroman/plasmallm) `★ 28` - KDE Plasma 桌面小部件适配器：引入 Jev 决策适配层，用于本地桌面交互动作与指令分流。
  - 🎯 **核心决策**: 评估用户桌面操作意图并分流为本地快捷动作、对话生成或系统工具调用。
  - 💡 **收益亮点**: 毫秒级判定用户意图，无需唤醒昂贵的云端多模态模型即可完成高频桌面指令决策。

- [**Jev-cu**](https://github.com/Sac-Y/Jev-cu) `★ 14` - Jev-cu：面向 Codex 桌面端 Computer Use 的决策助手，将「下一步点哪里」交给 Jev System One 从候选文字中离散选择，只传文本不传截图。
  - 🎯 **核心决策**: 从可访问性树与界面文字候选中，由 Jev 裁决下一个操作目标元素、动作类型、完成度与风险分级。
  - 💡 **收益亮点**: 只传文字不传截图，大幅降低多模态 token 消耗与延迟，结合本地白名单策略拦截敏感系统操作。

- [**jev-browser**](https://github.com/Ying-Kai-Liao/jev-browser) `★ 12` - 混合架构浏览器自动化：大模型负责高层规划，Jev 负责底层每一步点击与交互的毫秒级决策。
  - 🎯 **核心决策**: 从页面可访问性树和候选动作中，由 Jev 选定具体执行的控件选择器与事件类型。
  - 💡 **收益亮点**: 提供 Library、CLI 与 MCP Server 三种使用方式，全方位降低网页自动化探索中的等待与成本。

- [**jev-ego**](https://github.com/romaluev/jev-ego) `★ 4` - 面向 ego-lite 的极速浏览器智能体：每一步仅需单次 TypeSafe 请求，由 Jev 直接挑出下一步动作。
  - 🎯 **核心决策**: 评估当前页面关键交互元素列表，裁决是点击、输入文字、滚动还是提交表单。
  - 💡 **收益亮点**: 单步无需多次大模型推理回合，极大压缩了浏览器智能体在表单填写与多步导航中的耗时。

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

- [**openclaw-typesafe-ai**](https://github.com/Olli0103/openclaw-typesafe-ai) - OpenClaw 网页抓取框架适配插件：引入 Jev 结构化决策，用于抓取目标定位与验证码风险判决。
  - 🎯 **核心决策**: 评估页面结构并裁决列表翻页按钮、动态加载触发点或是否存在反爬阻断元素。
  - 💡 **收益亮点**: 以确定性类型字段驱动爬虫引擎，在复杂多变的现代前端页面中大幅提高采集鲁棒性。

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

- [**jev-pruner**](https://github.com/tamaratran/jev-pruner) `★ 17` - Claude Code 插件：在超长 Bash 与终端输出送入模型上下文前，由 Jev 判断哪些行是关键错误与堆栈，过滤冗余输出。
  - 🎯 **核心决策**: 评估终端输出每一块的错误相关性与上下文价值，裁决保留或静默修剪。
  - 💡 **收益亮点**: 大幅缩减后续推理 token 消耗与延迟，避免上下文窗口被冗余日志污染。

- [**Winnow**](https://github.com/GhalebDweikat/winnow) `★ 13` - 给 Claude Code 的长日志装一道筛子。暂时不相关的内容先藏起来，想看时还能完整找回。
  - 🎯 **核心决策**: 逐块判断 Read、Bash、Grep 输出是否有用；保留相关或不确定内容，隐藏高置信度无关块。
  - 💡 **收益亮点**: 减少进入上下文的冗余输出，并保留可召回的原文。

- [**jevlogs**](https://github.com/reachjalil/jevlogs) `★ 5` - 日志照样归档，先让 Jev 挑出值得继续分析的部分，再决定哪些送给更重的模型。
  - 🎯 **核心决策**: 评估诊断价值、优先级与可行动概率，本地规则注释日志或路由到分析分支。
  - 💡 **收益亮点**: 在保留原始日志链路的同时，把后续分析注意力集中到高价值事件。

- [**jev-skill-gate**](https://github.com/ShivamPansuriya/jev-skill-gate) `★ 2` - 技能装得多，先别把说明全塞给 Claude Code。它按当前项目给技能排相关度，保留有用的说明，其余只留名字或手动入口。
  - 🎯 **核心决策**: 结合项目技术栈、目录和 README，逐个判断已安装技能是否相关，再由规则调整可见程度。
  - 💡 **收益亮点**: 减少进入上下文的技能描述，同时保留手动调用入口；没有 API key 时可用本地评分。

- [**pi-jev-context**](https://github.com/kevinpita/pi-jev-context) `★ 2` - Pi 智能体可逆上下文修剪器：基于 Jev 语义判定，在不删除底层会话记录的前提下智能精简投喂给模型的上下文。
  - 🎯 **核心决策**: 逐条检查终端命令结果与历史回答，裁决该条目是否保留、折叠或在必要时由指针召回。
  - 💡 **收益亮点**: 完全可逆的设计，既保证了当前 Prompt 的精炼度，又确保在需要追溯历史时原始信息完好无损。

- [**jev-context**](https://github.com/zbush/jev-context) `★ 1` - 给 Codex 的代码搜索加一道筛子。先用 ripgrep 找候选，再只把 Jev 判为相关的片段送回来。
  - 🎯 **核心决策**: 逐段判断代码是否与问题相关，只返回 Yes 片段，并记录筛选前后的文本。
  - 💡 **收益亮点**: 能按指定 tokenizer 核对取回文本的变化；不等同整项任务的成本节省。

- [**your-signal**](https://github.com/MithrilMan/your-signal) `★ 1` - 开源 BYOK Chrome 扩展：通过 Jev 对 X/Twitter 关注流进行个性化降噪，过滤水帖与广告推文。
  - 🎯 **核心决策**: 分析推文文本与上下文，裁决该推文是属于有价值的行业技术讨论还是无营养的营销造势。
  - 💡 **收益亮点**: 用户自带 API Key，前端纯本地静默隐藏不相关推文，并支持一键恢复原貌。

- [**pi-jev-compact**](https://github.com/ilkerulusoy/pi-jev-compact) - Pi 编程智能体上下文紧缩插件：利用 Jev 识别冗长会话历史中的冗余信息并执行安全紧缩。
  - 🎯 **核心决策**: 评估大段历史日志与对话记录对于解决当前编程任务的必要性，标记可压缩的上下文段落。
  - 💡 **收益亮点**: 在超长编程会话中动态释放宝贵上下文窗口，延缓大模型推理疲劳与上下文饱和。

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

- [**unclutter**](https://github.com/kitze/unclutter) `★ 66` - 给网页做视觉减法的浏览器扩展。让 Jev 识别广告、促销和订阅弹窗，再把可复用的隐藏规则存在本地。
  - 🎯 **核心决策**: 对页面元素候选做分类，只让通过阈值的非必要元素进入隐藏规则，不确定的保留。
  - 💡 **收益亮点**: 常见页面可以复用规则，隐藏操作可撤销；它不阻止追踪请求，也不代替用户处理同意选项。

- [**pi-warden**](https://github.com/DevMortimer/pi-warden) `★ 61` - 给 Pi 编程 Agent 加一位规则监督员。写文件时检查是否违反项目约定，执行命令前评估危险操作，把问题直接反馈给 Agent。
  - 🎯 **核心决策**: 通过 Jev 判断改动是否违背规则、是否偏离任务或不可逆，再与本地模式规则合并处理。
  - 💡 **收益亮点**: 让规则提醒进入实际工具流程；多数问题是提示，少数破坏性操作才会被拦下。

- [**typesafe-adblock**](https://github.com/realZachi/typesafe-adblock) `★ 50` - 实验性 Chrome 扩展：将疑似广告的 DOM 元素文本提取并交由 Jev 判断是否为推广广告，在前端直接移除该节点。
  - 🎯 **核心决策**: 基于 DOM 节点的文本与属性判定是否属于原生广告或赞助内容。
  - 💡 **收益亮点**: 无需维护庞大的静态规则列表，依靠语义理解识别具有正常外观的隐蔽推广卡片。

- [**vibecheck**](https://github.com/RafalWilinski/vibecheck) `★ 30` - 推文安全自检 Chrome 扩展：在点击 Post 发推前，由 Jev 对推文内容进行风格、语气与冒犯性风险自检。
  - 🎯 **核心决策**: 检查待发布的推文草稿，裁决是否存在无意义争吵倾向、刻薄语气或不慎泄露的敏感言论。
  - 💡 **收益亮点**: 为社交媒体输出加上一道毫秒级的前置反思保护，帮助技术人员与创作者维护良好公众声誉。

- [**Jev-Moderation-Bot**](https://github.com/brainstormity/Jev-Moderation-Bot) `★ 28` - 社区聊天审核机器人：利用 Jev 快速对用户聊天信息进行多标签违规筛查与自动静音裁决。
  - 🎯 **核心决策**: 评估消息是否存在骚扰、垃圾推广、仇恨言论或诱导链接，输出违规类型与置信度。
  - 💡 **收益亮点**: 无需调用昂贵的长文本大模型，毫秒级完成海量群聊消息的内容合规拦截。

- [**snifftest**](https://github.com/DanRWilloughby/snifftest) `★ 14` - AI 文本痕迹检测与散文 Linter：通过确定性规则与 Jev 混合研判段落是否存在典型的 AI 套话腔调。
  - 🎯 **核心决策**: 对长文本段落判断是否存在陈词滥调、假大空过渡词、机械对称句式等 AI 写作特征。
  - 💡 **收益亮点**: 零笨重依赖，将机械统计指标与深度语义判断相结合，提供可精细定位到句的审查建议。

- [**pi-jev-auto-mode**](https://github.com/jomatsu/pi-jev-auto-mode) `★ 9` - 给 Pi 的命令执行加一道门禁。明确安全的先通过，其余交给 Jev 判断；默认拿不准就拦住。
  - 🎯 **核心决策**: 本地规则先处理硬拒绝和允许项，Jev 再检查升级上来的 bash、write、edit 是否符合授权及风险条件。
  - 💡 **收益亮点**: 把常见允许规则与语义检查接起来，保留每次判断记录供调阈值。

- [**Safer with Jev**](https://github.com/andrelandgraf/typesafe-on-neon) `★ 3` - 给 HTTP 请求装一道内容门禁。Jev 先检查注入指令或不安全内容，通过了再转发到指定地址。
  - 🎯 **核心决策**: 检查请求内容是否允许通过；本地代码在 pass 时转发，review 或 block 时拦住。
  - 💡 **收益亮点**: 把内容检查放到上游请求前，直接复用现有 HTTP 服务。

- [**jev-block-android-ad**](https://github.com/ufec/jev-block-android-ad) `★ 2` - JevNoiseGate：面向 Android 通知与短信的噪声过滤器，通过 Jev 离散判定消息是否为垃圾广告，对验证码等未知路径严格放行。
  - 🎯 **核心决策**: 将捕获的通知文本或短信内容交给 Jev，裁决是否归类为广告干扰信息。
  - 💡 **收益亮点**: 告别脆弱的关键词规则库，在保护验证码安全的前提下实现高精度广告拦截。

- [**jev-cvss**](https://github.com/Red5d/jev-cvss) `★ 2` - 安全漏洞研判工具：输入 CVE 漏洞描述，由 Jev 快速预测 CVSS v3.1 核心度量指标与严重度评分。
  - 🎯 **核心决策**: 从非结构化漏洞描述中抽取攻击向量、复杂性、特权要求与影响程度的离散枚举值。
  - 💡 **收益亮点**: 毫秒级输出确定性漏洞分级向量，比传统大模型推理更快且格式完全合规。

- [**jev-guard**](https://github.com/leepokai/jev-guard) `★ 2` - 在编程 Agent 调工具前后加一道检查：操作是否危险、是不是用户要求的、返回内容里有没有诱导 Agent 越界的指令。
  - 🎯 **核心决策**: 结合会话对工具风险、用户意图与提示注入迹象做判断，由本地规则决定放行、提醒或拦截。
  - 💡 **收益亮点**: 把风险检查接到多种 Agent 的工具流程；确认能力因客户端而异，也不能替代沙箱。

- [**jev-judgment**](https://github.com/HyunjunJeon/jev-judgment) `★ 2` - 给编程 Agent 增加一次判断检查：该不该问用户、命令是否越界、失败后还能不能重试。主模型继续负责写代码。
  - 🎯 **核心决策**: 根据对话和命令结果，回答授权是否明确、操作风险多大、失败属于哪一类。
  - 💡 **收益亮点**: 把需要停下确认的节点写清楚；模型给出的概率不能替代用户授权。

- [**oc-auto-perms**](https://github.com/OpeOginni/oc-plugins) `★ 2` - OpenCode V2 意图感知权限安全插件，用自然语言撰写安全策略，由 Jev 审查 Agent 的 Shell 与网络工具调用意图并拦截违规行为。
  - 🎯 **核心决策**: 结合用户历史对话与工具具体入参，评估操作意图是否符合安全策略规则。
  - 💡 **收益亮点**: 超越静态正则匹配：无论 Agent 用 curl 还是内置抓取，只要语义意图违规即刻被识别。

- [**jev-tool-permissions**](https://github.com/NicolasMontone/jev-tool-permissions) `★ 1` - 给 Vercel AI SDK 的工具调用加门禁，顺便收起本轮用不到的工具。
  - 🎯 **核心决策**: 确定性规则先检查，再让 Jev 判断自动放行、问人或拦截，以及工具是否相关。
  - 💡 **收益亮点**: 把权限检查和工具筛选接进现有 Agent；请求失败时转人工或保留工具。

---

<a id="mcp-integrations-zh"></a>
## 🧩 MCP 协议与工具扩展

*基于模型上下文协议（MCP）的标准服务器，向智能体开放结构化判定能力。*

- [**composio**](https://github.com/ComposioHQ/composio) `★ 30228` - 给 Composio 工具箱接一个可选 Jev 决策层：从工具列表挑工具，填能枚举的参数，其余交给调用方补。
  - 🎯 **核心决策**: 把工具与封闭参数编译成类型化问题，返回完整调用、部分调用或弃权；随后显式 execute。
  - 💡 **收益亮点**: 复用已有 Composio 工具，同时把缺少的参数和置信度明确暴露出来。

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

- [**pi-typesafe**](https://github.com/DevMortimer/pi-typesafe) `★ 14` - Pi 编程智能体扩展套件：提供批量 Jev 评估工具、终端演练场与给插件作者使用的类型安全 API。
  - 🎯 **核心决策**: 在 Pi 编码会话中批量评估候选文件相关性或代码修复方案，返回结构化采纳建议。
  - 💡 **收益亮点**: 为 Pi 扩展开发者提供一站式决策接口与终端交互测试环境，加速智能体功能迭代。

- [**Jevbridge**](https://github.com/gamesonrblx/Jevbridge) `★ 13` - 给现有 Agent 接一个结构化决策适配器：同样的问题可以交给 Jev，也可以交给普通模型或离线规则。
  - 🎯 **核心决策**: 对状态回答 Choice、Score、Noul，再按置信度把动作建议分成执行、确认、升级或放弃。
  - 💡 **收益亮点**: 统一决策接口，便于试验任务路由、工具门禁和界面动作选择。

- [**cline-plugin-jev-browser**](https://github.com/abeatrix/cline-plugin-jev-browser) `★ 12` - Cline 官方成员开发的桌面浏览器扩展插件，经由 Vercel AI Gateway 调度 Jev 执行 DOM 节点选择与毫秒级点击。
  - 🎯 **核心决策**: 输入轻量 DOM 树与上下文任务，返回具体的页面交互行为与目标选择器。
  - 💡 **收益亮点**: 把浏览器交互动作收敛为类型安全的确定性枚举，降低 Agent 迷航概率。

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

- [**tenbin**](https://github.com/simota/tenbin) `★ 2` - TypeSafe Jev MCP 服务器与 Agent Skill：将复杂判定拆解为 Choice/Score/Noul 问题并在有标数据上校准。
  - 🎯 **核心决策**: 为接入的智能体提供规范的 Jev 结构化问答工具，并在代码层提供校准过的阈值检查。
  - 💡 **收益亮点**: 规范化提示词设计与置信度校准，帮助开发者写出高确定性、可测试的智能体判断逻辑。

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

- [**n8n-nodes-typesafe-jev**](https://github.com/n3ndor/n8n-nodes-typesafe-jev) - n8n 自动化工作流社区节点：为低代码工作流平台引入 TypeSafe Jev 结构化 AI 决策节点。
  - 🎯 **核心决策**: 在 n8n 工作流分支节点中，由 Jev 裁决输入事件的业务分类、评分或布尔真伪，触发下游不同动作。
  - 💡 **收益亮点**: 无需编写代码即可在企业现有的自动化流程中添加低延迟、确定性的语义分支判断。

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

- [**commit-miner**](https://github.com/devanshbatham/commit-miner) `★ 22` - Git 提交语义分类器：利用 Jev 自动化分析 Commit Diff 与日志，精准标注 Bug 修复、安全补丁与 CWE 编号。
  - 🎯 **核心决策**: 扫描代码改动的核心 hunk 与 commit message，裁决该提交属于常规重构、功能新增还是特定安全漏洞修复。
  - 💡 **收益亮点**: Rust 高性能实现，批量挖掘数万条历史提交仅需极低耗时，为安全审计与代码库分析提供自动化支持。

- [**neo4jev**](https://github.com/jexp/neo4jev) `★ 16` - 在 Neo4j 里一步步找关系：每到一个节点，就问 Jev 下一条边该往哪走。
  - 🎯 **核心决策**: Choice 为相邻关系分配概率，Noul 判断是否到达目标；本地 beam search 保留候选路径。
  - 💡 **收益亮点**: 把自然语言目标接到可查看的图谱路径上。

- [**Blink**](https://github.com/ellipsis-dev/blink) `★ 14` - 描述你要找的代码，让一群探针顺着目录往下走。看起来越相关的路径，分到的探针越多。
  - 🎯 **核心决策**: 给文件和目录名判断相关概率，按概率把 walkers 分配到下一层。
  - 💡 **收益亮点**: 直接沿文件树查找，无需先建立向量索引。

- [**jev-code**](https://github.com/devagrawal09/jev-code) `★ 6` - 给编程 Agent 一个小帮手：找相关文件、检查改动是否偏题、整理测试失败和审查意见。
  - 🎯 **核心决策**: 先在四个固定流程中选一个，再对有限的 diff、代码或日志片段做结构化判断；本地规则形成带位置的报告。
  - 💡 **收益亮点**: 把需要继续检查的线索和未检查范围一起返回，帮助 Agent 安排下一步。

- [**leanest**](https://github.com/baronunread/leanest) `★ 3` - 本地优先的智能测试用例选择器：通过 Jev 研判代码改动，精准挑选受影响需要重新执行的测试。
  - 🎯 **核心决策**: 分析 Git diff 的修改逻辑与函数签名，从海量单测中筛选出逻辑强相关的测试用例子集。
  - 💡 **收益亮点**: 避免在单次小改动后全量跑漫长的测试套件，在大型工程中将本地反馈循环从数分钟缩减至数秒。

- [**claude-jev**](https://github.com/buchmark/claude-jev) `★ 1` - 给 Claude Code 的审查结论找个复核助手。把疑似 Bug、排错猜想、设计方案和搜索结果交给 Jev 打分，再决定先看什么。
  - 🎯 **核心决策**: 判断缺陷是否存在且可触发、哪个假设更符合症状，以及哪些文件与当前问题有关。
  - 💡 **收益亮点**: 把复查优先级变成可查看的分数；评分仍需配合读代码和实际复现。

- [**jev-flash-review**](https://github.com/TheBous/jev-flash-review) `★ 1` - jev-flash-review 在代码或图谱中缩小需要查看的范围。
  - 🎯 **核心决策**: 评估候选代码或关系与目标的相关程度，选择下一条路径。
  - 💡 **收益亮点**: 把下一步调查集中到更相关的证据上。

- [**jev-scout**](https://github.com/AkashPriyadarshii/jev-scout) `★ 1` - 零幻觉开源项目与 Rust Crate 探查器：结合 DuckDuckGo 与 Jev 快速为需求挑选最适配的代码库。
  - 🎯 **核心决策**: 评估搜索结果中候选仓库的 README、维护活跃度与技术栈匹配度，挑选出最佳候选。
  - 💡 **收益亮点**: 完全杜绝大模型编造不存在的假开源包名，秒级返回真实存在且源码对齐的优质项目。

- [**PiJ**](https://github.com/tonyzdev/PiJ) `★ 1` - 一个基于 Pi 的终端编码 Agent。主模型负责推理、改代码和调用工具；Jev 提供技能建议、源码候选排序和工具失败分流，同时保留原始路径、行号、源码与错误输出。
  - 🎯 **核心决策**: 技能建议先用 noul 判断是否需要，再用 choice 选候选并以 noul 复核；pij_search 和可选的 source briefing 用 noul 给真实源码候选排序；工具失败则用 choice 分到代码、环境、依赖、网络、权限或未知，再附固定检查清单。结果均为建议。
  - 💡 **收益亮点**: 把技能筛选、源码候选排序和失败分流交给 Jev 做小判断，同时保留原始证据和本地检查路径；服务不可用时仍可回到普通 coding agent 与字面搜索。

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

- [**oh-my-pi**](https://github.com/can1357/oh-my-pi) `★ 31786` - Oh My Pi 可选用 Jev 处理小判断：该用多深思考、是否意外停下，以及 Git 暂存相关分类。
  - 🎯 **核心决策**: 统一 judgment 接口在提供 TypeSafe 凭据后调用 Jev；结构化问题返回概率供本地策略使用。
  - 💡 **收益亮点**: 把小型分类任务集中到专门接口，保留替换后端的能力。

- [**jev-model-router**](https://github.com/davila7/claude-code-templates) `★ 30779` - Claude Code 官方模组库中的动态模型路由器，单次请求评估任务复杂度、推理等级与风险面，毫秒级调配子 Agent 档位。
  - 🎯 **核心决策**: 并行评估任务难易分级、推理深度与生产风险布尔值，向 Claude Code 注入最优执行配置。
  - 💡 **收益亮点**: 避免简单任务滥用高规格模型，同时确保高危变更拥有充分置信度防线。

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

- [**skillranker**](https://github.com/Dicklesworthstone/skillranker) `★ 50` - 智能体技能实时排序器：基于当前会话上下文由 Jev 为下一步动作推荐最匹配的 Agent Skill，支持 Claude Code。
  - 🎯 **核心决策**: 在每步操作前对候选 Skill 库进行打分与重排，裁决最契合当前调试进度的技能或选择弃权。
  - 💡 **收益亮点**: 提供 Claude Code 钩子脚本与结构化 JSON 输出，避免模型在过多工具中迷航，提升智能体决策准确率。

- [**Jev Codex Router**](https://github.com/0xNatoshi/jev-codex-router) `★ 26` - 每轮先看任务有多难，再给 Codex 选模型和思考深度。简单活省一点，难活再上强模型。
  - 🎯 **核心决策**: Jev 判断当前轮次的任务层级与推理需求，本地策略决定模型、effort 和速度档。
  - 💡 **收益亮点**: 作者对 237 轮历史会话按标价重算，估计比全用最贵模型省约 60%。

- [**typesafe-skill-router**](https://github.com/DECRUX9812/typesafe-skill-router) `★ 7` - Hermes Agent 专用技能路由器：在调用大模型前先由 Jev 选出唯一值得加载的 Skill，单轮仅需 ~$0.001。
  - 🎯 **核心决策**: 在数十个可用 Agent Skill 列表中，比对用户指令并挑出最关键的一个，拒绝加载冗余技能。
  - 💡 **收益亮点**: 无需将所有工具定义全量塞入 Prompt，极大地释放上下文空间并降低首字生成延迟。

- [**jev**](https://github.com/BorisLeMeec/jev) `★ 6` - Go 编写的 Claude Code 插件：利用 Jev 对会话状态与文件改动进行快速模型分流与上下文瘦身。
  - 🎯 **核心决策**: 根据当前改动文件的复杂度和工程师指令，裁决该轮由轻量模型响应还是升级至顶级模型。
  - 💡 **收益亮点**: 编译为单一 Go 二进制插件，无外部运行时代价，显著降低日常编码调试的 API 费用。

- [**hermes-jev**](https://github.com/keeltrace/hermes-jev) `★ 4` - Hermes Agent 决策与工具门禁系统：利用 Jev 进行类型化判定、技能排序与可选工具准入。
  - 🎯 **核心决策**: 在任务各阶段对候选工具打分并裁决是否准入，拦截无关工具调用以防模型偏离任务目标。
  - 💡 **收益亮点**: 将智能体的工具候选集严格收缩至必需范围，大幅提升复杂长链任务的执行准确率。

- [**SpecPi**](https://github.com/TannerMidd/SpecPi) `★ 4` - Pi 编程 Agent 的轻量级 Harness：内置 Jev 顾问扩展，根据任务复杂度与上下文规格动态优化执行参数。
  - 🎯 **核心决策**: 在任务派发前判定代码改动规模与依赖深度，推荐对应模型档位与上下文保留策略。
  - 💡 **收益亮点**: 轻量化架构避免引入冗余中介抽象，直接利用 Jev 裁决降低长会话 token 开销。

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

- [**tax-doc-classifier**](https://github.com/kyotofin/tax-doc-classifier) `★ 155` - 税务文档页面分类器：通过 Jev 对 261 种美国 IRS 税表实现 100% 严格分类准确率，单页成本约 $0.001。
  - 🎯 **核心决策**: 分析扫描件提取的 OCR 文本片段，从 261 个税表编号候选中精确裁决具体所属税表类型。
  - 💡 **收益亮点**: 获得 150+ GitHub Stars，在庞大候选空间中达成 100% 准确率，大幅颠覆传统金融报税处理成本。

- [**goodwatch-monorepo**](https://github.com/alp82/goodwatch-monorepo) `★ 38` - 影视推荐发现系统：集成 Jev 原型比对模块，通过影视 DNA 与用户偏好特征进行离散推荐裁决。
  - 🎯 **核心决策**: 根据电影多维元数据特征与用户历史喜好，判定候选影视作品的推荐契合度。
  - 💡 **收益亮点**: 比纯向量余弦相似度更契合复杂偏好边界，有效挖掘长尾高质量电影。

- [**Prism**](https://github.com/irfndi/prism-liquidity-agent) `★ 32` - 观察 Solana 流动性池的 Agent。Jev 在旁边给风险打分，先与规则结果对照，不直接决定买卖。
  - 🎯 **核心决策**: 对入池分布、毒性交易流、回归持有与市场压力给出影子判断，日志用于校准。
  - 💡 **收益亮点**: 给既有规则多一组可比较的信号；交易决定仍由确定性规则控制。

- [**Jev-Trades**](https://github.com/zadescoxp/Jev-Trades) `★ 7` - 用实时加密货币行情练习模拟交易。Jev 给出交易判断，面板展示虚拟仓位和技术指标，不连真实下单接口。
  - 🎯 **核心决策**: 读取已完成的分钟 K 线与技术指标，对启用的资产返回结构化交易判断；Python 按置信度和仓位限制更新模拟账户。
  - 💡 **收益亮点**: 把行情、模型信号和模拟持仓放在一起观察，便于检查决策过程。

- [**HA-Jev**](https://github.com/AboveColin/HA-Jev) `★ 6` - 让智能家居回答「衣服是不是洗完却忘了拿」。Jev 的答案变成 Home Assistant 传感器，接进已有自动化。
  - 🎯 **核心决策**: 把选定设备和实体的状态交给 Jev，得到概率、选项或分数，再按配置阈值触发自动化。
  - 💡 **收益亮点**: 自然语言条件能复用现有传感器、通知和场景，不必另搭聊天助手。

- [**jev-seo**](https://github.com/AkashPriyadarshii/jev-seo) `★ 3` - 完全免费的终端 SEO 与 GEO 分析套件：结合 DuckDuckGo 与 Jev 评估搜索排名与内容相关性。
  - 🎯 **核心决策**: 评估搜索结果摘要与网页内容的意图匹配度、关键词密度与生成式回答推荐概率。
  - 💡 **收益亮点**: 无需购买昂贵的商业 SEO 会员，依靠开源命令行与 Jev 语义打分实现高质量的站点优化审计。

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

- [**jev-reviewer**](https://github.com/choxos/jev-reviewer) `★ 1` - 医学与文献系统综述数据提取器：按照 RoB 2 / ROBINS-I 等标准模板由 Jev 定位原始论文依据并逐行标注。
  - 🎯 **核心决策**: 在临床试验报告与论文补充材料中，判断具体行是否回答了提取表单中的特定偏倚风险评估项。
  - 💡 **收益亮点**: 所有答案直接关联原文逐字引用和页码，所有文献保留在浏览器本地，满足严苛学术审查要求。

- [**jevsome-projects**](https://github.com/ozers/jevsome-projects) `★ 1` - 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 🎯 **核心决策**: 评估业务状态，给出供本地规则参考的分类或风险分数。
  - 💡 **收益亮点**: 增加一组可记录、可对照的判断信号。

- [**jevsume**](https://github.com/unownone/jevsume) `★ 1` - 给简历做一次结构化体检。既检查措辞、结构和机器可读性，也能对照具体职位描述，看这份简历是否匹配。
  - 🎯 **核心决策**: 对提取出的简历文本与职位要求逐项判断和打分，再由 Worker 汇总成页面里的评审结果。
  - 💡 **收益亮点**: 能保存输入、问题与输出，方便回看每次评审；没有 API key 时运行的是模拟结果。

- [**jev-trade**](https://github.com/Waxmell114514/jev-trade) - 把 BTC、ETH 的行情变成文字状态，让 Jev 给交易判断，再放进含延迟和费用的模拟撮合里观察。
  - 🎯 **核心决策**: 代码先计算市场特征；Jev 回答有限的方向与风险问题，本地策略决定模拟仓位。
  - 💡 **收益亮点**: 把判断、延迟和执行成本放到同一实验记录里比较。

---

<a id="decision-tools-zh"></a>
## 🎯 通用决策与启发式评估

*开箱即用的通用判定组件、启发式打分工具与业务动作多选辅助器。*

- [**ai-hedge-fund**](https://github.com/virattt/ai-hedge-fund) `★ 63497` - 爆款多智能体 AI 对冲基金模拟系统，内置官方 JevLLM 适配器直接调用 System One 接口，为量化交易提供零幻觉确定性决策。
  - 🎯 **核心决策**: 输入多维度行情指标与智能体信号，在单一请求中输出买入、卖出或持有决策及其置信度。
  - 💡 **收益亮点**: 免除大语言模型输出格式漂移与解析失败，交易信号响应极快且可严格设防。

- [**loki**](https://github.com/wundercorp/loki) `★ 24` - 可自主演进的智能体框架：接入 Jev 决策客户端，在执行复杂长流程时对步骤完成度进行打分。
  - 🎯 **核心决策**: 评估智能体当前执行环境状态与预期目标，裁决是否达到阶段性验收标准。
  - 💡 **收益亮点**: 避免智能体陷入死循环或未完成即提前退出，提供可靠的外部轻量验收裁判。

- [**killmyidea**](https://github.com/monteduro/killmyidea) `★ 17` - 创业点子速决器：向 Jev 描述你的创业想法，毫秒级判定该想法应当 Kill 掉、继续修复完善还是立即上线。
  - 🎯 **核心决策**: 根据产品描述评估市场痛点真实度、技术可行性与护城河，输出 kill / fix / ship 离散裁决。
  - 💡 **收益亮点**: 毫不留情的客观裁决，杜绝大模型的逢迎阿谀，帮助创业者在数秒内识别想法中的致命缺陷。

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

- [**goodall**](https://github.com/bensyverson/goodall) - Go 语言简单可扩展的智能体循环：集成 TypeSafe 客户端作为离散决策分支内核。
  - 🎯 **核心决策**: 在每轮智能体循环中评估上下文观察结果，裁决下一步调用哪个本地 Go 工具或结束循环。
  - 💡 **收益亮点**: 代码结构极度清晰，为 Go 开发者构建自主智能体提供了一个轻便、易测的基准架构。

---

<a id="classification-taxonomy-zh"></a>
## 🏷️ 文本分类与分类学标注

*多标签层级分类、文档结构化标引与分类学数据集构建工具。*

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

- [**typesafe-ai-benchmark**](https://github.com/iammrduncan/typesafe-ai-benchmark) `★ 32` - LLM 网关与基准对比套件：模拟 TypeSafe 结构化输出并对标真实 Jev 在延迟与确定性上的差异。
  - 🎯 **核心决策**: 对比传统生成式模型做强类型输出与 Jev 原生 System One 输出在耗时与解析失败率上的表现。
  - 💡 **收益亮点**: 提供翔实的实测对比数据，证明 Jev 在特定分类与离散判断场景下对传统模型的碾压级性能。

- [**typesafe-playground**](https://github.com/kavehmz/typesafe-playground) `★ 9` - Jev 交互式实验沙盒：涵盖客服工单多分类路由与 3D 自动驾驶模拟环境中的连续避障决策。
  - 🎯 **核心决策**: 在工单分流中匹配最佳业务队列，在 3D 仿真中实时评估传感器输入并选择转向操作。
  - 💡 **收益亮点**: 直观呈现 Jev 在静态文本分类与高频动态决策两类场景下的延迟与置信度表现。

- [**jev-behavior-study**](https://github.com/RINNECODER/jev-behavior-study) `★ 3` - Jev 1.13.0 行为实证研究：包含详尽测试报告、受控提示词对比实验、原始测试数据与离线验证套件。
  - 🎯 **核心决策**: 在不同温度参数、提示词长度与选项扰动下，系统性记录 Jev 的输出稳定性与概率漂移规律。
  - 💡 **收益亮点**: 为学术界与工业界提供了珍贵的第一手实证行为图谱，深入揭示 System One 模型的决策特性。

- [**Canny**](https://github.com/qkal/Canny) `★ 1` - 智能体工作完成度验收门禁：防止 AI 编程智能体在没有证据的情况下擅自宣称任务已完成，由 Jev 协助裁决。
  - 🎯 **核心决策**: 分析终端命令执行结果、代码改动差异与验收标准，裁决智能体是否真正达成了验收里程碑。
  - 💡 **收益亮点**: 确定性 Hook 与 Jev 语义裁决双重把关，配合只增账本记录，彻底消除智能体「假装完成」的幻觉。

- [**jev-calibration-audit**](https://github.com/jujumilk3/jev-calibration-audit) - Jev 模型置信度校准评测套件：通过独立 API 批量测试 Jev 的预测准确率、ECE 误差与概率可靠性。
  - 🎯 **核心决策**: 在标准基准数据集上提取 Jev 输出的离散概率值，并与真实标注标签进行可靠性对齐计算。
  - 💡 **收益亮点**: 提供第三方客观的置信度可靠性数据支撑，帮助工程团队设定严谨的业务拒绝与放行阈值。

- [**jev-eval**](https://github.com/4esv/jev-eval) - 独立横向评测套件：将 TypeSafe Jev 与前沿模型在准确率、置信度校准、时延与成本四个维度进行全面对标。
  - 🎯 **核心决策**: 在标准化多选与真伪判断测试集上，并行执行 Jev 与基准模型并对输出做严格的统计显著性检验。
  - 💡 **收益亮点**: 以真实代码和无偏见测试集为依托，量化展示 Jev 在离散决策场景下的速度与成本优势。

---

<a id="voice-conversation-zh"></a>
## 🎙️ 实时语音与多轮对话

*多轮对话轮次裁决、插话检测与实时低延迟语音交互系统。*

- [**aiavatarkit**](https://github.com/uezo/aiavatarkit) `★ 674` - 让语音角色少一点抢话。AIAvatarKit 可用 Jev 判断用户是真的说完了，还是停下来想一想、准备继续说。
  - 🎯 **核心决策**: 结合转写文本和停顿时长，估计是否应该继续等待，再由配置决定何时结束这一轮。
  - 💡 **收益亮点**: 为固定静音计时补充语义线索；这是可选的语音轮次判断组件。

- [**OpenWhisper**](https://github.com/Knuckles92/OpenWhisper) `★ 185` - 本地语音听写与会议记录平台：通过 Jev 对会议文本段落进行实时议题归类与发言要点裁决。
  - 🎯 **核心决策**: 对实时转录出的语音片段判断其所属议程主题、待办事项类型或闲聊噪音。
  - 💡 **收益亮点**: 边录边分，无需在会议结束后等待漫长的全文重推理即可得到结构化纪要草稿。

- [**leadgenrationaivoiceagent**](https://github.com/sumitrevolt/leadgenrationaivoiceagent) `★ 1` - B2B 销售外呼与语音智能体：在多轮通话中集成 Jev 进行实时客户意向与回复分支裁决。
  - 🎯 **核心决策**: 在语音识别转录完成后，300ms 内裁决客户核心意向（如拒绝、询问价格、预约演示）。
  - 💡 **收益亮点**: 超低延迟的意图判定缩短对话停顿时间，显著提升外呼交互的自然度与成单率。

- [**ha-conversation-jev**](https://github.com/luxus/ha-conversation-jev) - 给 Home Assistant 语音入口做分流：简单灯光命令直接走设备服务，其余交给 Grok 对话助手。
  - 🎯 **核心决策**: Jev 把语句分成 fast_service、grok 或 reject，并结合本地目标匹配与置信度门槛处理。
  - 💡 **收益亮点**: 让支持的开灯、关灯、调亮度命令走明确的设备操作路径。

---

<a id="creative-tools-zh"></a>
## 🎨 创意生成与多媒体编排

*界面组件动态组合生成、算法音乐编排与智能 MIDI 旋律生成工具。*

- [**json-render**](https://github.com/vercel-labs/json-render) `★ 16519` - Vercel Labs 出品的 Generative UI 极速渲染库，用 Jev 离散评估替换流式 JSON 生成，将 UI 选型与拼装耗时从 3.21 秒压缩至 880 毫秒。
  - 🎯 **核心决策**: 在一次请求中并行评估组件树匹配度，直接输出结构化组件选择与插槽动作。
  - 💡 **收益亮点**: 摆脱传统逐 token 吐 JSON 的慢速解析，首屏界面毫秒级直出。

- [**jevmeter**](https://github.com/ChetasLua/jevmeter) `★ 57` - 视频内容实时打分仪表盘：对视频字幕每句话由 Jev 进行打分，并将动态仪表叠加渲染进 16:9 视频中。
  - 🎯 **核心决策**: 对视频转录字幕逐句评估观赏吸引力、幽默度或干货价值，输出离散评分与评语标签。
  - 💡 **收益亮点**: 将语义评估直接可视化为视频特效元素，极大提高短视频后期制作与数据洞察效率。

- [**refgarden**](https://github.com/AlbionaHoti/refgarden) `★ 15` - 创作者空间灵感参考库：利用 Jev 对设计素材、截图与文字灵感进行自动标签归类与关联聚类。
  - 🎯 **核心决策**: 根据素材的描述文本与视觉上下文，从预设设计设计风格候选中挑出最契合的分类。
  - 💡 **收益亮点**: 让创作者专注于视觉构思，后台自动完成素材整理归档与跨媒介关联发现。

- [**jevthoven**](https://github.com/cocktailpeanut/jevthoven) `★ 3` - 用一句话描述想听的音乐，让 Jev 逐小节选音符，生成能编辑、播放和导出的多轨 MIDI。
  - 🎯 **核心决策**: 依次选择曲式、乐器、和弦、节奏和整小节模式，本地程序把选择变成音符。
  - 💡 **收益亮点**: 保留每一步选曲依据，也能手动修改并导出 MIDI。

- [**ui-generator-instinct-jev**](https://github.com/joevidev/ui-generator-instinct-jev) `★ 1` - 描述想要的界面，让 Jev 从现成组件里选类型、字段和样式，再由程序拼出来。
  - 🎯 **核心决策**: 从有限候选中选择组件家族、具体组件、字段类型与外观；分不清时追加比较。
  - 💡 **收益亮点**: 输出已有组件组成的界面和可复制 JSX，不依赖模型随手编写代码。

- [**jev-music-theory-1**](https://github.com/adammichaelwood/jev-music-theory-1) - 让 Jev 做和声习题，也让它选和弦弹一段电钢琴。重点是观察它懂哪些乐理、在哪些关系上出错。
  - 🎯 **核心决策**: 从有限的声部、音高、时值或根音、和弦类型中选择，代码负责发声和规则评分。
  - 💡 **收益亮点**: 把音乐判断拆成可测的小选择题，并留下失败边界。

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
