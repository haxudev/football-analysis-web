> 生成时间：2026-07-11T12:17:28.839Z
# 瑞典超级联赛 分析报告：哈马比 VS 卡尔马

## 基本信息

| 项目 | 详情 |
|------|------|
| **赛事** | 2026赛季 瑞典超级联赛（常规赛） |
| **对阵** | Hammarby IF（哈马比） VS Kalmar FF（卡尔马） |
| **竞彩编号** | 周日205 / 7205 |
| **开球时间** | 2026-07-12 20:00（北京时间） |
| **比赛地点** | 3Arena，斯德哥尔摩 |
| **比赛性质** | 常规联赛单场（90分钟，非中立场） |

---

## 一、赔率分析

### 1.1 主流机构初盘与即时盘对比

> **数据来源说明：** 中国体彩官方赔率、500.com 百家欧赔/亚盘/大小球、澳门样本盘，以及 lottery500 历史快照。

| 玩法 | 机构 | 初盘 (主/大) | 初盘 (平/线) | 初盘 (客/小) | 即时盘 (主/大) | 即时盘 (平/线) | 即时盘 (客/小) | 变化方向 |
|------|------|:---------:|:--------:|:---------:|:----------:|:-----------:|:----------:|:--------:|
| **1X2 (欧赔)** | Bet365 | 1.40 | 5.00 | 6.50 | 1.35 | 4.75 | 7.00 | 主胜、平局压低；客胜走高 |
| **1X2 (欧赔)** | 澳门 | 1.33 | 4.75 | 6.10 | 1.33 | 4.75 | 6.10 | 平盘 |
| **1X2 (欧赔)** | William Hill | 1.40 | 4.80 | 6.50 | 1.40 | 4.50 | 6.50 | 仅平局压低 |
| **亚盘** | Bet365 | 0.80 | -1.25 | 1.00 | 0.85 | -1.25 | 0.95 | 盘口不变，主队赢两球信心略降 |
| **大小球** | Bet365 | 0.85 | 3.0 | 0.95 | 0.97 | 3.0 | 0.82 | 主线不动，小球一侧走热 |
| **竞彩胜平负** | 中国体彩 | — | — | — | 1.30 | 4.85 | 6.50 | 04:00-12:00 官方快照未变 |

**赔率变化趋势解读：**

1. **官方体彩基线稳定。** `get_odds_timeline` 显示 2026-07-11 04:00 至 12:00 的 lottery500 官方 `had/hhad/jqs/bf/bqc` 快照完全未动，因此当前体彩价可视为本报告的官方基线，而非短时资金冲击后的新平衡。
2. **欧赔共识对平局略有补价。** 百家欧赔中位数从 `1.385 / 4.80 / 6.50` 变到 `1.385 / 4.75 / 6.50`，主胜框架没被推翻，但平局价格被压低，说明市场承认哈马比近况起伏后，90 分钟内被拖平的风险在上升。
3. **让球盘不再继续加深。** 主让 `-1.25` 没有进一步走到 `-1.5`，且 bet365 主队水位从 `0.80` 升到 `0.85`；这更像“看好哈马比赢球，但不敢重押两球起步”。
4. **总进球从极端大球预期回到 3 球主线。** 澳门开盘可视作 `3/3.25` 区间、现回到 `3.0`，bet365 3 球位上小球水位走低，市场并非否认有球，而是对“无脑追大”的热度有所降温。

### 1.2 隐含概率换算

| 结果 | 竞彩隐含概率 | 欧赔均值隐含概率 | Devig后公平概率 |
|------|:-----------:|:--------------:|:---------------:|
| 哈马比胜 | 76.92% | 72.20% | 67.29% |
| 平局 | 20.62% | 21.05% | 18.82% |
| 卡尔马胜 | 15.38% | 15.38% | 13.89% |
| **margin** | **12.93%** | **8.64%** | **100.0%** |

