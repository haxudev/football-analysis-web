> 生成时间：2026-07-10T12:44:41.277Z

# 世界杯 分析报告：挪威 VS 英格兰

## 基本信息

| 项目 | 详情 |
|------|------|
| **赛事** | 2026 FIFA世界杯 淘汰赛·四分之一决赛 |
| **对阵** | 挪威 (NOR) VS 英格兰 (ENG) |
| **竞彩编号** | 6099 |
| **开球时间** | 2026-07-12 05:00 北京时间（当地 2026-07-11 17:00 迈阿密时间） |
| **比赛地点** | Hard Rock Stadium，迈阿密加登斯，美国（中立场地） |
| **比赛性质** | 单场淘汰赛（90分钟+加时+点球，胜者晋级半决赛） |

---

## 一、赔率分析

### 1.1 全天赔率变化对比（2026-07-09 12:00 → 2026-07-10 12:00 UTC，共19次快照）

> **数据来源说明：** 官方体彩胜平负(HAD)/让球胜平负(HHAD，线-1)/比分(CRS)/总进球(TTG)/半全场(HAFU) 均来自 `china-football-odds` 体彩 lottery500 频道全天快照；本场 `availability: "official"`，暂无澳门/海外交叉源(crossSource为null)，以下均为官方实际抓取赔率，无估算项。

| 玩法 | 初始快照(07-09 12:00) | 最新快照(07-10 12:00) | 变化方向 |
|------|:---------------------:|:---------------------:|:--------:|
| **1X2 (HAD)** | 3.81 / 3.50 / 1.72 | **3.56 / 3.65 / 1.74** | 主队(挪威)赔率**持续缩水**(3.81→3.56)，平局小幅走高，客队(英格兰)基本持平微升 |
| **让球胜平负 (线-1)** | 1.88 / 3.40 / 3.30 | **1.85 / 3.40 / 3.40** | 让负方(挪威+1)小幅缩水，胜方(英格兰-1)覆盖赔率走高 |
| **总进球 (TTG)** | — | 2球@3.70 / 3球@3.45 最热 | 峰值在2-3球区间 |
| **比分 (CRS)** | — | 1:2@6.30 / 0:0@14.00 | 英格兰小胜(1:2/0:1)最热门比分区间之一 |

**赔率变化趋势解读（重点）：**

1. **1X2 全天呈单向、持续的"挪威缩水"漂移**：主队赔率从3.81一路下探至3.56（隐含公平概率由23.24%升至24.87%，+1.63pp），平局赔率同步小幅走高(3.50→3.65)，客队(英格兰)赔率基本持平(1.72→1.74，公平概率50.87%，几乎无变化，仅-0.6pp)。这是一个**清晰的单边资金流向信号**，而非随机噪声——19次快照中挪威赔率单调不涨，符合"利好挪威的信息被持续消化"的形态。
2. **让球盘(线-1)方向验证一致**：挪威+1覆盖赔率从1.88缩水至1.85，与1X2走势互相印证，说明市场对挪威"守住让球盘"（即不被净胜2球以上）的信心边际增强。
3. **归因分析**：结合舆情面（见二），这一drift的时间窗口与两条报道高度吻合——(a) 挪威阵中疾病侵袭（sickness bug）风波在赛前已被主帅Solbakken安抚，预期"几乎全员可战"，利空出尽；(b) 英格兰同期爆出**三名主力伤病疑虑**（Guehi腿筋重伤大概率缺阵、Reece James腿筋伤情"touch-and-go"、Rice肠胃病疑虑）+ 后卫Quansah停赛，团队新闻面明显偏空。市场缩水挪威赔率，本质是对"英格兰阵容深度削弱 vs 挪威基本满血"这一信息差的定价修正，而非纯粹动量效应。
4. **CN market structure (CN 市场结构) 提示**：HHAD让球盘口`bettingStatus`标记为`pass`（仅可过关，不可单关：`singleAvailable: false`），而HAD单关/过关均可(`single_and_pass`)——这是中国体彩官方渠道对该让球盘口的**结构性限制**，意味着让球盘流动性/资金深度弱于1X2盘口，其赔率变化的"资金指向性"证据强度应打折看待，不宜与1X2信号等权重叠加。
5. **Volume signal (Volume Signal 升降盘解读)**：1X2连续19次快照单向变动（无一次反弹），与match 1(西班牙vs比利时)的"全天零变动=信息已充分消化"形成对比——本场是"持续渐进消化"形态，说明伤病/病情类信息是滚动式披露（分别在07-08、07-09、07-10多个时间点报道），市场随每条新消息小幅修正，尚未完全收敛。

