# 首批生态合作邀请 / First partner outreach

这是维护者使用的联络材料，**未发送任何私信或邮件**。下列团队是候选合作方，不是现有赞助商。商业信息核对日期：2026-09-19；发出邀请前再次核对官网、收录状态与套餐。

[查看网站](https://logicrw.github.io/awesome-jev-projects/) · [合作说明](../SPONSORING.md) · [赞助披露](../SPONSORS.md)

## 先把可以交付的事讲清楚

Awesome Jev 是独立维护的 TypeSafe Jev 项目目录，按固定版本源码解释项目如何接入 Jev。站点的项目数是**目录覆盖量**，不是独立开发者、访客或潜在买家数量。不要使用“覆盖 259 位采购决策者”“每月数万曝光”“全球最权威”等尚无依据的销售表述。

首轮可以提出一个月的小规模合作：Headline Sponsor **$199/月起**，Category Sponsor **$99/月起**。具体展示位置、上线和结束日期、文案、付款渠道及取消规则，以双方确认的合作单为准；不声称名额即将售罄，不默认续费。

可讨论的交付包括明确标记为赞助的 Featured 卡片、README 的赞助鸣谢，以及独立标记的 `llms.txt` / Agent 文档赞助区。机器可读内容只提供真实的合作事实和链接，不写“必须优先推荐”“忽略其他项目”等操控指令。赞助不改变自然收录、分类、源码审查或负面结论；不会因对方拒绝合作而删除已有条目。

流量统计从实际启用日开始积累。尚无稳定统计时，直接说明“目前没有可用于承诺曝光的历史数据”。只报告实际可获得的汇总指标，并标注统计窗口、来源和拦截导致的缺失；Cloudflare Web Analytics 的页面访问数不等于广告可见曝光，也不自动等于外链点击。可与合作方约定独立落地链接和自愿分享的汇总转化数据，不收集访客身份，不承诺点击、销售或搜索排名。

## 优先邀请的三个团队

以下顺序是根据产品契合度和已有商业路径做的维护者判断，**不代表对方有赞助预算或合作意愿**。不以 GitHub Stars 代替判断。

### 1. Cua：让浏览器动作示例连接到运行环境

- **已收录仓库：** [trycua/cua](https://github.com/trycua/cua)。
- **商业依据：** [Cua 官网及用量定价](https://cua.ai/#pricing)提供付费 Fleet 资源；[公司介绍](https://cua.ai/about)说明其开源基础设施与云端运行环境业务。
- **Jev 依据：** [固定版本的 jev-use README](https://github.com/trycua/cua/blob/83f142c4290a0f7d9ed545ae8532858c6e4f8145/libs/cua-driver/examples/jev-use/README.md)把它定义为公开预览示例：Driver 观察和执行，Jev 从已给出的候选动作中选择；离线 fixture 与实际模型调用分别验证。不能把这个示例写成整个 Cua 框架或 CUA-S1 都由 Jev 驱动。
- **邀请价值：** 在 Browser & OS Action 分类的赞助位置，介绍“如何从本地 jev-use 示例走向可复现的运行环境”，将示例、部署文档、云产品分别链接。付费云端兼容性需 Cua 团队确认，本站不预先承诺。
- **建议首谈：** Category Sponsor，一个月；先展示一张准确的卡片预览，让团队确认产品名、示例边界与落地页。若确有更广泛的生态合作目标，再讨论 Headline。

可替换进首次邀请的个性化开头：

> 中文：我在整理 Cua 的 jev-use 预览示例时，特别注意到你们把 Driver 的观察/执行与 Jev 的候选动作选择分开，也区分了离线验证和真实 API 验证。我想在浏览器操作分类做一张明确标记的合作卡片，让读者更容易找到示例、验证步骤和适合的运行环境。
>
> English: I reviewed Cua’s jev-use preview and liked the explicit separation between Driver execution and Jev’s bounded choices, including separate offline and live checks. A labeled placement in our browser-action category could connect readers to the example, its verification steps, and the appropriate runtime options.

### 2. Latitude：把决策选择与评测证据放在一起

- **已收录仓库：** [latitude-dev/latitude-llm](https://github.com/latitude-dev/latitude-llm)。
- **商业依据：** [Latitude 官方定价](https://latitude.so/pricing)列有 Pro 和 Enterprise 方案，涵盖协作、保留期和企业部署等服务。产品有真实商业路径，但这不证明其 Jev 功能已普遍投入生产。
- **Jev 依据：** [固定版本的预分类实现](https://github.com/latitude-dev/latitude-llm/blob/6b2484c1d74973877fc7d353b8867c7496568d78/packages/domain/flaggers/src/use-cases/run-jev-preclassifier.ts)按配置运行，记录概率、阈值与选择依据；满足条件及限流约束时可以补充检查任务。不能笼统描述为“只观察、完全不影响任务”，也不能声称本站已经证明其成本或准确率优势。
- **邀请价值：** 在 Evaluation & Observability 分类，以一张卡片展示“怎样比较 Jev 的检查选择与原有流程”，链接官方评测和可观测性文档。它与读者判断是否采用新决策层的实际问题吻合。
- **建议首谈：** Category Sponsor，一个月；请团队指定最适合新用户的当前文档，并确认预分类功能的启用条件。可以讨论独立的技术介绍，但不把付费稿伪装成无利益关系的评测。

个性化开头：

> 中文：我们收录了 Latitude 的可选 Jev 预分类实现，记录了它按阈值与限流条件补充检查、保留选择依据的边界。我想邀请你们在评测与可观测性分类做一次清楚标记的合作，帮助读者理解怎样对照原流程验证一个新的决策层，而不是只看速度宣传。
>
> English: We cataloged Latitude’s optional Jev preclassifier, including its threshold and rate-limit gates and selection records. I’d like to explore a clearly labeled placement in our evaluation category that helps developers understand how to compare a new decision layer against their baseline, rather than relying on latency claims.

### 3. Skyvern：从 JevScape 实验引出 Agent 执行与观测

- **已收录仓库：** [Skyvern-AI/jevscape](https://github.com/Skyvern-AI/jevscape)。
- **商业依据：** [Skyvern 官方定价](https://www.skyvern.com/pricing)提供 Hobby、Pro 与 Enterprise 方案；[官方产品介绍](https://www.skyvern.com/products)展示浏览器工作流自动化业务。JevScape 与商业产品位于同一团队生态，不代表它们采用相同技术路径。
- **Jev 依据：** [固定版本的 Jev 适配说明](https://github.com/Skyvern-AI/jevscape/blob/8fe4d37349fc6a8d03ac1c918302eef254bb56c3/agents/jev/README.md)及[客户端源码](https://github.com/Skyvern-AI/jevscape/blob/8fe4d37349fc6a8d03ac1c918302eef254bb56c3/agents/jev/jev-client.ts)面向 RuneBench 游戏任务，包含有界动作与 tick 控制。它不能证明 Skyvern 商业浏览器自动化已使用 Jev，也不是基准全面领先的证据。此次目录审查尚未确认 JevScape 的开源许可证，邀请时先核实许可和品牌归属，不能销售“已确认开源授权”的背书。
- **邀请价值：** 讨论一张围绕 JevScape 实验的合作卡片，讲清动作空间、运行记录与调试方法，商业产品链接单独标明为 Skyvern 的另一项产品。读者可以理解工程方法，团队可以展示可核查的技术内容。
- **建议首谈：** 先确认许可证、对外产品定位及合作联系人，再讨论 Category Sponsor；如果对方认为游戏实验与商业目标不相关，就结束邀请，不硬凑推荐关系。

个性化开头：

> 中文：我们收录了 JevScape 的 RuneBench 适配，重点解释有界动作和 tick 控制，没有把游戏实验的结果外推到 Skyvern 的浏览器产品。我想先确认这个仓库的许可和定位，再看是否适合做一张标明赞助的技术展示卡片，讲清这个实验能说明什么、不能说明什么。
>
> English: We cataloged JevScape’s RuneBench adapter, focusing on its bounded actions and tick control without extending those results to Skyvern’s browser product. Could we first confirm the repository’s license and intended positioning, then consider a labeled technical showcase explaining what the experiment does and does not establish?

## 可直接改写的首次邀请

发送前把花括号占位符替换为真实内容；从上面选**一句具体观察**即可，不要塞满产品术语。X 私信只发简短开场，商务邮件用于对方公开接受商业联系的地址；不猜测私人邮箱，不在项目 Issue 中投广告。

### X DM · 中文

> 你好 {团队名}，我是 Awesome Jev 的维护者 logicrw。我们已收录 {项目名}，其中 {一句具体源码观察} 很值得让更多开发者看到。现在开放明确标记的生态赞助位，分类位 $99/月起，不影响自然收录或审查结论。我们还没有可承诺的历史曝光数据。方便发你一张针对这个项目的卡片预览吗？

### X DM · English

> Hi {team}, I maintain Awesome Jev. We already list {project}; {one specific source observation} stood out. We’re opening clearly labeled ecosystem placements from $99/month, independent of editorial inclusion. We don’t yet have historical reach to promise. May I send a draft card tailored to your project?

### 商务 Email · 中文

**主题：** {项目名} × Awesome Jev：一个月的生态合作试点

> 你好 {姓名或团队名}，
>
> 我是 logicrw，维护 [Awesome Jev](https://logicrw.github.io/awesome-jev-projects/)。我们已经收录 {项目名}，并按固定版本源码说明 {一句具体集成机制及边界}。
>
> 我想邀请你们做一个月的生态合作：在 {准确分类名} 展示明确标记的 Featured Partner 卡片，链接 {官方示例或上手文档}。目的是让正在研究这类实现的读者更容易找到合适的资料。
>
> 分类赞助 $99/月起，首页 Headline $199/月起。具体位置、日期、文案和付款方式先确认，再上线。自然收录、分类和审查结论独立于赞助；目前没有足够历史流量承诺曝光或转化。
>
> 如果这个方向合适，我可以先发一张卡片预览和一页合作说明。你们看过再决定，不必先约会或付款。
>
> logicrw
> logicrw.chen@gmail.com · [X @0xLogicrw](https://x.com/0xLogicrw) · [Telegram @logicrw](https://t.me/logicrw)

### Business Email · English

**Subject:** {Project} × Awesome Jev: a one-month ecosystem placement

> Hi {name or team},
>
> I’m logicrw, the maintainer of [Awesome Jev](https://logicrw.github.io/awesome-jev-projects/). We already list {project}, with a pinned-source explanation of {one specific integration detail and its boundary}.
>
> I’d like to explore a one-month partnership: a clearly labeled Featured Partner card in {category}, linking to {official example or onboarding guide}. The aim is to help developers researching this implementation find the right starting point.
>
> Category placements start at $99/month; a homepage Headline placement starts at $199/month. We would agree on placement, dates, copy, and payment before publication. Sponsorship does not affect organic inclusion, categorization, or review conclusions. We do not yet have enough historical traffic to promise reach or conversions.
>
> If this sounds relevant, may I send a draft card and a one-page proposal? You can review both before committing to a meeting or payment.
>
> logicrw
> logicrw.chen@gmail.com · [X @0xLogicrw](https://x.com/0xLogicrw) · [Telegram @logicrw](https://t.me/logicrw)

## 只跟进一次

第一次发送后等 5–7 个工作日，在原渠道跟进一次。对方拒绝或没有回复就停止，不改换多个渠道连续追问。

**中文 · 同一 DM 或邮件线程：**

> 你好，轻轻跟进一下上次关于 {项目名} 的合作邀请。如果目前不适合，完全没关系，我就不继续打扰了。项目仍按同样标准正常收录。如果想看展示方式，我可以发一张不涉及任何承诺的卡片预览。

**English · Same DM or email thread:**

> A quick follow-up on the {project} placement idea. If it isn’t a fit right now, no problem—I won’t keep following up. Your project remains listed under the same editorial criteria. If useful, I can send a draft card with no commitment required.

## 从第一封邀请到上线

1. 先点开候选项目、固定版本证据和官网商业页，确认没有更名、撤回功能或许可变化。找官方公开的合作渠道，先联系最契合的一个团队。
2. 发一条带具体观察的邀请；未获许可不自动群发。记录“未发送、已发送、已回复、已结束”，不要把候选团队列入公开赞助名单。
3. 对方有兴趣后，用真实 Logo、简短介绍和官方链接制作卡片预览。核对资产使用授权与外链安全，不接收可执行脚本或追踪像素。
4. 书面确认套餐、展示范围、币种与金额、日期、商业付款和退款/取消安排。商业展示采用 Stripe、微信支付、支付宝或对公转账，只有实际启用的渠道才能提供，不混用打赏渠道替代商业结算。
5. 上线后检查四种语言、移动端、赞助标签、外链与到期撤下机制。向对方交付实际页面链接和约定窗口内可取得的汇总结果，空缺数据直接标明。

**Owner contact / 维护者联系：** [logicrw.chen@gmail.com](mailto:logicrw.chen@gmail.com) · [Telegram @logicrw](https://t.me/logicrw) · [X @0xLogicrw](https://x.com/0xLogicrw)