> Devig 计算已剔除庄家利润率。基线市场仍明确偏向主胜，但体彩与欧赔的去水后均值已经把平局抬到接近 19%，说明“哈马比主场更强”与“哈马比近期不够稳”两种叙事在市场里同时存在。
>
> **其余市场 Devig（显式列出）：**
> - **让球胜平负（哈马比 -1）**：主 45.41% / 平 24.06% / 客 30.53%
> - **总进球**：3球 22.46%（最高），2球 18.54%，4球 18.54%，5球 12.27%
> - **比分**：2-1 10.13%（最高），2-0 9.46%，1-0 7.88%，3-0 7.88%，1-1 7.88%
> - **半全场**：胜/胜 44.32%（最高），平/胜 19.95%，平/平 9.39%

---

## 二、互联网舆情分析

### 2.1 媒体预测汇总

| 媒体/机构 | 预测比分 | 倾向 | 预测依据 |
|-----------|:--------:|------|---------|
| Sports Mole | 2-2 | 平局 | 哈马比刚止住连败但防线不稳；卡尔马客场差，但近一场 3-0 带来反弹预期 |
| SportsGambler | — | BTTS / 哈马比不稳中占优 | 哈马比近 10 场联赛均值 2.3 球、控球 60.1%；卡尔马近 10 场均值 1.4 球，且五连客败但仍有进球点 |
| FotMob 赛前页 | — | 主队优势、但非碾压 | 列出伤停与 H2H：哈马比 8胜、卡尔马 5胜、11平；不可用球员分别为 Sourou Kone / Malcolm Stolt |

**媒体预测倾向：哈马比 1，平局 1，卡尔马 0（另有 1 条偏向“双方进球”的开放比赛叙事）**

### 2.2 球迷情绪分析

> **说明：** 本场未抓到可审计的 X/Reddit/微博原帖样本；以下仅基于赛前预览页与聚合页中可见的主流叙事，不把它当作直接社媒舆情。

**哈马比 球迷/媒体代用叙事**
- 整体情绪：谨慎偏乐观
- 关键论点：
  - 主场长期输出仍强，市场和媒体都承认其上限高于卡尔马。
  - Abraham、Besara、Lind 这条进攻线仍被视为最稳定的赢球抓手。
- 担忧点：近期联赛曾遭三连败，且边后卫位置有伤情扰动，领先后能否控住节奏是疑问。

**卡尔马 球迷/媒体代用叙事**
- 整体情绪：防守反击式期待
- 关键论点：
  - 3-0 奥尔格里特让球队重新获得一些士气。
  - 若比赛进入对攻或哈马比防线继续松动，卡尔马并非完全没机会偷到分数。
- 担忧点：五连客败是最硬的负面标签，Stolt 缺阵也削弱了前场厚度。

**综合舆情情感评分：**
- 哈马比 支持度：N/A（缺直接社媒样本）
- 卡尔马 支持度：N/A（缺直接社媒样本）
- 中立观点比例：偏高；公开预览更像“主队更强，但平局与双方进球不能忽视”

### 2.3 社交媒体热度

| 平台 | 哈马比 相关讨论量 | 卡尔马 相关讨论量 | 热点话题 |
|------|:------------------:|:------------------:|----------|
| Twitter/X | 未审计 | 未审计 | 无可核验样本 |
| Reddit | blocked / 未审计 | blocked / 未审计 | 无可核验样本 |
| 微博 | 未检索 | 未检索 | 无可核验样本 |
| 虎扑/懂球帝 | 未检索 | 未检索 | 无可核验样本 |

> **中国市场特点：** 本场为瑞典联赛，既不属于英超，也不存在中国竞彩常见的 EPL 流量偏置场景；因此“CN market-structure prior”在本场不触发。

---

## 三、球队基本面分析

### 3.1 球队近期状态

**Hammarby IF**
- 战术风格：更偏 4-2-3-1 的控球/压迫框架，SportsGambler 给出的近 10 场联赛控球均值为 60.1%。
- 近期状态：Sports Mole 指出其 7 月 5 日 2-1 击败 Elfsborg，结束此前 3 场联赛连败；但最近 5 场仍丢了 9 球，防线并不稳。
- 体能状况：⚠️中性偏弱（Skoglund 上轮伤退，边路轮换受影响）
- 联赛经验：✅优势（主场上限与阵容深度仍明显高于客队）
- 主场表现：Sports Mole 提到其此前 5 个联赛主场取得 4胜1平，直到最近一次主场 1-2 负于 AIK 才被打断。

