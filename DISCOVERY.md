# Discovery report — 2026-09-18

14 seed projects expanded to **130 source-reviewed projects**. 116 additions remain after 5 false-positive removals.

Live GitHub metadata and fixed-version source evidence are retained in `src/data/projects.json`. The GitHub Actions run completed and committed a real update; broader local scans inspected 190 candidates. Search coverage remains partial because of API result caps, per-run budgets, and one recorded network failure.

These are source-level integrations, including optional providers, examples, prototypes and shadow modes. None has been independently runtime-benchmarked here.

| Project | What it does |
| --- | --- |
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 给 Claude Code 压缩上下文时，先删掉过时的工具调用和结果。留下来的原文不改写，关键对话仍按原样保留。 |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 给写代码的 Agent 一块质量仪表盘：每改一段，就看看可读性、安全性和测试等维度有没有变好。 |
| [realZachi/pg-jev](https://github.com/realZachi/pg-jev) | 让 SQL 直接问「哪些工单的客户正在生气」。用一句人话给数据库行筛选、分类和排序。 |
| [standardagents/jevpilot](https://github.com/standardagents/jevpilot) | 在浏览器里开一辆小车，让 Jev 从提前算好的路线和速度里选下一步。 |
| [jkudish/jev-browser](https://github.com/jkudish/jev-browser) | 给它一个网址和任务，它会选按钮、填字段、翻页面，最后交回页面内容和每一步的操作记录。 |
| [y0usaf/pi-jev](https://github.com/y0usaf/pi-jev) | 给 Pi 编程助手加一个风险观察员：执行前看命令会不会越界，执行后看日志是否泄露秘密、错误该怎么处理。 |
| [jomatsu/pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode) | 给 Pi 的命令执行加一道门禁。明确安全的先通过，其余交给 Jev 判断；默认拿不准就拦住。 |
| [zadescoxp/Jev-Trades](https://github.com/zadescoxp/Jev-Trades) | 用实时加密货币行情练习模拟交易。Jev 给出交易判断，面板展示虚拟仓位和技术指标，不连真实下单接口。 |
| [dannote/jev](https://github.com/dannote/jev) | 把 Jev 变成 Elixir 程序里的一个异步同伴。发去状态和问题，答案回来后直接用模式匹配决定下一步。 |
| [blakestone-x/jev-mcp](https://github.com/blakestone-x/jev-mcp) | 给 MCP 客户端加上分类、打分、是非判断和候选匹配工具。 |
| [AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev) | 让智能家居回答「衣服是不是洗完却忘了拿」。Jev 的答案变成 Home Assistant 传感器，接进已有自动化。 |
| [AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | 把 Jev 和 GLiNER 放到同一批分类题上，除了答对率，也检查概率靠不靠谱。 |
| [gamesonrblx/Jevbridge](https://github.com/gamesonrblx/Jevbridge) | 给现有 Agent 接一个结构化决策适配器：同样的问题可以交给 Jev，也可以交给普通模型或离线规则。 |
| [mizchi/jev-playground](https://github.com/mizchi/jev-playground) | 一个 MoonBit 实验场：让 Jev 下五子棋、打简化 MOBA、判断命令风险，也试着把判断写进小语言。 |
| [jomatsu/zod-jev](https://github.com/jomatsu/zod-jev) | 给 Zod 表单校验补上「意思对不对」这一层：字段格式过关后，再看描述是否匹配、内容是否含个人信息。 |
| [y0usaf/jev-lm](https://github.com/y0usaf/jev-lm) | 把下一个词当选择题，试着用 Jev 拼出句子；也能让它挑选本地草拟的整段续写。 |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 用人话搜网页，先挑搜索源和时间范围，再把相关链接排到前面。页面给链接和摘要，不代写答案。 |
| [vinilana/live-jev](https://github.com/vinilana/live-jev) | 俯视小车模拟器：Jev 选车道和速度，还能与聊天模型跑同一条路线。 |
| [devagrawal09/jev-code](https://github.com/devagrawal09/jev-code) | 给编程 Agent 一个小帮手：找相关文件、检查改动是否偏题、整理测试失败和审查意见。 |
| [docxology/daf-jev](https://github.com/docxology/daf-jev) | 把 Jev 常用零件装成一个 Python 工具箱：提问、批量跑样本、看校准情况，再把结果接到程序或 MCP。 |
| [adhyaay-karnwal/jev-chat](https://github.com/adhyaay-karnwal/jev-chat) | 一个研究聊天解码器：不断让 Jev 选词或短语，再由代码接成回答。 |
| [tumf/jev-cli](https://github.com/tumf/jev-cli) | 在终端发一段文本或 JSON，直接拿回「是不是、选哪个、打几分」。输出能接进脚本继续处理。 |
| [ranjan2829/AskJev](https://github.com/ranjan2829/AskJev) | 给浏览器装一个任务副驾。输入目标后自动点按钮、填表；碰到付款、删除等高风险操作时停下来确认。 |
| [Foadsf/jev-for-engineers](https://github.com/Foadsf/jev-for-engineers) | 机械与电气工程的八组 Jev 小实验：分派设计任务、检查仿真日志、匹配零件，再由 Python 规则决定怎么处理。 |
| [haseeb-heaven/jev-system-one](https://github.com/haseeb-heaven/jev-system-one) | 在终端里提问：OpenAI 写回答，Jev 负责定回答方式、检查草稿并决定是否重写。 |
| [leftspace89/JevBird](https://github.com/leftspace89/JevBird) | 让 Jev 玩 Flappy Bird：代码先算候选飞行路线，再让模型选走哪条。 |
| [HyunjunJeon/jev-judgment](https://github.com/HyunjunJeon/jev-judgment) | 给编程 Agent 增加一次判断检查：该不该问用户、命令是否越界、失败后还能不能重试。主模型继续负责写代码。 |
| [jtsang4/jev-cli](https://github.com/jtsang4/jev-cli) | 在终端里问 Jev 判断题。输入文本或 JSON，再给出分类、是非或评分问题，拿回脚本能直接读取的 JSON。 |
| [buchmark/claude-jev](https://github.com/buchmark/claude-jev) | 给 Claude Code 的审查结论找个复核助手。把疑似 Bug、排错猜想、设计方案和搜索结果交给 Jev 打分，再决定先看什么。 |
| [tontoko/jev-browser](https://github.com/tontoko/jev-browser) | 让 Playwright 听懂网页操作指令。支持点按钮、填整张表和按记录提取信息，也能通过持久会话 CLI、MCP 或 SDK 使用。 |
| [TheoOliveira/pi-jev](https://github.com/TheoOliveira/pi-jev) | 帮 Pi 编程 Agent 按任务找工具和技能。还提供结构化判断，并可选择开启模型分流与工具历史筛选。 |
| [reachjalil/jev-tree](https://github.com/reachjalil/jev-tree) | 选项太多，一次问不下？先把目录分成树，让 Jev 逐层选分支，最后落到具体商品、事件类型或工作流。 |
| [hamakyo/jev-starter](https://github.com/hamakyo/jev-starter) | 给 Jev 判断补上应用里的后半段：把结果送去自动处理、备用模型或人工复核，并记录每条规则的效果。 |
| [himomohi/aside-jev](https://github.com/himomohi/aside-jev) | 给 Aside 浏览器 Agent 接一个 Jev 决策助手。Agent 先列好可执行动作，Jev 选一个，再交给 Aside 操作网页。 |
| [ShivamPansuriya/jev-skill-gate](https://github.com/ShivamPansuriya/jev-skill-gate) | 技能装得多，先别把说明全塞给 Claude Code。它按当前项目给技能排相关度，保留有用的说明，其余只留名字或手动入口。 |
| [leepokai/jev-guard](https://github.com/leepokai/jev-guard) | 在编程 Agent 调工具前后加一道检查：操作是否危险、是不是用户要求的、返回内容里有没有诱导 Agent 越界的指令。 |
| [rashedInt32/jev-mcp](https://github.com/rashedInt32/jev-mcp) | 把 Jev 装成通用 MCP 判断工具。Agent 可以拿它做分类、打分、是非检查，也能一次提交多个问题。 |
| [AboveColin/jevclient](https://github.com/AboveColin/jevclient) | 在 Python 异步程序里调用 Jev 的小客户端。一次发出多个判断问题，直接拿到分类、分数和概率对象。 |
| [molis-ai/jev-workbench](https://github.com/molis-ai/jev-workbench) | 在本地网页里定义、试跑并发布 Jev 判断函数，后端和 Agent 调用同一个固定版本。 |
| [phureewat29/got-jev](https://github.com/phureewat29/got-jev) | 《权力的游戏》文字冒险：大模型写剧情，Jev 判断地点、情绪和危险，再切换配乐与背景。 |
| [joelhooks/pi-fast-jev-compaction](https://github.com/joelhooks/pi-fast-jev-compaction) | 给 Pi 删掉过时的工具调用和结果，保留原话，不另外生成摘要。 |
| [anpicasso/hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals) | Hermes 命令审批插件：让 Jev 选通过、拒绝或交给人看，再由代码应用本机策略。 |
| [sherajdev/jev-research](https://github.com/sherajdev/jev-research) | 一份 Jev 与 Herdr 协作指南，附带把任务分给不同 Agent 的小原型。 |
| [Vicente-MD/jev-resilience](https://github.com/Vicente-MD/jev-resilience) | 给 Spring WebFlux 检查“HTTP 200 但正文其实报错”的响应。 |
| [Stumble/jev-go](https://github.com/Stumble/jev-go) | 社区 Go SDK 和交互命令行，既能直连 TypeSafe，也能走 Vercel AI Gateway。 |
| [TokenTrim/jev-agent-failure-benchmark](https://github.com/TokenTrim/jev-agent-failure-benchmark) | 给失败的多 Agent 记录找原因：哪个 Agent、哪一步、哪种错误。 |
| [paulsmith/computer-use-jev](https://github.com/paulsmith/computer-use-jev) | 用 Go 控制 macOS 应用，让 Jev 从当前可访问性树里选控件和下一步操作。 |
| [4anti/jev-broadcast-lab](https://github.com/4anti/jev-broadcast-lab) | 一个以国际象棋为主的 Jev 实验台，也能试工单分类、文档匹配和审核。 |
| [fgn/jevgo](https://github.com/fgn/jevgo) | 一个只依赖 Go 标准库的 Jev 客户端，可选接上 Langfuse 记录调用。 |
| [lbotinelly/jev-little-airways](https://github.com/lbotinelly/jev-little-airways) | 小岛机场模拟器：让 Jev 判断飞机是否改降、盘旋、让行，以及谁先落地。 |
| [Little-Planet-Labs/jev-playground](https://github.com/Little-Planet-Labs/jev-playground) | 在网页里贴一段状态、添加选择题或评分题，直接看 Jev 的答案和概率分布。 |
| [Butochnikov/laravel-typesafe-jev](https://github.com/Butochnikov/laravel-typesafe-jev) | 把 Jev 接入 Laravel，提供配置、依赖注入、Facade 和可记录请求的测试替身。 |
| [guillemus/jev-go](https://github.com/guillemus/jev-go) | 一个接口很小的社区 Go SDK，用来发 Jev 请求和读取模型列表。 |
| [omni-/ask-jev](https://github.com/omni-/ask-jev) | 在 Windows Codex 会话里输入 :jev，让它按已记录的执行证据做一次检查。 |
| [rhighs/jev-code](https://github.com/rhighs/jev-code) | 一个实验性编程终端：让 Jev 做受限选择，逐步拼出 AST，并调用本地工具。 |
| [lukaske/jev-doom-agent](https://github.com/lukaske/jev-doom-agent) | 在浏览器里跑两份 Doom 引擎，让 Jev 根据游戏状态选择战术动作。 |
| [anessbelbati/jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) | 把搜索出来的三十段文字交给 Jev，测试它能否像专用 reranker 一样排出相关内容。 |
| [DanielKillenberger/jev-predict-skill](https://github.com/DanielKillenberger/jev-predict-skill) | 一个 Agent skill：读另一个 skill 的规则和现有证据，预测它下一次会选哪个结论。 |
| [aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade) | 读取 Hyperliquid 行情，让 Jev 对多个币种分别选多空、开仓、平仓或等待。 |
| [unownone/jevsume](https://github.com/unownone/jevsume) | 给简历做一次结构化体检。既检查措辞、结构和机器可读性，也能对照具体职位描述，看这份简历是否匹配。 |
| [thesammykins/jev_ampcode](https://github.com/thesammykins/jev_ampcode) | 给 Amp 一个比较方案的小工具。把备选方案、证据和偏好摆出来，让 Jev 帮忙选。 |
| [NicolasMontone/jev-tool-permissions](https://github.com/NicolasMontone/jev-tool-permissions) | 给 Vercel AI SDK 的工具调用加门禁，顺便收起本轮用不到的工具。 |
| [cocktailpeanut/jevthoven](https://github.com/cocktailpeanut/jevthoven) | 用一句话描述想听的音乐，让 Jev 逐小节选音符，生成能编辑、播放和导出的多轨 MIDI。 |
| [AmoghCreator/doom-jev](https://github.com/AmoghCreator/doom-jev) | 让 Jev 玩 Doom：看结构化战况，决定往哪走、瞄谁和什么时候开火。 |
| [zbush/jev-context](https://github.com/zbush/jev-context) | 给 Codex 的代码搜索加一道筛子。先用 ripgrep 找候选，再只把 Jev 判为相关的片段送回来。 |
| [joevidev/ui-generator-instinct-jev](https://github.com/joevidev/ui-generator-instinct-jev) | 描述想要的界面，让 Jev 从现成组件里选类型、字段和样式，再由程序拼出来。 |
| [vlad-terin/jev-use](https://github.com/vlad-terin/jev-use) | 让 Codex 先定目标，再让 Jev 连续选控件。浏览器和桌面动作仍由 Codex 的现有工具执行。 |
| [alxcrt/is-odd-jev](https://github.com/alxcrt/is-odd-jev) | 一个刻意小题大做的实验：把数字交给 Jev，问它是不是奇数，再看返回的概率。 |
| [droidrun/mobile-jev](https://github.com/droidrun/mobile-jev) | 给 Android 手机一个目标，Jev 选应用和控件，Mobilerun 负责打开、点击、输入；网页面板能看过程。 |
| [minghanminghan/jev-demo](https://github.com/minghanminghan/jev-demo) | 一个客服分流小样：同一轮先问全套分类问题，再沿答案选路径；用户想转人工时就提前交接。 |
| [adammichaelwood/jev-music-theory-1](https://github.com/adammichaelwood/jev-music-theory-1) | 让 Jev 做和声习题，也让它选和弦弹一段电钢琴。重点是观察它懂哪些乐理、在哪些关系上出错。 |
| [jcpsimmons/jev-macos-loop](https://github.com/jcpsimmons/jev-macos-loop) | 在 Mac 本地识别屏幕文字和控件，把文字选项交给 Jev，再点击它选中的元素。 |
| [hugo-alves/jev-router-playground](https://github.com/hugo-alves/jev-router-playground) | 把几种模型放进候选池，让 Jev 选一个，再把各模型的实际回答摆出来由你评判。 |
| [amberwhitehead/jevscript](https://github.com/amberwhitehead/jevscript) | 一个把语义判断写进程序语言的早期实验。目前先用手写脚本验证：几个问题合在一起问 Jev 会怎样。 |
| [AE-AlphaEdge/grokskill-jev](https://github.com/AE-AlphaEdge/grokskill-jev) | 把 Jev Ultrafast 接到 Grok Build，复用已打开的 Chrome 标签页，并提供 PowerShell 启动方式。 |
| [Waxmell114514/jev-trade](https://github.com/Waxmell114514/jev-trade) | 把 BTC、ETH 的行情变成文字状态，让 Jev 给交易判断，再放进含延迟和费用的模拟撮合里观察。 |
| [Bud-ro/jev-demos](https://github.com/Bud-ro/jev-demos) | 用迷宫考 Jev：只问下一步，或一次问后面很多步，看看它何时撞墙、绕路或反复打转。 |
| [jvsteiner/jevex](https://github.com/jvsteiner/jevex) | 让 Jev 当流程指挥，普通语言模型只填参数和写最后回答，MCP 工具负责真正做事。 |
| [mittal-parth/jev-experiments](https://github.com/mittal-parth/jev-experiments) | 让 Jev 玩 Chrome 小恐龙和本地射击竞技场：读取结构化状态，选跳跃、移动、瞄准和开火。 |
| [Shifty-Eye-Games/foreman-jev](https://github.com/Shifty-Eye-Games/foreman-jev) | 给 Codex 工人配一个 Jev 监督员。它评估进展，但完成前还必须跑程序员指定的验收命令。 |
| [reachjalil/jevlogs](https://github.com/reachjalil/jevlogs) | 日志照样归档，先让 Jev 挑出值得继续分析的部分，再决定哪些送给更重的模型。 |
| [luxus/ha-conversation-jev](https://github.com/luxus/ha-conversation-jev) | 给 Home Assistant 语音入口做分流：简单灯光命令直接走设备服务，其余交给 Grok 对话助手。 |
| [vercel/ai](https://github.com/vercel/ai) | AI SDK 的可选 TypeSafe provider：用统一 evaluate 接口一次问 Jev 多个选择、评分和是非问题。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 给 Python LangChain 流程加一个可选 Jev 分类节点，返回类别、概率和等级评分。 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | Oh My Pi 可选用 Jev 处理小判断：该用多深思考、是否意外停下，以及 Git 暂存相关分类。 |
| [elizaOS/eliza](https://github.com/elizaOS/eliza) | Eliza 源码内有一个可选 TypeSafe HTTP 适配器，供明确调用时发送结构化判断请求。 |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | 给 Composio 工具箱接一个可选 Jev 决策层：从工具列表挑工具，填能枚举的参数，其余交给调用方补。 |
| [pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai) | Pydantic AI 的可选 Jev 模型：把输出模型里的布尔和枚举字段变成问题，拿回符合类型的判断。 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | LiteLLM 的复杂度路由可选用 Jev：先判断请求需要哪个模型档，再交给路由策略处理。 |
| [langchain-ai/langchainjs](https://github.com/langchain-ai/langchainjs) | LangChain.js 的可选 Jev 分类器：给状态配上问题，返回可直接在程序里使用的类别和评分。 |
| [kunchenguid/firstmate](https://github.com/kunchenguid/firstmate) | Firstmate 可选用 Jev 看任务简报，匹配派工规则，再由本地规则选出具体代理配置。 |
| [openchamber/openchamber](https://github.com/openchamber/openchamber) | OpenChamber 可选开启自动模型路由：Jev 看消息属于哪类任务，再使用该类绑定的模型和思考档位。 |
| [ax-llm/ax](https://github.com/ax-llm/ax) | Ax 的可选 TypeSafe 接口：用布尔或固定类别签名调用 Jev，也可直接读取原生概率与评分。 |
| [agentgateway/agentgateway](https://github.com/agentgateway/agentgateway) | Agentgateway 的一个可选护栏示例：让 Jev 检查模型请求和回复里的越狱、有害内容及秘密泄露。 |
| [BennyKok/omg.dev](https://github.com/BennyKok/omg.dev) | omg.dev 的移动端测试脚本可用 Jev 看无障碍树：选下一控件，判断步骤是否完成或已经走不通。 |
| [monotykamary/pi-fabric](https://github.com/monotykamary/pi-fabric) | 给 Pi 的工具运行时加上可编程的 Jev 决策循环。先写好观察、判断和执行步骤，再让它按预算在前台或后台运行。 |
| [latitude-dev/latitude-llm](https://github.com/latitude-dev/latitude-llm) | 给 Latitude 的对话检查流程加一个旁路观察员。可选调用 Jev，记录它认为哪些检查值得运行，先与原流程比较。 |
| [cognesy/instructor-php](https://github.com/cognesy/instructor-php) | 让 PHP 应用通过统一的 Decision 接口使用 Jev。把业务状态和判断题交进去，拿回程序可处理的选项、分数与概率。 |
| [bastani-inc/atomic](https://github.com/bastani-inc/atomic) | Atomic 编程 Agent 的可选决策后端。路由需要在给定选项中做判断时，可以交给 Jev；写代码仍由常规模型完成。 |
| [WrongStack/WrongStack](https://github.com/WrongStack/WrongStack) | 给 WrongStack 编程 Agent 增加一个可选分派助手。遇到多个相近的专长 Agent 时，用 Jev 判断谁更适合当前任务。 |
| [CelestoAI/celesto](https://github.com/CelestoAI/celesto) | Celesto 仓库里的 Jev 代码审查示例。先整理 PR 的疑似问题，再让 Jev 检查它是否由本次修改引入、是否有证据、是否值得修。 |
| [agentjido/req_llm](https://github.com/agentjido/req_llm) | 在 Elixir 的 ReqLLM 里接入 Jev 判断题。使用 evaluate 接口提交状态与问题，返回答案和概率；聊天生成仍走其他模型。 |
| [vellum-ai/vellum-assistant](https://github.com/vellum-ai/vellum-assistant) | Vellum Assistant 增加了一个 Jev provider。选用它后，可以把对话状态或明确的问题包交给 Jev，获得结构化判断。 |
| [notque/vexjoy-agent](https://github.com/notque/vexjoy-agent) | 给 VexJoy 的任务分派增加一条 Jev 路线。输入需求后，判断该选哪位专长 Agent、哪项技能和哪条工作流。 |
| [uezo/aiavatarkit](https://github.com/uezo/aiavatarkit) | 让语音角色少一点抢话。AIAvatarKit 可用 Jev 判断用户是真的说完了，还是停下来想一想、准备继续说。 |
| [ldbumble/taskuary](https://github.com/ldbumble/taskuary) | Taskuary 把消息、任务和 Agent 工作汇到一起，并提供可选 Jev 判断器，对一次运行的状态检查是否满足用户设定的条件。 |
| [yonatangross/orchestkit](https://github.com/yonatangross/orchestkit) | OrchestKit 可选用 Jev 给编程会话分类：这是排错、开发还是其他工作。达到设定阈值时，用分类结果决定会话标识颜色。 |
| [kitze/skillbox](https://github.com/kitze/skillbox) | 自建一个有版本管理的 Agent 技能库，还能选配 Jev 推荐：告诉它当前任务，从你有权限使用的技能里挑更相关的。 |
| [QuentinCody/interlinked-cli](https://github.com/QuentinCody/interlinked-cli) | 给编程 Agent 的本地规则检查加上可选 Jev 评分。它为检查流程提供补充判断，保留确定性规则作为基础。 |
| [danieljvdm/effect-agent](https://github.com/danieljvdm/effect-agent) | 在 Effect Agent 里接入 Jev 决策模型。TypeScript 程序可以用带类型的问题集做判断，也能把它用于可选的模型选择。 |
| [DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden) | 给 Pi 编程 Agent 加一位规则监督员。写文件时检查是否违反项目约定，执行命令前评估危险操作，把问题直接反馈给 Agent。 |
| [pithings/advocaat](https://github.com/pithings/advocaat) | 用简短的 TypeScript 调用向 Jev 提问。把同一份数据里的多个判断一次写好，直接拿到概率、选项和分数。 |
| [getsynkora/synkora-ai](https://github.com/getsynkora/synkora-ai) | Synkora Agent 平台提供 TypeSafe 客户端，可把业务数据交给 Jev 做分类、评分或是非判断，作为工作流中的一项能力。 |
| [hackclub/ai](https://github.com/hackclub/ai) | Hack Club 的 AI 代理增加了 Jev 转发接口。获准用户可通过统一入口提交判断题，同时走现有的鉴权、限额和用量记录。 |
| [kitze/unclutter](https://github.com/kitze/unclutter) | 给网页做视觉减法的浏览器扩展。让 Jev 识别广告、促销和订阅弹窗，再把可复用的隐藏规则存在本地。 |
| [cequence-io/openai-scala-client](https://github.com/cequence-io/openai-scala-client) | 让 Scala 应用也能接入 Jev。这个多模型客户端新增了独立 TypeSafe 模块，用状态和判断题获取结构化答案。 |
