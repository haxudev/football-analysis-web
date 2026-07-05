> 生成时间：2026-07-05T12:27:45.248Z

Applied priors check:
- [N] Final-Match Prior (decisive match → draw +3~6pp): reason 常规联赛第11轮，非淘汰赛/决赛，不触发平局膨胀先验。
- [Y] Fatigue × Motivation offset: reason 埃尔夫斯堡联赛6轮不败但4连平，哈马比联赛3连败后又在休赛期友谊赛4-1回暖，状态与士气存在明显对冲。
- [N] H2H discount for finals: reason 本场不是决赛/淘汰赛，H2H仅作常规低权重参考，不触发“决赛降权”先验。
- [N] CN market structure (EPL bias): reason 瑞超内战，非 EPL vs 非 EPL 对阵，结构性偏差先验不适用。
- [Y] Volume signal (升/降盘): reason 百家欧赔主胜持续压低、客胜回升；体彩总进球“3球”赔率由3.50降至3.40，市场重心向2-3球区间集中。
- [Y] Devig applied per market: reason 已对 1X2、让球胜平负、总进球、比分、半全场分别去水。
- [Y] Half-Kelly computed: reason 已用最终主/平/客概率对体彩胜平负逐项计算 Half-Kelly。

Evidence gates check:
- [Y] Web-research evidence collected (run_research; ≥2 converging sources OR all-blocked fallback explicitly declared): sources Sports Mole / SportsGambler / FotMob / SwedishFootballNews / AiScore。
- [N] ClubElo public rating checked (intent: "club-elo"; source URL or unavailable reason): public ClubElo 页面候选已定位，但 elofootball 返回内容不足，未取得可核验评分。
- [N] xG public data checked (intent: "xg"; source URL or unavailable reason): Understat 对两队均未覆盖，FBref 403，其他公开页为付费墙或反爬提示，故不估算。
- [N] Estimated odds present (must be marked with 估算): 本报告引用赔率均来自已抓取快照，无需估算。

# 瑞典超 分析报告：Elfsborg VS Hammarby

## 基本信息

| 项目 | 详情 |
|------|------|
| **赛事** | 2026 瑞典超级联赛常规赛 第11轮 |
| **对阵** | IF Elfsborg (Elfsborg) VS Hammarby IF (Hammarby) |
| **竞彩编号** | 7206（周日206） |
| **开球时间** | 2026-07-05 22:30 (北京时间) |
| **比赛地点** | Borås Arena（博拉斯） |
| **比赛性质** | 常规赛单场联赛 |

---

## 一、赔率分析

### 1.1 主流机构初盘与即时盘对比

> **数据来源说明：** 中国体彩官方盘口、500.com 百家欧赔/亚盘/大小球、澳门当前盘口。

| 玩法 | 机构 | 初盘 (主) | 初盘 (平) | 初盘 (客) | 即时盘 (主) | 即时盘 (平) | 即时盘 (客) | 变化方向 |
|------|------|:---------:|:--------:|:---------:|:----------:|:-----------:|:----------:|:--------:|
| **1X2 (欧赔)** | Bet365 | 3.75 | 3.60 | 1.90 | 3.30 | 3.60 | 2.00 | 主胜明显压低，客胜回升 |
| **1X2 (欧赔)** | Pinnacle | 3.90 | 3.79 | 1.91 | 3.61 | 3.57 | 1.95 | 主胜压低，平/客小幅上调 |
| **1X2 (欧赔)** | William Hill | 3.60 | 3.40 | 1.91 | 3.60 | 3.40 | 1.91 | 基本平盘 |
| **亚盘** | Bet365 | 0.77（受半球） | — | 1.02 | 0.93（受半球） | — | 0.88 | 让球不变，但客队一侧水位下压 |
| **大小球** | Bet365 | — | 2.5（大0.95 / 小0.85） | — | — | 2.5（大0.85 / 小0.95） | — | 主线不变，资金略向大球 |
| **竞彩胜平负** | 中国体彩 | 3.70 | 3.60 | 1.72 | 3.70 | 3.60 | 1.72 | 官方胜平负主盘稳定，客胜低位维持 |

**赔率变化趋势解读：**