**Kalmar FF**
- 战术风格：更依赖反击、直塞和边路推进，Sports Mole 预估前场为 Magashy + Olusanya 的速度型组合。
- 近期状态：7 月 5 日 3-0 击败 Örgryte，但联赛客场已经五连败；状态是“主场能抢分、客场掉速”。
- 体能状况：⚠️略劣（客场连续受压，且 Stolt 缺阵减少锋线轮换）
- 联赛经验：⚠️一般（保级区边缘球队，更依赖执行力而非控制力）
- 客场表现：SportsGambler 给出其近 10 场客战均失 2.2 球、均进 0.8 球，客场脆弱性明显。

### 3.2 关键球员动态

| 球员 | 俱乐部 | 状态 | 影响 |
|------|--------|------|------|
| Hampus Skoglund | 哈马比 | ⚠️待定/大概率缺席 | 上轮伤退，若缺阵则右路推进和回追速度受损 |
| Sourou Kone | 哈马比 | ❌缺阵 | FotMob 赛前页列为伤缺，削弱防线轮换深度 |
| Nahir Besara | 哈马比 | ✅可出战 | 仍是前腰枢纽，直接决定 Abraham/Lind 的吃饼效率 |
| Paulos Abraham | 哈马比 | ✅可出战 | Sports Mole 预期其继续担任箭头，联赛进球威胁稳定 |
| Malcolm Stolt | 卡尔马 | ❌缺阵 | Sports Mole 与 FotMob 均指向其本场缺席，卡尔马中锋支点受损 |
| Charlie Rosenqvist / Abdussalam Magashy | 卡尔马 | ✅可出战 | 反击端仍有速度与二点包抄能力，是卡尔马偷分关键 |

### 3.3 战术 matchup 分析

**核心矛盾：**
1. 哈马比的主场控球压制能否在防守转换时不被卡尔马打到身后。
2. 卡尔马少了 Stolt 之后，中路支点减弱，是否只能依赖边路快打与二次进攻。
3. 哈马比若只能维持 `-1.25` 让球而非继续加深，让平/平局的生存空间会比纯主胜叙事更大。

**风格克制：**
- 哈马比进攻质量高于卡尔马，但近期连续失球说明其并不具备“锁死弱队”的稳定性。
- 卡尔马客场防线脆，但若哈马比边后卫轮换受伤情影响，卡尔马的反击不至于完全失真。

### 3.4 历史交锋记录

| 日期 | 赛事 | 主场 | 比分 | 客场 |
|------|------|------|:----:|------|
| 2025-03-03 | 瑞典杯 | 哈马比 | 2-1 | 卡尔马 |
| 2024-08-04 | 瑞典超 | 卡尔马 | 1-4 | 哈马比 |
| 2024-03-31 | 瑞典超 | 哈马比 | 3-1 | 卡尔马 |
| 2023-08-20 | 瑞典超 | 卡尔马 | 0-0 | 哈马比 |
| 2023-07-16 | 瑞典超 | 哈马比 | 3-1 | 卡尔马 |

**交锋记录：** 近 5 次交手哈马比 4胜1平不败；若只看更长样本，FotMob 给出双方总体为哈马比 8胜、卡尔马 5胜、11平，AiScore 更长历史则显示卡尔马总盘面并不绝对吃亏，但最近周期明显是哈马比占优。

> **H2H 先验说明：** 本场不是决赛/淘汰赛，**不触发** “H2H discount for finals”；交锋仍可正常进入基本面，但不会压过即时状态与赔率信号。

### 3.5 公开强度数据：ClubElo / xG / FIFA 排名

| 球队 | 指标 | 数值 | 来源 | 新鲜度 | 解读 |
|------|------|------|------|--------|------|
| 哈马比 | ClubElo rating | not covered / blocked | `club-elo` 意图已检查；公开 API/页面未返回可用俱乐部评分 | 当日检查 | 不估算，不能把其他评级替代为 ClubElo |
| 卡尔马 | ClubElo rating | not covered / blocked | `club-elo` 意图已检查；公开 API/页面未返回可用俱乐部评分 | 当日检查 | 同上 |
| 哈马比 | FIFA 排名 / 国家队 Elo | N/A | 俱乐部赛事，不适用 | — | 不适用 |
| 卡尔马 | FIFA 排名 / 国家队 Elo | N/A | 俱乐部赛事，不适用 | — | 不适用 |
| 哈马比 | xG / xGA / recent xG trend | not covered / blocked / teaser-only | Understat 404，FBref 403；公开聚合页仅给到入口或提示，未取到可审计 xG 数值 | 当日检查 | 因缺可核验数值，不把 xG 作为本场定量加分项 |
| 卡尔马 | xG / xGA / recent xG trend | not covered / blocked / teaser-only | Understat 404，FBref 403；公开聚合页未取到可审计 xG 数值 | 当日检查 | 同上 |

