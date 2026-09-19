# TypeSafe / JEV 生态与核心原语深度调研报告

**调研执行代理**: Explorer 2 (Ecosystem & Primitive Explorer)  
**调研时间**: 2026-09-19  
**工作区路径**: `/Users/chenrongwei/.gemini/antigravity/scratch/awesome-jev-projects/.agents/explorer_survey_2`  
**基准需求来源**: `/Users/chenrongwei/.gemini/antigravity/scratch/awesome-jev-projects/.agents/ORIGINAL_REQUEST.md`

---

## 1. 观察事实 (Observation)

### 1.1 TypeSafe / JEV 技术本体与核心定位
- **技术定位与出身**:
  - TypeSafe AI（`https://typesafe.ai/`）由前 OpenAI 研究员、ChatGPT / InstructGPT 共同发明人、RLHF 先驱 **Diogo Almeida**（X: `@CompleteSkeptic`）于经历两年隐形研发（Stealth）后，于 2026 年 9 月中旬正式发布。
  - Jev 并非用于长文本生成的自回归大语言模型（Generative LLM），而是被官方明确定义为**“快思考 / 系统一”（System 1）非自回归决策模型（Non-autoregressive Decision Model）**。
  - 核心工作机制为“AI 驱动的 `if` 条件分支判断”（AI-powered if-statement），在代码运行时中充当高频低延迟的语义协处理器（Semantic Decision Co-processor）。
- **性能与经济学指标**:
  - **超低延迟**: 单次决策推理仅需 **20ms ~ 80ms**（复杂多项决策 150ms ~ 300ms），比前沿通用大模型快 20 ~ 200 倍。
  - **极致成本**: 输入价格为 **$0.042 / 100万 Input Tokens**；**Output Tokens 完全免费（$0.00）**，因为其输出为确定性的结构化离散类型与概率分布，无需逐 Token 自回归解码。综合成本较通用模型降低 40 ~ 400 倍。
  - **训练技术**: 采用 **RLCD（Reinforcement Learning for Calibrated Decisions，校准决策强化学习）**，确保输出概率具备高度统计校准性（Calibrated Probabilities）。
  - **确定性输出**: 数学与结构层面保证类型与 Schema 严格匹配，彻底消除了通用大模型的 JSON 语法破损与“无中生有”的内容幻觉。

### 1.2 四大核心决策原语与 SDK 契约
代码中查验确凿的核心原语包括：
1. **`Choice` (`.choice()`)**:
   - **语义**: 在有限离散候选项（Candidates / Options）中完成单选或多选。
   - **返回值**: 选中的选项标识符，以及全候选项的归一化置信度概率分布。
   - **典型场景**: 浏览器/桌面 DOM 元素点击、高频交易方向（Buy/Sell/Hold）、复杂工作流分支派发。
2. **`Score` (`.score()`)**:
   - **语义**: 对目标输入按照预设维度进行离散阶梯或连续区间数值评估。
   - **返回值**: 标量分值（如 0~1 或 1~10 浮点/整数）及置信度区间。
   - **典型场景**: 代码 Diff 风险分诊（Correctness / Security / Reliability）、文本毒性检测、检索文档相关度 Rerank。
3. **`Noul` (`.noul()`)**:
   - **语义**: 语义布尔值判断与存在性/终止性概率推断（Boolean / Nullability / Grounding Check）。
   - **返回值**: 严格布尔值（true/false）及连续概率标量（0.0 ~ 1.0）。
   - **典型场景**: 提示词注入攻击拦截（Guardrails）、验证码放行、Agent 目标达成终止检查（Goal Halt）、语音断句（VAD）判定。
4. **`systemOne` (`.systemOne()`)**:
   - **语义**: 高层复合型“系统一”极速决策接口，整合状态校验、问题批处理与 Schema 契约。
   - **调用形态**: 如 TypeScript SDK `typesafe().systemOne(payload)`、Kotlin SDK `client.systemOne(input)`。
5. **官方与社区客户端形态**:
   - 原生 SDK: `@typesafe/sdk`、`@typesafe/jev`、Python `typesafe` / `typesafe-ai`（`TypeSafeClient`, `AsyncTypeSafe`）。
   - 原生 API 终端: `https://api.typesafe.ai/v1/choice`, `/v1/score`, `/v1/noul`, `/v1/systemone`。
   - OpenRouter 网关集成:
     - 官方模型标识符: `typesafe/jev-latest`、`typesafe/jev-YYYYMMDD`、`~typesafe/jev-latest`。
     - 端点: `https://openrouter.ai/api/alpha/decisions`。
     - SDK 签名: `@openrouter/sdk` 之 `client.alpha.decisions.create({ decisionsRequest: ... })`。