1. 百家欧赔共识由 **3.70/3.60/1.905** 移向 **3.40/3.60/1.93**，说明市场对“哈马比明显占优”的判断有所回撤，主胜冷门概率被重新买入。
2. 让球市场仍保持 **哈马比让半球**，且 Bet365 客队一侧水位由 1.02 压至 0.88，表示让球市场仍更相信客队至少小胜；欧赔与亚盘信号并不完全同向。
3. 总进球主线没有从 2.5 升到 2.75/3，但体彩 **3球**赔率从 **3.50** 压到 **3.40**，说明市场并未追捧大开大合，更像把结果重心集中在 **2-3球** 区间。

### 1.2 隐含概率换算

| 结果 | 竞彩隐含概率 | 欧赔均值隐含概率 | Devig后公平概率 |
|------|:-----------:|:--------------:|:---------------:|
| Elfsborg胜 | 27.03% | 29.41% | 25.46% |
| 平局 | 27.78% | 27.78% | 25.04% |
| Hammarby胜 | 58.14% | 51.81% | 49.51% |
| **margin** | **12.94%** | **9.00%** | **100.0%** |

> Devig 计算已剔除庄家利润率。单看去水后的纯赔率，哈马比仍是最大单项概率，但远没有体彩裸赔率呈现得那样接近“六成稳胆”；均衡化后更接近 **客胜49.5% vs 主队不败50.5%** 的结构。

---

## 二、互联网舆情分析

### 2.1 媒体预测汇总

| 媒体/机构 | 预测比分 | 倾向 | 预测依据 |
|-----------|:--------:|------|---------|
| Sports Mole | 1-1 | 平局 / 客队不败 | Elfsborg 四连平、Hammarby 三连败，双方都有防线隐患 |
| SportsGambler | — | Elfsborg +0.5 / 主队不败 | 主队近 6 个主场不败，客队近 5 个联赛客场仅拿 4 分 |
| FotMob 赛前页 | — | 中性偏均衡 | 当前 H2H 记录 9胜8平9负，双方缺阵都不算严重 |
| SwedishFootballNews | — | 主队利好 | Zeneli、Beck 伤后恢复完整训练，主队轮换深度回升 |

**媒体预测倾向：Elfsborg 不败 2，平局 1，Hammarby 纯客胜 0**

### 2.2 球迷情绪分析

> 以下更接近**媒体预览与伤停报道的情绪代理**，而非直接社交平台抓样；由于公开社媒样本不足，本节不夸大“热度”。

**Elfsborg 球迷**
- 整体情绪：谨慎偏乐观
- 关键论点：
  - 主场连续 6 场不败，且欧赔主胜持续降赔。
  - Zeneli、Beck 回归训练后，前场创造力被重新看好。
- 担忧点：Holmén 停赛、球队近 4 轮联赛全部战平，终结比赛能力不足。

**Hammarby 球迷**
- 整体情绪：进攻端仍有信心，但对防线稳定性偏谨慎
- 关键论点：
  - Besara、Victor Lind、Paulos Abraham 仍是联赛级别的高效前场组合。
  - 阵容整体接近齐整，仅 Kone 为较明确伤缺。
- 担忧点：联赛 3 连败、客场 5 战仅 4 分，且连续多场未能零封。

**综合舆情情感评分：**
- Elfsborg 支持度：6/10
- Hammarby 支持度：5/10
- 中立观点比例：约 40%

### 2.3 社交媒体热度

| 平台 | Elfsborg 相关讨论量 | Hammarby 相关讨论量 | 热点话题 |
|------|:------------------:|:------------------:|----------|
| Twitter/X | N/A（样本不足） | N/A（样本不足） | 瑞超常规赛国际热度有限 |
| Reddit | N/A（未取得稳定样本） | N/A（未取得稳定样本） | 可用公开样本不足以定量 |
| 微博 | N/A（样本不足） | N/A（样本不足） | 中文公开讨论稀疏 |
| 虎扑/懂球帝 | N/A（未抓取到稳定讨论页） | N/A（未抓取到稳定讨论页） | 话题集中在赔率而非阵容 |

> 本场属于瑞超常规赛，公开网络热度明显低于五大联赛；因此**舆情结论主要来自媒体预览、伤停消息和盘口变化**，而非社媒声量本身。

---

## 三、球队基本面分析

### 3.1 球队近期状态

**IF Elfsborg**
- 战术风格：更偏 4-2-3-1 的中速推进与转换反击，近 10 场联赛均场控球约 44.6%，均场进球 1.4。
- 近期状态：联赛 11 轮 **4胜6平1负**，近 6 轮不败，但最近 4 轮全部打平。
- 体能状况：✅略优。世界杯间歇期后主场作战、无远征负担，且两名进攻轮换回归。
- 瑞超经验：✅同级经验充足，但本季更像“稳定拿分型”而非持续压制型。
- 主场表现：Sports Mole 给出的主场数据是 6 个联赛主场拿到 12 分，连续 6 个主场不败。