> 仅引用公开覆盖数据；本场 ClubElo/xG 证据门未过，因此概率判断主要依靠真实赔率、伤停、近期状态和盘口变化，而不是伪造强度数字。

---

## 四、综合预测

### 4.1 各维度权重评估

| 维度 | 哈马比得分 | 卡尔马得分 | 说明 |
|------|:-----------:|:-----------:|------|
| 阵容深度 | 7.5 | 5.5 | 主队板凳和前场创造力都更好 |
| 体能状态 | 6.0 | 5.5 | 两队都无显著赛程红灯，但主队有边后卫伤情，客队有连续客场消耗 |
| 战术适配 | 6.5 | 6.0 | 哈马比能控场，卡尔马有反击抓错位空间 |
| 大赛经验 | 6.5 | 6.0 | 常规联赛经验差异不大，主场处理球更成熟 |
| 攻防实力 | 7.0 | 5.5 | 主队上限明显高，但失球稳定性一般 |
| 士气/动力 | 6.5 | 6.5 | 哈马比争欧战位，卡尔马也有保级抢分动力，基本对冲 |
| 定位球 | 6.0 | 5.5 | 主队更可能通过持续压迫换来定位球收益 |
| 边路突破 | 7.0 | 5.5 | 哈马比边路更强，但 Skoglund 伤情略削弱这一项 |
| H2H | 6.5 | 4.5 | 近 5 次 4胜1平，属正常参考权重（非决赛，无降权） |

**加权综合评分：**
- 哈马比：6.7/10
- 卡尔马：5.6/10

### 4.2 比分预测

| 预测比分 | 概率 | 说明 |
|----------|:----:|------|
| 2-1 | 18% | 与官方比分盘最高项一致，兼顾主场优势与 BTTS 叙事 |
| 1-1 | 15% | 欧赔平局压低、哈马比近况起伏、卡尔马反击仍有得分面 |
| 2-0 | 14% | 若卡尔马前场终结因 Stolt 缺阵明显下滑，主队仍可能干净拿下 |

### 4.3 竞彩推荐

| 玩法 | 推荐选项 | 竞彩赔率 | 置信度 | 说明 |
|------|---------|:--------:|:------:|------|
| **胜平负 (SPDF)** | **平局** | **4.85** | ⭐⭐⭐⭐ | 主胜仍是最大概率结果，但价格被压得过低；平局在欧赔收缩、主队不稳和卡尔马保守抢分框架下更有赔率价值 |
| **让球胜平负** | 让平（哈马比 -1） | 3.68 | ⭐⭐⭐ | 若主队赢球，更像一球险胜而非轻松穿盘 |
| **总进球** | 3球 | 3.55 | ⭐⭐ | 官方总进球 Devig 的单项最高值就是 3 球，且 O/U 主线锁在 3 |
| **比分** | 2-1 | 7.00 | ⭐⭐ | 官方比分盘最高公平概率项 |
| **半全场** | 平/胜 | 4.00 | ⭐⭐ | 若卡尔马先守住前 45 分钟，主队后程再兑现实力，这是最顺的 HTFT 价值线 |

### 4.4 Kelly建议

根据 Kelly 公式计算（以胜平负为主市场）：
- **哈马比胜：** Edge = `1.30 × 0.63 - 1 = -0.181`，Kelly Fraction = 0%
- **平局：** Edge = `4.85 × 0.22 - 1 = +0.067`，Kelly Fraction = `((4.85-1)×0.22 - 0.78) / (4.85-1) = 1.74%`，**Half-Kelly = 0.87%**
- **卡尔马胜：** Edge = `6.50 × 0.15 - 1 = -0.025`，Kelly Fraction = 0%