### 1.2 隐含概率换算（1X2 / HAD，Devig）

| 结果 | 初始快照隐含概率 | 最新快照隐含概率 | Devig后公平概率(最新) |
|------|:---------------:|:---------------:|:---------------------:|
| 挪威胜 | 26.25% | 28.09% | **24.87%** |
| 平局 | 28.57% | 27.40% | **24.26%** |
| 英格兰胜 | 58.14% | 57.47% | **50.87%** |
| **margin** | **112.96%** | **112.96%** | **100.0%** |

> Devig 计算：fair_i = (1/odds_i) / Σ(1/odds_j)。体彩margin全天稳定在12.96%（未见抽水比例变化）。对比初始与最新快照的**去水前**隐含概率：挪威由26.25%→28.09%(+1.84pp)，平局由28.57%→27.40%(-1.17pp)，英格兰由58.14%→57.47%(-0.67pp)——挪威获得的增量主要来自平局与英格兰两端的边际让渡，其中来自平局端的让渡幅度略大于英格兰端，说明市场调整并非单纯"平局→挪威"或"英格兰→挪威"单一路径，而是三向再平衡。

### 1.3 让球胜平负（线-1）Devig

| 结果 | 让球盘赔率(最新) | Devig公平概率 |
|------|:---------------:|:-------------:|
| 挪威 +1 覆盖（负1球以内或平/胜） | 1.85 | 47.9% |
| 净负恰好1球（push） | 3.40 | 26.1% |
| 英格兰 -1 覆盖（净胜2球+） | 3.40 | 26.1% |

> 让球盘公平概率显示：挪威"守住+1让球"（即不输球或仅小负1球）的概率接近48%，与1X2盘口"英格兰真实获胜概率50.87%"相互印证——英格兰即便获胜，市场认为多数情形下净胜margin有限（1球左右），"大胜2球+"的概率仅26.1%，与总进球盘"2-3球"最热门、比分盘"1:2/0:1"英格兰小胜最热门高度吻合。

---

## 二、互联网舆情分析

### 2.1 最新消息与团队新闻（近72小时，相对赔率漂移窗口的变化重点）

**挪威（NOR）：**
- 挪威本届世界杯为**1998年以来首次再战世界杯**，惊喜连连——1/8决赛淘汰科特迪瓦后，1/16决赛**爆冷淘汰巴西**，创队史最佳战绩，晋级八强士气极高。（来源：https://ca.sports.yahoo.com/news/norway-xi-vs-england-confirmed-110015831.html）
- 赛前营地爆出**肠胃疾病侵袭（illness bug）**风波，一度引发担忧，但主帅Ståle Solbakken于07-10确认"几乎全员可战"（"expected to have nearly the full complement of players fit and available"），利空基本出尽。（来源：https://ftw.usatoday.com/story/sports/soccer/2026/07/08/world-cup-2026-norway-squad-players-sickness-bug-england-quarter-final/90845667007/；https://ca.sports.yahoo.com/news/norway-xi-vs-england-confirmed-110015831.html）
- 核心射手Erling Haaland为绝对核心，本届状态是挪威能走到八强的关键变量之一（来源：https://worldsoccertalk.com/world-cup/norways-updated-fifa-ranking-before-2026-world-cup-clash-with-brazil/）。