### 1.3 `src/data/projects.json` 现有 182 个项目的文案与架构范式
通过对当前全部 182 个项目的逆向拆解，发现其具备严密统一的元数据工程范式：
- **`jevDecisionPoint` (Decision Role / 决策点)**:
  - **核心公式**: `[输入感知遥测 / 观测数据] + [Jev 调用的决策原语类型 (Choice/Score/Noul)] + [本地确定性代码后续处理 / 状态机流转]`。
  - **去 AI 味原则**: 杜绝“赋予了革命性的能力”、“全方位无缝赋能”、“打造极致体验”等虚浮词汇；完全使用纯粹工程师行话，明确交代传入什么、选出什么、交给谁。
  - **代码证据摘录**:
    - *jev-ultrafast* (`src/data/projects.json:10`): `"读当前 DOM，在一次请求里选择操作和目标元素；需要输入时才调用文本模型。"`
    - *jarrodwatts/jev-trader* (`src/data/projects.json:9241`): `"输入当前盘口价差、近 100 区块收益率与吃单量流向，预测未来 30 个区块价格变动方向。"`
    - *Winnow* (`src/data/projects.json:58`): `"逐块判断 Read、Bash、Grep 输出是否有用；保留相关或不确定内容，隐藏高置信度无关块。"`
    - *Jev Codex Router* (`src/data/projects.json:50`): `"Jev 判断当前轮次的任务层级与推理需求，本地策略决定模型、effort 和速度档。"`
    - *neo4jev* (`src/data/projects.json:82`): `"Choice 为相邻关系分配概率，Noul 判断是否到达目标；本地 beam search 保留候选路径。"`
- **`highlightBenefit` (Core Benefit / 核心收益)**:
  - **核心公式**: 突出与传统纯 LLM 方案相比带来的**量化工程收益**（时延大幅缩减、Token 成本下降、上下文无污染截断、软实时闭环）。
  - **代码证据摘录**:
    - `"把界面选择与文字生成分开，减少重复读页面。"`（节约前沿模型 Token 与重复渲染开销）
    - `"单次推理延迟低至 80ms 左右，完美嵌入高频区块链出块周期。"`（解决通用 LLM 无法嵌入 300ms 区块时间的痛点）
    - `"减少进入上下文的冗余输出，并保留可召回的原文。"`（防止 Claude Code 出现长日志上下文饱和与能力退化）
    - `"作者对 237 轮历史会话按标价重算，估计比全用最贵模型省约 60%。"`（真实回放计算的可度量降本）
- **四国语言硬契约**:
  - `scripts/readme-i18n.mjs` 中定义了全局字典：`DECISIONS_JA`, `DECISIONS_KO`, `BENEFITS_JA`, `BENEFITS_KO`。
  - 每一个项目的英文 `jevDecisionPointEn` 与 `highlightBenefitEn` 必须在字典中具备 100% 精确匹配的键值对，否则 `npm test` 会直接因缺失翻译映射而失败。
  - 英文 `README.md` 与韩文 `README.ko.md` 全局要求 0 中文字符泄漏（正则严格测试）。

### 1.4 关键技术影响力人物矩阵 (Key Influencers)
1. **Diogo Almeida (@CompleteSkeptic)**:
   - TypeSafe AI 创始人兼 CEO。OpenAI 早期核心研究员，InstructGPT、ChatGPT 的共同发明人，RLHF 机制奠基人。Jev 架构与 RLCD 方法论的总设计师。
2. **Cua 团队 (@trycua)**:
   - 开源桌面级 Computer-Use Agent 框架 Cua 及其底层轻量虚拟化引擎 Lume 的研发团队。推出 `Cua-S1` 与 Jev 深度绑定的无截图、非自回归 GUI 控制闭环。
3. **Chris Tate (@ctatedev)**:
   - Vercel Labs 核心工程师，面向 Agent 的实验性系统编程语言 Zero (`zerolang.ai`) 的创作者。活跃探索 Generative UI、JSON-Render 与 Jev 毫秒级决策结合的前沿形态。
4. **Jarrod Watts (@jarrodwatts)**:
   - 知名 Web3 / AI 跨界极客，Monad 生态活跃布道者。开源 `jarrodwatts/jev-trader`，成功在 Monad 300ms 区块与 Kuru 订单簿上实现 Jev 80ms 高频做市。
5. **Alex Volkov (@altryne)**:
   - 顶级 AI 播客与周刊 *ThursdAI* 主理人。深度跟进 TypeSafe Jev 社区生态，多次专访 Jev 极客项目作者并输出评测。
6. **Nutlope (@nutlope / Hassan El Mghari)**:
   - 知名开源独立开发者（RoomGPT、RestorePhotos 创作者）。倡导模型特化解耦理念，力推“分类归分类、生成归生成”的流水线模式。