> **Half-Kelly 明算：** 取平局为例，`b = 4.85 - 1 = 3.85`，`p = 0.22`，`q = 0.78`，`Kelly = (bp - q)/b = (3.85×0.22 - 0.78)/3.85 = 0.0174`，故 **Half-Kelly = 0.0087 ≈ 0.87% 本金**。
>
> **Kelly建议：平局方向小注参与（0.5%~1.0% bankroll，采用 Half-Kelly，不追满 Kelly）。**

---

## 五、总结与风险提示

### 核心判断

1. **概率最高仍是哈马比主胜**，但市场已经把这一点定价得非常充分，1.30 的主胜回报不再友好。
2. **真正的赔率价值在平局。** 欧赔对平局有轻微压低，亚盘却没有进一步加深到全面碾压盘，说明市场对“主队能赢但不稳”的共识很强。
3. **卡尔马的硬伤是客场。** 五连客败和 Stolt 缺阵都让其上限受限，所以我不愿把客胜抬到价值位。
4. **若哈马比赢球，更像 1 球差而非大胜。** 这也是“让平（-1）”和“2-1”比纯追主胜更有解释力的原因。

### 风险提示

- ⚠️ 哈马比的主场强度真实存在，若其前场早早进球，平局价值会迅速衰减。
- ⚠️ 卡尔马客场连续崩盘样本不小，若先丢球，比赛可能直接滑向 2-0 / 3-1。
- ⚠️ ClubElo 与公开 xG 证据门未过，本报告不能用公开强度模型来二次校验主观调整。
- ⚠️ 本场 Betfair/交易量类信号来自 500.com 摘要，且页面已提示“成交规模较小，参考性不强”。

### 最终结论

**最可能的结果：哈马比 2-1 卡尔马（主胜仍为最高概率路径）**  
**竞彩最优价值：胜平负 平局 @4.85，建议 Half-Kelly 0.87% 小注。**

---

## 应用的先验清单 (Applied Priors Check)

> 必须显式列出，便于审计推理路径。

- **[N] Final-Match Prior**：本场为瑞典超常规联赛，不是决赛/淘汰赛，禁止给平局额外 +3~6pp。
- **[Y] Fatigue × Motivation 对冲**：哈马比有争欧战位动力但防线有伤情，卡尔马有保级抢分动力但客场五连败；动力基本对冲，体能略向主队倾斜。
- **[N] H2H 决赛降权**：本场不是决赛；H2H 正常纳入，但不会凌驾于即时状态与赔率变化。
- **[N] CN 市场结构**：非 EPL 场景，且 竞彩 vs 欧赔 Devig 差值仅主 +1.66pp / 平 -1.12pp / 客 -0.54pp，不触发结构性偏置先验。
- **[Y] Volume Signal (升降盘解读)**：已解读 1X2、让球、大小球的开盘→即时盘变化；结论是平局热度略升、主队穿深盘信心略降、总进球并未继续上修。
- **[Y] Devig per market**：已覆盖 **1X2、让球胜平负、总进球、比分、半全场** 五个市场。
- **[Y] Half-Kelly applied**：主胜 Edge -18.1%，平局 Edge +6.7%，客胜 Edge -2.5%；仅平局保留正 Half-Kelly（0.87%）。

### Evidence Gates Check

- **[Y] Web-research evidence collected**：有效来源包括 Sports Mole、FotMob、AiScore、SportsGambler；阻塞/失败来源包括 SofaScore（403）、worldfootball（403）、Betfred Insights（462）。
- **[Y] ClubElo public rating checked**：已检查 `club-elo` 路径，但 Hammarby IF / Kalmar FF 的公开 ClubElo 路由不可用，报告中明确记为 `not covered / blocked`。
- **[Y] xG public data checked**：已检查 `xg` 路径，但 Understat 404、FBref 403，公开聚合页只有入口/提示、无可审计数值，因此未纳入定量。
- **[N] Estimated odds present**：本报告展示赔率均来自已抓取的官方/百家盘，无 `(估算)` 项。

### Public Data Signals Check