**英格兰（ENG）：**
- **三名重要球员伤病疑虑集中爆发**：Marc Guéhi（腿筋伤，"major doubt"，对阵墨西哥一役受伤）、Declan Rice（肠胃疾病，"minor doubt"，是否首发存疑）、Reece James（腿筋伤，"major doubt"，touch-and-go）。（来源：https://www.sportsmole.co.uk/football/england/injury-news/injuries-and-suspensions/james-quansah-henderson-latest-england-injury-suspension-list-vs-norway_600881.html）
- Jordan Henderson因对阵墨西哥庆祝时腕部重伤，**本届赛事报销**。（同上）
- Jarell Quansah因对阵墨西哥红牌**本场停赛**。（同上）
- BBC Sport于07-10报道Rice与Guéhi"缺席赛前训练"，被视为参赛存疑（来源：https://www.3addedminutes.com/international-football/england/england-predicted-lineup-norway-rice-guehi-doubts-8788734）。
- 另有4名球员面临黄牌停赛风险（若本场再吃牌可能缺席半决赛），主帅Tuchel需在阵容轮换与争胜之间权衡。（来源：https://uk.sports.yahoo.com/news/england-xi-vs-norway-confirmed-192458874.html）

> **相对上一版本的变化（重点）：** 与07-08的报道相比，07-10最新消息显示挪威"病情基本控制、预期满血"，而英格兰的伤病名单不降反增（新增Rice肠胃疾病疑虑、Reece James伤情仍未解决），两队舆情走势出现**方向性分化**——这与赔率盘口"挪威赔率持续缩水"的时间窗口高度吻合，形成舆情与盘口的交叉印证。

### 2.2 球迷/媒体情绪分析

- 英语媒体（Yahoo Sports、Sportsmole、3AddedMinutes、BBC相关引用）普遍将本场定性为英格兰的"阵容管理危机"（selection dilemma），关注点集中在Rice/Guéhi能否首发，而非战术层面的比赛前瞻——反映舆论对英格兰阵容深度的担忧情绪上升。
- 挪威一方的媒体叙事则聚焦"奇迹之旅"（surprise package）与"病情有惊无险"，整体情绪偏乐观、轻装上阵。
- 两支球队的舆情情绪出现**"英格兰承压、挪威轻松"**的不对称态势，与赔率盘口的挪威缩水方向一致。

### 2.3 预计首发与阵型

- 英格兰：Tuchel可能在边路人选（Anthony Gordon左路、Bukayo Saka右路）上保持稳定，但中卫/后腰位置因Guéhi、Rice、James三人伤情存在多套备选方案，实际首发需赛前最终训练确认。（来源：https://uk.sports.yahoo.com/news/england-xi-vs-norway-confirmed-192458874.html）
- 挪威：主帅Solbakken预期维持既定阵容框架，Haaland领衔锋线，整体变化不大。（来源：https://ca.sports.yahoo.com/news/norway-xi-vs-england-confirmed-110015831.html）

---

## 三、球队基本面分析

### 3.1 球队近期状态

- **挪威**：小组赛出线后，1/8决赛淘汰科特迪瓦，1/16决赛**爆冷淘汰巴西**——本届赛事目前2场淘汰赛全部取胜强队/传统劲旅，状态与士气均处于队史巅峰期，且为48年来首次晋级世界杯八强（历史最佳）。
- **英格兰**：小组赛出线，此前淘汰赛阶段战胜墨西哥（该场产生红牌+腕伤两项减员代价），整体晋级路径顺利但阵容"消耗战"代价显著——本场是过去三场中伤病/停赛因素最集中爆发的一场。

### 3.2 关键球员动态

| 球队 | 球员 | 状态 | 影响 |
|------|------|------|------|
| 挪威 | Erling Haaland | 健康，核心射手 | 挪威锋线唯一稳定输出点 |
| 挪威 | 阵中疾病侵袭球员(未具名) | "几乎全员可战"(07-10最新表态) | 利空基本消化 |
| 英格兰 | Marc Guéhi | 腿筋伤，major doubt | 中卫位置存疑，可能影响防线稳定性 |
| 英格兰 | Declan Rice | 肠胃疾病，minor doubt | 后腰组织核心是否首发存疑 |
| 英格兰 | Reece James | 腿筋伤，touch-and-go | 右后卫位置存疑 |
| 英格兰 | Jordan Henderson | 腕伤，本届报销 | 中场深度进一步削弱 |
| 英格兰 | Jarell Quansah | 红牌停赛 | 本场直接缺阵 |