7. **Andrej Karpathy (@karpathy)**:
   - 前特斯拉 AI 总监、OpenAI 联合创始人。Cognitive Architecture、Agent OS 以及“快思考反射 vs 慢思考长链推导”理论的提出者，为 Jev 等 System 1 模型的存在合理性提供了最重要的技术思想源泉。

### 1.5 排除项与历史假阳性案例 (False Positives)
查阅 `radar/exclusions.json` 与 `scripts/project-source.test.mjs`，历史排除项及其原因具有高度警示意义：
1. `JoshuaSP/open-jev`: README 明确声明未调用 Jev API，属于空壳/未接入项目。
2. `vinnylarouge/jevlike`: README 第 5 行与 119–123 行明确说明为 independent starter，并非基于 TypeSafe Jev 构建的真实项目。
3. `BerriAI/litellm-docs`: 仅为 LiteLLM 的独立文档站点，只有调用指南而无独立运行源码。主仓库 `BerriAI/litellm` 已收录，文档站不予重复计入。
4. `langchain-ai/docs`: 仅为 LangChain 文档构建仓，属于教程性质，不可当作独立代码库。
5. `IgorGanapolsky/ThumbGate`: 文档明确声明未安装 typesafe-sdk、未调用 api.typesafe.ai，仅借用 Jev 题型设计在本地做正则确定性匹配。
6. **历史同名干扰 (Scala Typesafe)**: Java/Scala 生态中的 `com.typesafe.config`（Lightbend 开源配置库）属于纯同名库，绝非 TypeSafe AI。
7. **纯依赖声明但无调用 (No-Op Dependency)**: 仅在 `package.json` 或 `requirements.txt` 中写入 `@typesafe/sdk`，但在源码中并未发起调用。

---

## 2. 推理逻辑链 (Logic Chain)

```
[Observation 1.1, 1.2]: Jev 是非自回归的 System 1 决策模型，提供 Choice, Score, Noul, systemOne 4类离散原语，单次时延 20-80ms，成本极低。
         ↓ (推理 1: 真实项目必须解决“决策”而非“写小作文”)
[Logic Step 1]: 一个真实的 Jev 项目，其业务代码逻辑结构必定存在明显的“状态观测收集 → 离散原语调用 → 本地策略根据结果分支分流”流水线。若代码中只是让 Jev 生成一段自然语言，则完全不符合 Jev 的设计初衷。
         ↓
[Observation 1.3]: projects.json 的每个项目都必须提炼 jevDecisionPoint (输入什么，裁决什么，由谁执行) 与 highlightBenefit (时延/Token/上下文降低)。
         ↓ (推理 2: 文案编制必须严密呼应系统架构)
[Logic Step 2]: 后续新收录项目的元数据编制，必须严守这一技术叙事范式。中文表述要具备黑客工程气息，英/日/韩多国语言必须保持语义强对齐且 0 泄漏，绝不使用机械营销词。
         ↓
[Observation 1.4]: @CompleteSkeptic, @trycua, @ctatedev 等人构成了从底层模型到桌面虚拟机、Web框架、高频交易的完整影响力链条。
         ↓ (推理 3: 挖掘候选仓库的有效途径)
[Logic Step 3]: 在 X/Twitter、GitHub 及论坛上，顺着上述 7 位人物的点赞、转发、讨论回复、Fork 列表及提及互动，能够以极高信噪比挖掘出真正硬核的社区实验项目。
         ↓
[Observation 1.5, scripts/project-source.mjs]: 准入机制对注释、Docstring、同名 Scala 库、仅文档仓、仅设计借用做了严格正则剥离与过滤。
         ↓ (推理 4: 确立不可逾越的真伪项目准入红线)
[Logic Step 4]: 确立“真伪甄别七道铁律”，杜绝套壳、概念炒作、号池反代与纯依赖声明，确保入库项目 100% 具备源码固定 Commit SHA 级的强证据链。
```

---

## 3. 真伪实现与套壳甄别七道铁律 (Authenticity Criteria)

为指导后续挖掘与入库阶段的严格审核，特制定以下准入判断铁律：