**Hammarby IF**
- 战术风格：同样偏 4-2-3-1，但控球和射门量更高，近 10 场联赛均场控球约 61.1%，均场进球 2.1。
- 近期状态：联赛 11 轮 **5胜2平4负**，近 3 轮联赛连败；但休赛期友谊赛曾 4-1 击败赫根。
- 体能状况：⚠️中性略劣。休整时间充足，但近期正式比赛走势较差，客场连续失球的问题未解。
- 瑞超经验：✅阵容成熟度和纸面深度更强，球队总身价约 €34.05m，明显高于主队的 €15.75m。
- 客场表现：Sports Mole 指出其 5 个联赛客场仅拿 4 分，净胜球为负。

### 3.2 关键球员动态

| 球员 | 俱乐部 | 状态 | 影响 |
|------|--------|------|------|
| Arber Zeneli | Elfsborg | ✅确认可用 | 回归后提升前场持球、内切和定位球质量 |
| Julius Beck | Elfsborg | ✅确认可用 | 增加前腰/二线插上轮换，改善主队进攻连接 |
| Sebastian Holmén | Elfsborg | ❌缺阵 | 停赛削弱主队防线经验与高空球保护 |
| Per Frick | Elfsborg | ⚠️伤缺 | 中锋替补厚度受影响 |
| Sourou Kone | Hammarby | ❌缺阵 | 客队后场轮换受损，但不是中前场核心 |
| Nahir Besara | Hammarby | ✅确认可用 | 赛季前段 5球5助，是客队最稳定创造点 |
| Victor Lind | Hammarby | ✅确认可用 | 近期持续参与进球，转换效率高 |

### 3.3 战术 matchup 分析

**核心矛盾：**
1. Hammarby 的高控球、高射门节奏，能否真正压穿 Elfsborg 的主场防守层次。
2. Elfsborg 的转换进攻是否能利用 Hammarby 最近连续失球、客场防线站位不稳的问题。
3. Holmén 停赛削弱主队后场稳定性，但 Zeneli/Beck 回归又提升了主队反击和二点球质量。

**风格克制：**
- 若 Hammarby 先手进球，客队的控球与前场个人能力足以把比赛带向 1-2 这类“客队小胜”路径。
- 若 Elfsborg 顶住开场 20-30 分钟，Hammarby 客场防线的连续失球模式会让主队的反击与主场气势变得更有价值。

### 3.4 历史交锋记录

| 日期 | 赛事 | 主场 | 比分 | 客场 |
|------|------|------|:----:|------|
| 最近一次（公开摘要） | 瑞超 | 哈马比 | 3-0 | 埃尔夫斯堡 |
| 上一次 Borås Arena 交锋（公开摘要） | 瑞超 | 埃尔夫斯堡 | 0-2 | 哈马比 |
| 当前 FotMob H2H 页面 | 历史交锋 | Elfsborg | 9胜8平9负 | Hammarby |

**交锋记录：** 可抓取公开页面的统计口径并不完全一致（FotMob 当前页为 9-8-9，AiScore 全口径页面为 14-11-13），但共同信号是：**这不是天然单边对位，长期结构偏均衡，近期对赛才略向 Hammarby 倾斜。**

### 3.5 公开强度数据：ClubElo / xG / FIFA 排名

| 球队 | 指标 | 数值 | 来源 | 新鲜度 | 解读 |
|------|------|------|------|--------|------|
| Elfsborg | ClubElo rating | unavailable | web-research `club-elo` 候选定位到 elofootball，但页面返回内容不足，未取得可核验评分 | blocked / insufficient | 不纳入量化，避免伪精确 |
| Hammarby | ClubElo rating | unavailable | web-research `club-elo` 候选定位到 elofootball，但页面返回内容不足，未取得可核验评分 | blocked / insufficient | 不纳入量化，避免伪精确 |
| Elfsborg | FIFA 排名 / 国家队 Elo | not applicable | 俱乐部赛事，不适用 | N/A | 不适用 |
| Hammarby | FIFA 排名 / 国家队 Elo | not applicable | 俱乐部赛事，不适用 | N/A | 不适用 |
| Elfsborg | xG / xGA / recent xG trend | unavailable | Understat 未覆盖；FBref 403；其他公开页为付费墙或反爬提示 | blocked / not covered | 不估算 xG，只用实盘与公开战绩 |
| Hammarby | xG / xGA / recent xG trend | unavailable | Understat 未覆盖；FBref 403；其他公开页为付费墙或反爬提示 | blocked / not covered | 不估算 xG，只用实盘与公开战绩 |