### 3.3 战术 matchup 分析

- 英格兰整体实力、阵容深度、大赛经验均显著强于挪威，但本场若Guéhi/Rice/James三人中有两人以上缺阵，后防/后腰结构将被迫调整，可能给挪威由守转攻的反击空间创造更多机会。
- 挪威擅长防守反击+定位球+Haaland个人爆点的效率型打法，此前淘汰巴西正是依靠高效防守与关键时刻的把握能力，与英格兰若阵容不整时的攻防转换速度形成对抗焦点。

### 3.4 历史交锋记录

| 数据源 | 交锋场次 | 英格兰胜 | 平局 | 挪威胜 |
|--------|:--------:|:--------:|:----:|:------:|
| sportsmole.co.uk | 12 | 7 | 3 | 2 |
| myfootballfacts.com | 11(1937年以来) | 6 | 3 | 2 |
| fbref.com | 6(部分赛事覆盖) | 3 | 1 | 2 |

> 双方历史交锋英格兰占明显优势（约6-7胜 vs 挪威2胜），且**本场为两队首次在大赛正赛交锋**（此前仅友谊赛与预选赛）。**H2H discount for finals (H2H 决赛降权)**：鉴于淘汰赛情境下阵容/时代/状态与历史交锋样本存在巨大差异，且本场是两队首次大赛交锋（无同背景大赛H2H参照），历史交锋权重进一步下调至背景参考级别（≤5%），不作为独立预测变量。

### 3.5 公开强度数据：ClubElo / xG / FIFA 排名

| 球队 | 指标 | 数值 | 来源 | 新鲜度 | 解读 |
|------|------|------|------|--------|------|
| 挪威 | ClubElo rating | not covered（国家队非俱乐部，ClubElo 不覆盖国家队） | 尝试来源：https://clubelo.com （仅覆盖俱乐部，无国家队条目） | — | 改用FIFA排名/国家队Elo替代 |
| 英格兰 | ClubElo rating | not covered（国家队非俱乐部，ClubElo 不覆盖国家队） | 尝试来源：https://clubelo.com （仅覆盖俱乐部，无国家队条目） | — | 同上 |
| 挪威 | FIFA 排名 / 国家队 Elo | FIFA世界排名约第21位（约1617.67分，07-05淘汰巴西前统计，晋级八强后预计进一步上升） | https://worldsoccertalk.com/world-cup/norways-updated-fifa-ranking-before-2026-world-cup-clash-with-brazil/ | 2026-07-05 | 相对英格兰存在显著等级差距，但近期战绩(淘汰科特迪瓦/巴西)已体现"超预期"表现 |
| 英格兰 | FIFA 排名 / 国家队 Elo | FIFA世界排名第4位（约1827-1871分）；eloratings.net Elo评级第4位，2076分 | https://www.fifa.com/en/world-rankings ；https://eloratings.net/2026 | 2026年6-7月更新 | 传统强队，排名/Elo均显著领先挪威 |
| 挪威 | xG / xGA / recent xG trend | not covered（blocked，Understat返回404、FBref返回403 blocked，国家队赛事覆盖有限） | 尝试来源：https://understat.com/team/ （404 not-found）、https://fbref.com/en/search/search.fcgi （403 blocked） | — | 无法获取，不做估算 |
| 英格兰 | xG / xGA / recent xG trend | not covered（blocked，同上） | 尝试来源：https://understat.com/team/ （404 not-found）、https://fbref.com/en/search/search.fcgi （403 blocked） | — | 无法获取，不做估算 |

> FIFA排名/Elo 差距（英格兰#4 vs 挪威约#21）与赔率市场公平概率（英格兰50.87% vs 挪威24.87%）方向一致——市场仍认为英格兰真实实力显著占优，本场赔率漂移仅是"伤病信息差"引发的边际修正，而非对底层实力差距的重新定价。xG 数据因公开源未覆盖国家队/被阻而缺失，未做估算，仅记录为已知信息缺口。