- **[Y] ClubElo public rating checked**：无可用俱乐部评分，已明确声明 `not covered / blocked`；已检查 http://api.clubelo.com/HammarbyIF 与 http://api.clubelo.com/KalmarFF，未做替代估算。
- **[Y] xG public data checked**：无可用公开 xG 数值，已明确声明 `not covered / blocked / teaser-only`；已检查 https://understat.com/team/Hammarby_IF、https://understat.com/team/Kalmar_FF、https://fbref.com/en/squads/92bfd7f0/Hammarby-Stats、https://fbref.com/en/squads/9f13771c/Kalmar-Stats，未做替代估算。

### Validator-friendly checklist

Applied priors check:
- [N] Final-Match Prior (decisive match → draw +3~6pp): regular-season Allsvenskan fixture
- [Y] Fatigue × Motivation offset: Hammarby slight physical edge; Kalmar equal motivation from points pressure
- [N] H2H discount for finals: not a final / not a knockout decider
- [N] CN market structure (EPL bias): non-EPL fixture; gate not applicable
- [Y] Volume signal (升/降盘): draw shortened, AH stuck at -1.25, totals cooled back to 3.0
- [Y] Devig applied per market: 1X2 / HHAD / JQS / BF / HTFT
- [Y] Half-Kelly computed: draw Edge +6.7%, Half-Kelly 0.87%

Evidence gates check:
- [Y] Web-research evidence collected (run_research; ≥2 converging sources OR all-blocked fallback explicitly declared): Sports Mole / FotMob / AiScore / SportsGambler, with blocked sources declared
- [Y] ClubElo public rating checked (intent: "club-elo"; source URL or unavailable reason): `not covered / blocked` via http://api.clubelo.com/HammarbyIF and http://api.clubelo.com/KalmarFF
- [Y] xG public data checked (intent: "xg"; source URL or unavailable reason): https://understat.com/team/Hammarby_IF 404; https://understat.com/team/Kalmar_FF 404; https://fbref.com/en/squads/92bfd7f0/Hammarby-Stats 403; https://fbref.com/en/squads/9f13771c/Kalmar-Stats 403; no auditable public xG values fetched
- [N] Estimated odds present (must be marked with 估算): none

**估算赔率统计**：0 / 34  
**整体置信度**：Medium（赔率为真实抓取，但 ClubElo/xG 缺失、社媒样本未审计，因此不升到 High）

---

## 数据来源

- **Tier 1（赔率）**：china-football-odds 工具聚合的中国体彩 / 500.com / 澳门样本；读数主要来自 500.com 欧赔、亚盘、大小球、投注分析页：
  - https://odds.500.com/fenxi/ouzhi-1362697.shtml
  - https://odds.500.com/fenxi/yazhi-1362697.shtml
  - https://odds.500.com/fenxi/daxiao-1362697.shtml
  - https://odds.500.com/fenxi/touzhu-1362697.shtml
- **Tier 5（赛事预览 / 伤停）**：
  - https://www.sportsmole.co.uk/football/hammarby/preview/hammarby-vs-kalmar-prediction-team-news-lineups_601017.html
  - https://www.fotmob.com/matches/hammarby-vs-kalmar-ff/2pyumy
  - https://www.sportsgambler.com/betting-tips/football/hammarby-vs-kalmar-ff-prediction-lineups-odds-2026-07-12/
- **Tier 6（H2H / 搜索聚合）**：
  - https://www.aiscore.com/head-to-head/soccer-hammarby-vs-kalmar
  - https://footystats.org/sweden/hammarby-if-vs-kalmar-ff-h2h-stats
- **Public strength gates（已检查但未纳入数值）**：
  - http://api.clubelo.com/HammarbyIF
  - http://api.clubelo.com/KalmarFF
  - https://understat.com/team/Hammarby_IF
  - https://understat.com/team/Kalmar_FF
  - https://fbref.com/en/squads/92bfd7f0/Hammarby-Stats
  - https://fbref.com/en/squads/9f13771c/Kalmar-Stats

*报告生成时间：2026-07-11T12:17:28.839Z*  
*数据截止：2026-07-11T12:21:33Z*  
*数据来源：见上文“数据来源”*  
*推理依据：LLM qualitative match-analysis methodology v0.1*
<!-- probs: {"home": 0.63, "draw": 0.22, "away": 0.15} -->