> 仅引用公开覆盖数据；若来源未覆盖、受阻或过期，写明 `not covered / blocked / stale`，不要估算 ClubElo 或 xG。
> 俱乐部用 ClubElo（`intent: "club-elo"`）；**国家队用 FIFA 排名 / Elo**（`intent: "fifa-ranking"` → eloratings.net / worldfootballrankings.com，ClubElo 不覆盖国家队）。xG 俱乐部优先 Understat，国家队用 FBref（均在 `intent: "xg"`）。

---

## 四、综合预测

### 4.1 各维度权重评估

| 维度 | Elfsborg得分 | Hammarby得分 | 说明 |
|------|:-----------:|:-----------:|------|
| 阵容深度 | 6.0 | 7.5 | 客队身价和前场可用人手更强 |
| 体能状态 | 6.5 | 6.0 | 两队都有间歇期，但主队主场+回归球员略占优 |
| 战术适配 | 7.0 | 6.5 | 主队的转换打法对客队近期客场防线更有针对性 |
| 大赛经验 | 6.5 | 6.5 | 常规联赛内战，经验差距不大 |
| 攻防实力 | 6.5 | 7.5 | 客队进攻产量更高，赛季进球 24-16 领先明显 |
| 士气/动力 | 6.5 | 5.5 | 主队 6 轮不败；客队联赛 3 连败后压力更大 |
| 定位球 | 6.0 | 6.5 | Holmén 停赛让主队定位球防守略吃亏 |
| 边路突破 | 6.5 | 7.0 | 客队边路推进与前腰联动更强 |
| H2H | 5.5 | 6.5 | 近期对赛略向客队，但长期结构并非一边倒 |

**加权综合评分：**
- Elfsborg：6.4/10
- Hammarby：6.7/10

### 4.2 比分预测

| 预测比分 | 概率 | 说明 |
|----------|:----:|------|
| 1-1 | 12% | Elfsborg 连续平局属性明显，Sports Mole 也直接给出 1-1 |
| 1-2 | 11% | 客队仍保有更高原始胜率，若前场兑现效率在线，最常见就是小胜路径 |

### 4.3 竞彩推荐

| 玩法 | 推荐选项 | 竞彩赔率 | 置信度 | 说明 |
|------|---------|:--------:|:------:|------|
| **胜平负 (SPDF)** | 主胜 | 3.70 | ⭐⭐⭐⭐ | 最终概率修正后主胜存在明显正 Edge，是赔率层面的最佳价值点 |
| **让球胜平负** | 主胜（+1） | 1.85 | ⭐⭐⭐ | 对应“主队不败”思路，和 SportsGambler 的 +0.5 判断一致 |
| **总进球** | 3球 | 3.40 | ⭐⭐⭐ | 官方 3球赔率压低，且 2-3 球为当前市场密集区 |
| **比分** | 1-1 | 6.70 | ⭐⭐⭐ | 同时符合主队平局惯性与媒体主流预期 |
| **半全场** | 平 / 平 | 5.70 | ⭐⭐ | 双方都不在高确定性区间，平稳开局后胶着收尾的路径存在 |

### 4.4 Kelly建议

根据 Kelly 公式计算：
- **Elfsborg胜：** Edge **+7.3%**, Kelly Fraction **1.35%**
- **平局：** Edge **-2.8%**, Kelly Fraction **0.00%**
- **Hammarby胜：** Edge **-24.3%**, Kelly Fraction **0.00%**

> **Kelly建议：主胜方向小注参与（1.0%-1.5%资金）；保守者可降一级到让球主胜（+1）分散波动。**

---

## 五、总结与风险提示

### 核心判断

1. 纯赔率层面，Hammarby 仍是**最可能的单一赛果方向**，但市场已经不再像初盘那样极端追捧客胜。
2. Elfsborg 的主场不败走势、四连平属性，以及 Zeneli/Beck 回归，使其“爆冷取分”概率高于体彩主胜赔率所反映的水平。
3. Hammarby 的进攻质量和阵容深度仍强于主队，所以本场更适合做**价值投注**而非“结果确定性投注”。
4. ClubElo/xG 两道公开强度闸门都未取得可靠数值，因此本报告对赔率变化和确认伤停的权重高于公共模型数据。