> **场地/天气（`intent: "venue-weather"`）：** Hard Rock Stadium（迈阿密加登斯）赛前预报高温高湿，AccuWeather预报最高约94°F（RealFeel约109°F），并有雷阵雨概率；SatMeteo同步预报"Thunderstorm"、体感36°C。高温高湿环境可能加剧双方体能消耗，对英格兰阵容本已吃紧的深度构成额外压力，也可能影响比赛节奏（更多定位球/慢节奏）。来源：https://www.accuweather.com/en/us/hard-rock-stadium/33056/weather-tomorrow/53559_poi；https://satmeteo.com/stadium/us/3128-hard-rock-stadium。

---

## 四、综合预测

### 4.1 各维度权重评估

| 维度 | 挪威得分 | 英格兰得分 | 说明 |
|------|:--------:|:----------:|------|
| 阵容深度 | 6.5 | 6.5 | 英格兰名义深度更厚，但本场因3名伤病疑虑实际可用深度被削弱，暂打平 |
| 体能状态 | 7.0 | 6.5 | 高温高湿环境+英格兰阵容伤病消耗，体能风险略高于挪威 |
| 战术适配 | 7.0 | 8.0 | 英格兰整体战术体系更成熟，但阵容变动可能削弱执行力 |
| 大赛经验 | 6.0 | 8.5 | 英格兰传统强队大赛经验显著占优 |
| 攻防实力 | 6.5 | 8.0 | FIFA排名/Elo差距明显支持英格兰 |
| 士气/动力 | 8.5 | 7.5 | 挪威"历史性突破"叙事带来的士气加成更显著 |
| 定位球 | 7.0 | 7.0 | 暂无显著公开差异信息 |
| 关键球员状态 | 8.0 | 6.0 | Haaland健康 vs 英格兰3人伤病疑虑 |
| H2H | 6.0 | 7.0 | 决赛/淘汰赛降权（权重≤5%），历史英格兰占优但情境参考有限 |

**加权综合评分：**
- 挪威：6.9/10
- 英格兰：7.3/10

### 4.2 比分预测

| 预测比分 | 概率 | 说明 |
|----------|:----:|------|
| 1:2 (英格兰胜) | ~11.3% | 官方比分盘最热门之一，符合"英格兰小胜"主线 |
| 0:1 (英格兰胜) | ~7.8% | 零封小胜情形 |
| 1:1 (平局) | ~9.8% | 平局中最热门比分 |
| 0:0 (平局，进120强制加时) | ~5.1% | 淘汰赛特有情形 |

### 4.3 竞彩推荐

| 玩法 | 推荐选项 | 竞彩赔率 | 置信度 | 说明 |
|------|---------|:--------:|:------:|------|
| **胜平负 (SPDF)** | 平局（价值参与，非主推） | 3.65 | ⭐⭐⭐ | 应用Final-Match Prior后平局公平概率由24.26%上调至~28.3%，对应小幅正Edge |
| **让球胜平负** | 观望/不参与 | — | ❌ | 该盘口为CN市场结构限制的pass-only盘口，流动性/信号强度弱于1X2，且Devig公平概率与市场高度收敛 |
| **总进球** | 观望，倾向2-3球区间 | — | ⭐⭐ | 与官方盘口分布一致，无额外Edge来源 |
| **比分** | 1:2 / 0:1 (英格兰小胜) 娱乐参考 | — | ⭐⭐ | 高赔高方差，仅供参考不建议重仓 |

### 4.4 Kelly建议

根据 Kelly 公式计算（模型概率 = Devig公平概率 + Final-Match Prior 调整后）：
- **挪威胜：** 模型概率23.6% vs 隐含概率28.09%（赔率3.56），Edge = 0.236×3.56−1 = **-16.0%**（负值，不参与）
- **平局：** 模型概率28.3% vs 隐含概率27.40%（赔率3.65），Edge = 0.283×3.65−1 = **+3.3%**，Kelly f* = (2.65×0.283−0.717)/2.65 = 0.83%，**Half-Kelly = 0.42%**
- **英格兰胜：** 模型概率48.2% vs 隐含概率57.47%（赔率1.74），Edge = 0.482×1.74−1 = **-16.1%**（负值，不参与）