| 维度 | 真实 Jev 接入项目 (Genuine Implementation) | 虚假/套壳/非标项目 (Fake / Shell / Ineligible) | 审查判定方式 |
|---|---|---|---|
| **1. 源码调用证据** | 在不可变 commit 的非测试源码文件中，有明确的 `typesafe.Client`、`TypeSafeClient`、`.choice()`、`.score()`、`.noul()`、`.systemOne()` 调用。 | 仅在 README、`package.json`、注释或 Python docstring 中提及，源码无实质 AST 调用。 | AST/源码剥离注释后正则匹配 (`stripSourceComments`) |
| **2. 接口端点合法性** | 真实请求 `https://api.typesafe.ai` 或通过 OpenRouter 网关调用官方模型 `typesafe/jev-latest` 等。 | 请求钓鱼域名、模拟虚构端点，或 OpenRouter 传入非 Jev 通用大模型（如 gpt-4o）。 | 检查网络请求 URL 与 Model 字段完整性 |
| **3. 业务决策角色** | Jev 负责离散分类、打分、是非阻断或路由，输出直接驱动代码后续的 `if-else` 或状态机。 | 把 Jev 当作普通聊天机器人要求输出 Markdown 长文本或代码。 | 审查 `jevDecisionPoint` 对应上下文逻辑 |
| **4. 排除文档与教程站** | 项目本身是具有独立业务目标的可运行工具、库、扩展或游戏控制器。 | 仅为教程、文档镜像（如 `*-docs`）、学习笔记或引用示例。 | 检查仓库属性，如属于知名库的附属文档则永久剔除 |
| **5. 排除概念借用与自研仿品** | 真实安装并运行时调用 TypeSafe Jev 官方能力。 | 宣称“受到 Jev 启发”但纯本地写死启发式规则，或明确声明不调用 Jev 的替代品（如 `open-jev`, `jevlike`, `ThumbGate`）。 | 检查 README 声明与依赖清单 |
| **6. 排除历史同名冲突** | 必须属于 TypeSafe AI 的决策大模型生态。 | 命中 Java/Scala 生态中的 `com.typesafe.config`（Lightbend Config）。 | 检查包依赖与导入路径命名空间 |
| **7. 排除商业黑产与套壳** | 开源且透明，面向技术场景。 | 账号注册机、号池反代分销、加密货币空气币洗脑推广、无实质功能的套壳壳子。 | 人工审查仓库提交记录与完整性 |

---

## 4. 局限与未覆盖区域 (Caveats)

1. **运行时网络基准测试未执行**: 本调研严格遵循代码级与文档级静态分析，并未配置真实 `TYPESAFE_API_KEY` 或部署受测项目发起实时网络请求（与本项目全局 `runtimeVerified: false` 声明一致）。
2. **闭源商用系统不在收录范围**: 部分企业可能在内部生产环境中私有化接入了 Jev，但根据本项目开源标准，仅收录具备公开 GitHub 地址的开源代码库。
3. **OpenRouter 路由延迟波动**: 虽然 Jev 原生模型为 sub-100ms，但经由 OpenRouter 网关转发时，实际时延受网关网络开销与地域路由影响，可能略高于直连 `api.typesafe.ai`。

---

## 5. 结论 (Conclusion)

1. **生态本质明朗**: TypeSafe Jev 不是又一个自回归 LLM，而是以超低延迟（sub-100ms）、超低成本（$0.042/1M tokens, 输出免费）、校准概率为特征的**“系统一（System 1）非自回归决策协处理器”**。
2. **开发范式确立**: 社区成熟项目的核心架构模式高度统一——“将感知与决策降维，把重活（代码编写/长文本生成）交给通用前沿大模型，把快活（点击哪个、给几分、是否违规、路由到哪）交给 Jev”。
3. **入库审核武器库齐备**: 已提炼出清晰的“真伪实现与套壳甄别七道铁律”，明确了必须剔除的 5 类典型假阳性模式，为后续阶段的新项目准入提供了无可争议的判断依据。
4. **多语言与文案规范就绪**: 确立了无 AI 味、极客风范的 Decision Role 与 Highlight Benefit 编制规范，明确了必须在 `scripts/readme-i18n.mjs` 中对齐日韩文字典的硬性约束。

---

## 6. 独立验证方法 (Verification Method)

后续代理或审查员可通过以下独立命令与文件查验本报告结论：

1. **运行全量测试套件 (90 tests)**:
   ```bash
   DEVELOPER_DIR=/Library/Developer/CommandLineTools npm test
   ```
   *预期*: 90 项测试 100% PASS，0 FAIL，0 警告。验证多语言零泄漏及代码源审查逻辑。
2. **运行生产构建与产物审计**:
   ```bash
   DEVELOPER_DIR=/Library/Developer/CommandLineTools npm run build
   ```
   *预期*: Vite 编译通过，`scripts/audit-build.mjs` 审计通过，确认 182 个已有项目元数据合规。
3. **查验核心代码源审查与防套壳规则**:
   - 检查文件: `/Users/chenrongwei/.gemini/antigravity/scratch/awesome-jev-projects/scripts/project-source.mjs`
   - 查验行号: L266-L289（OpenRouter 与原生实现证据检验规则）。
4. **查验已确认排除的假阳性案例**:
   - 检查文件: `/Users/chenrongwei/.gemini/antigravity/scratch/awesome-jev-projects/radar/exclusions.json`