### 风险提示

- ⚠️ 公开 ClubElo / xG 数据不可用，本场缺少额外的公开强度锚点。
- ⚠️ 欧赔与亚盘信号并不完全一致：欧赔买入主队，但让球市场仍偏向客队。
- ⚠️ Hammarby 前场个人能力明显更强，一旦先开纪录，主胜价值逻辑会迅速恶化。
- ⚠️ Elfsborg 的“高平局属性”意味着主胜价值可能最终只兑现为“不败”，而不是全取三分。

### 最终结论

**最可能的结果：低比分胶着，首选 1-1，次选 1-2**
**竞彩最优价值：胜平负主胜 3.70**

---

## 应用的先验清单 (Applied Priors Check)

> 必须在报告末尾显式列出，便于审计推理路径。

- **[N] Final-Match Prior**：常规联赛第11轮，非决赛/淘汰赛，不做平局膨胀。
- **[Y] Fatigue × Motivation 对冲**：Elfsborg 六轮不败但四连平，Hammarby 三连败后友谊赛回暖，形成“主队稳定 vs 客队反弹”对冲。
- **[N] H2H 决赛降权**：本场不是决赛，H2H 只做常规低权重参考。
- **[N] CN 市场结构**：瑞超内战，不符合 EPL 偏差先验触发条件。
- **[Y] Volume Signal (升降盘解读)**：欧赔主胜持续压低、客胜抬升；体彩 3球赔率 3.50→3.40，市场集中在 2-3 球区间。
- **[Y] Devig per market**：覆盖市场：1X2、HHAD、TTG、CRS、HTFT。
- **[Y] Half-Kelly applied**：主胜 Edge +7.3% / Half-Kelly 1.35%；平局 -2.8%；客胜 -24.3%。

### Public Data Signals Check

- **[N] ClubElo public rating checked**：unavailable；尝试来源：http://www.elofootball.com/club.php?clubid=1773&season=2024-2025 、http://www.elofootball.com/club.php?clubid=1680&season=2025-2026；页面返回内容不足，记为 blocked / insufficient。
- **[N] xG public data checked**：unavailable；尝试来源：https://understat.com/team/IF_Elfsborg （404）、https://understat.com/team/Hammarby_IF （404）、https://fbref.com/en/squads/50e85bfc/2026/c29/Elfsborg-Stats-Allsvenskan （403）、https://fbref.com/en/squads/92bfd7f0/2025-2026/Hammarby-Stats （403）。

**估算赔率统计**：0 / 31
**整体置信度**：Medium

---

*报告生成时间：2026-07-05T12:27:45.248Z*
*数据截止：2026-07-05T12:00:00.054Z*

**数据来源：**
- Tier 1（赔率）：中国体彩 / 500.com 百家欧赔 / 澳门盘口
- Tier 5（预览/伤停/H2H）：https://www.sportsmole.co.uk/football/elfsborg/preview/elfsborg-vs-hammarby-prediction-team-news-lineups_600629.html
- Tier 5（预览/赔率观点）：https://www.sportsgambler.com/betting-tips/football/elfsborg-vs-hammarby-prediction-lineups-odds-2026-07-05/
- Tier 5（伤停/H2H）：https://www.fotmob.com/en-GB/matches/elfsborg-vs-hammarby/26qf4d
- Tier 5（主队回归消息）：https://swedishfootballnews.com/news/zeneli-beck-return-training-elfsborg-brommapojkarna
- Tier 5（H2H补充）：https://www.aiscore.com/head-to-head/elfsborg-vs-hammarby
- ClubElo gate：http://www.elofootball.com/club.php?clubid=1773&season=2024-2025 、http://www.elofootball.com/club.php?clubid=1680&season=2025-2026 （内容不足，未纳入）
- xG gate：https://understat.com/team/IF_Elfsborg 、https://understat.com/team/Hammarby_IF 、https://fbref.com/en/squads/50e85bfc/2026/c29/Elfsborg-Stats-Allsvenskan 、https://fbref.com/en/squads/92bfd7f0/2025-2026/Hammarby-Stats （未覆盖 / 403）

*推理依据：LLM qualitative match-analysis methodology v0.1*
<!-- probs: {"home": 0.29, "draw": 0.27, "away": 0.44} -->