> **Kelly建议：仅平局方向存在小幅正Edge（+3.3%，⭐⭐⭐），建议以约 0.3-0.4% 半凯利仓位轻度参与；主胜/客胜/让球/总进球方向均无独立信息支撑正Edge，建议观望。Edge幅度小于match 1(西班牙vs比利时)，因本场底层实力差距(FIFA #4 vs #21)更大，Final-Match Prior的平局加成被更大的基础概率差部分抵消。**

---

## 五、总结与风险提示

### 核心判断

1. 英格兰在FIFA排名/Elo（#4 vs 约#21）、大赛经验、整体阵容深度等底层实力维度明显占优，市场赔率公平概率（英格兰50.87% vs 挪威24.87%）与此一致。
2. 但本场赔率呈现清晰、持续的"挪威缩水"单边漂移（挪威公平概率+1.63pp），归因于舆情面的方向性分化——挪威"病情基本控制、预期满血"，英格兰则新增Rice肠胃疾病疑虑+Guéhi/James腿筋伤情未解决+Quansah停赛，阵容深度实际被削弱。
3. Final-Match Prior（单场淘汰赛，八强）触发，平局公平概率由24.26%上调至约28.3%，对应竞彩赔率(3.65)产生+3.3%的小幅正Edge，是本场唯一具备量化价值的方向，但Edge幅度弱于match 1，因底层实力差距更大。
4. H2H历史交锋英格兰占优（6-7胜 vs 挪威2胜），但因属两队首次大赛正赛交锋+淘汰赛情境降权，仅作为背景参考。

### 风险提示

- ⚠️ 英格兰Guéhi/Rice/James三人伤情最终是否可以首发，赛前仍有不确定性，若三人均可正常出场，本场"英格兰阵容削弱"叙事将部分证伪，赔率有回调可能。
- ⚠️ 高温高湿天气（RealFeel约109°F）+雷阵雨概率，存在因天气原因导致比赛节奏改变或临场中断的可能性，属场外不可控变量。
- ⚠️ 淘汰赛加时赛/点球大战存在固有随机性，90分钟1X2市场的"公平概率"无法完全覆盖点球阶段的额外不确定性。
- ⚠️ 挪威本届赛事的"爆冷淘汰巴西"样本量极小（2场淘汰赛），其真实实力是否被FIFA排名(约#21)低估存在争议，公开数据(xG/ClubElo)缺失导致无法进一步验证。
- ⚠️ xG公开数据（Understat/FBref）均未覆盖或被阻，本场"攻防实力"判断更多依赖排名与战绩描述性数据，存在信息不完整的局限。
- ⚠️ HHAD让球盘口为CN市场结构下的pass-only品种，其价格信号强度弱于1X2，不宜单独作为方向性依据。

### 最终结论

**最可能的结果：英格兰小胜（1:2 或 0:1），晋级四强**
**竞彩最优价值：胜平负-平局 (3.65)，Final-Match Prior 支撑下轻仓半凯利参与（约0.3-0.4%仓位）**

---

## 应用的先验清单 (Applied Priors Check)

- **[Y] Final-Match Prior**：本场为2026世界杯八强单场淘汰赛（决胜负，非两回合），触发"Continental KO single-leg"档位，平局+4pp（24.26%→28.3%），home/away按原比例(49.0%/51.0%)分摊扣减
- **[Y] Fatigue × Motivation 对冲**：英格兰因高温高湿+阵容伤病消耗，体能风险略高于挪威(7.0 vs 6.5)；挪威"历史性突破"叙事带来的士气加成更显著(8.5 vs 7.5)，两项部分抵消但未完全对冲，净效应轻微利好挪威表现稳定性
- **[Y] H2H discount for finals (H2H 决赛降权)**：单场淘汰赛+两队首次大赛正赛交锋情境，历史交锋(约6-7胜 vs 2胜)权重下调至≤5%（评分表中列示6.0/7.0但整体加权占比极低）
- **[N] CN market structure (CN 市场结构)**：本场双方均为国家队，无英超球队参与，该先验本身不直接触发；但注意到HHAD让球盘口存在CN market structure层面的pass-only流动性限制（见1.1第4点），已在盘口解读中单独说明
- **[Y] Volume signal (Volume Signal 升降盘解读)**：19次快照呈现1X2持续单向漂移（挪威赔率单调缩水），解读为"伤病/病情类信息滚动式披露、市场渐进消化"，而非一次性利好/利空冲击
- **[Y] Devig per market**：覆盖市场：1X2(HAD)、让球胜平负(HHAD)，均使用官方体彩赔率完成fair_prob = (1/odds_i)/Σ(1/odds_j)计算
- **[Y] Half-Kelly applied**：Edge值汇总——主胜-16.0%(不参与)、平局+3.3%(半凯利0.42%⭐⭐⭐)、客胜-16.1%(不参与)

**估算赔率统计**：0 / 全部（本场所有赔率均为实际抓取，无估算项）
**整体置信度**：Medium-High（赔率为官方单源[无crossSource]但全天19次快照趋势清晰一致；舆情证据≥2独立信源相互印证[Yahoo Sports/Sportsmole/3AddedMinutes/USAToday]；ClubElo/xG因国家队公开覆盖限制缺失，已如实标注；FIFA排名数据存在1-2周新鲜度延迟）

### Public Data Signals Check

- **[Y] ClubElo public rating checked**：国家队非俱乐部，ClubElo不覆盖，改用FIFA排名/Elo（worldsoccertalk.com；fifa.com/en/world-rankings；eloratings.net/2026），英格兰#4 vs 挪威约#21
- **[Y] xG public data checked**：understat.com返回404，fbref.com返回403 blocked，均未覆盖/被阻，未做估算，明确标注"not covered / blocked"

---

*报告生成时间：2026-07-10T12:44:41.277Z*
*数据截止：2026-07-10T12:00:00Z（体彩最新快照）*
*数据来源：见下方"数据来源"分层日志*
*推理依据：LLM qualitative match-analysis methodology v0.1*

## 数据来源

- **赔率（Tier: odds-official）**：中国体彩 lottery500（`china-football-odds` MCP，2026-07-09 12:00 至 2026-07-10 12:00 UTC，共19次快照），无crossSource(该场无澳门/海外交叉数据)
- **新闻/阵容/伤停（Tier: squad-data/news）**：
  - https://ca.sports.yahoo.com/news/norway-xi-vs-england-confirmed-110015831.html
  - https://ftw.usatoday.com/story/sports/soccer/2026/07/08/world-cup-2026-norway-squad-players-sickness-bug-england-quarter-final/90845667007/
  - https://www.sportsmole.co.uk/football/england/injury-news/injuries-and-suspensions/james-quansah-henderson-latest-england-injury-suspension-list-vs-norway_600881.html
  - https://uk.sports.yahoo.com/news/england-xi-vs-norway-confirmed-192458874.html
  - https://www.3addedminutes.com/international-football/england/england-predicted-lineup-norway-rice-guehi-doubts-8788734
- **历史交锋（Tier: h2h）**：
  - https://www.myfootballfacts.com/world-football/england/england-national-team/england-v-norway/
  - https://www.sportsmole.co.uk/football/england/world-cup-2026/head-to-head/norway-vs-england-head-to-head-record-and-past-meetings_600943.html
  - https://fbref.com/en/stathead/matchup/teams/5849ebe1/1ec54f37/England-vs-Norway-History
- **FIFA排名/国家队Elo（Tier: fifa-ranking）**：
  - https://worldsoccertalk.com/world-cup/norways-updated-fifa-ranking-before-2026-world-cup-clash-with-brazil/
  - https://www.fifa.com/en/world-rankings
  - https://eloratings.net/2026
- **xG（Tier: xg-data，未覆盖/被阻）**：understat.com（404）、fbref.com（403 blocked）——未采纳，明确标注不可用
- **场地天气（Tier: venue-weather）**：
  - https://www.accuweather.com/en/us/hard-rock-stadium/33056/weather-tomorrow/53559_poi
  - https://satmeteo.com/stadium/us/3128-hard-rock-stadium

<!-- probs: {"home": 0.236, "draw": 0.283, "away": 0.482} -->
