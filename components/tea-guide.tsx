"use client"

import { useState } from "react"
import {
  Heart,
  Moon,
  Flame,
  Leaf,
  Brain,
  Coffee,
  Droplets,
  ChevronRight,
  RotateCcw,
} from "lucide-react"

type Concern = {
  id: string
  label: string
  icon: React.ReactNode
  description: string
}

type Recommendation = {
  concern: string
  avoid: string[]
  avoidReason: string
  recommend: string[]
  recommendReason: string
  tips: string[]
}

const concerns: Concern[] = [
  {
    id: "stomach",
    label: "腸胃敏感",
    icon: <Heart className="h-5 w-5" />,
    description: "容易胃痛、胃酸過多或消化不良",
  },
  {
    id: "sleep",
    label: "睡眠品質",
    icon: <Moon className="h-5 w-5" />,
    description: "容易失眠、淺眠或對咖啡因敏感",
  },
  {
    id: "energy",
    label: "提神醒腦",
    icon: <Brain className="h-5 w-5" />,
    description: "需要集中精神、保持清醒",
  },
  {
    id: "coldBody",
    label: "體質偏寒",
    icon: <Flame className="h-5 w-5" />,
    description: "手腳冰冷、怕冷、寒性體質",
  },
  {
    id: "hotBody",
    label: "體質燥熱",
    icon: <Droplets className="h-5 w-5" />,
    description: "容易上火、口乾舌燥、火氣大",
  },
  {
    id: "caffeine",
    label: "咖啡因敏感",
    icon: <Coffee className="h-5 w-5" />,
    description: "喝茶後心悸、手抖或不適",
  },
  {
    id: "detox",
    label: "養生保健",
    icon: <Leaf className="h-5 w-5" />,
    description: "注重日常保健、抗氧化與新陳代謝",
  },
]

const recommendations: Record<string, Recommendation> = {
  stomach: {
    concern: "腸胃敏感",
    avoid: ["生茶（未烘焙的輕發酵茶）", "綠茶", "未熟化的高山茶"],
    avoidReason:
      "生茶與綠茶屬於未經烘焙或發酵程度較低的茶類，茶多酚（兒茶素）含量較高。這些物質會刺激胃壁黏膜，促進胃酸分泌，對腸胃敏感的人容易引起胃痛、胃灼熱或消化不適。尤其是空腹飲用時，刺激更為明顯。",
    recommend: ["中重烘焙烏龍茶", "傳統凍頂烏龍", "日月潭紅茶", "東方美人茶"],
    recommendReason:
      "經過烘焙的茶葉，在高溫烘焙過程中會大幅降解茶多酚與咖啡因含量，同時產生溫和的焦糖化合物。這些變化使茶性從「寒涼」轉為「溫和」，大大減少對胃壁的刺激。紅茶屬於全發酵茶，茶多酚在發酵過程中轉化為茶黃素與茶紅素，性質更加溫潤，是腸胃敏感者的理想選擇。",
    tips: [
      "避免空腹喝茶，建議飯後30分鐘再飲用",
      "茶湯濃度不宜過高，可適量增加水量",
      "選擇烘焙度標示為「中焙」或「重焙」的茶品",
      "可加入少許溫牛奶製成奶茶，降低對胃的刺激",
    ],
  },
  sleep: {
    concern: "睡眠品質",
    avoid: ["高山生茶", "綠茶", "重揉捻的濃茶"],
    avoidReason:
      "未烘焙的生茶與綠茶咖啡因含量較高，且茶胺酸與咖啡因的比例偏向刺激性。重揉捻的茶葉在沖泡時釋放咖啡因速度更快，容易在短時間內攝入大量咖啡因，影響入睡。",
    recommend: ["重烘焙烏龍茶", "陳年老茶", "東方美人茶", "日月潭紅茶（淡泡）"],
    recommendReason:
      "重烘焙過程可將咖啡因含量降低約30-40%。陳年老茶經長時間存放，咖啡因會自然降解，茶性轉為平和。東方美人茶雖為部分發酵茶，但因其重發酵特性（60-70%），咖啡因含量相對較低，且富含茶胺酸（L-theanine），有助於放鬆與舒緩。",
    tips: [
      "下午三點後避免飲用任何茶類",
      "可嘗試「洗茶」：第一泡快速倒掉，可去除約50%咖啡因",
      "選擇淡泡方式，減少茶葉量或縮短沖泡時間",
      "陳年老茶是睡前最溫和的選擇",
    ],
  },
  energy: {
    concern: "提神醒腦",
    avoid: [],
    avoidReason: "",
    recommend: ["阿里山高山烏龍（生茶）", "三峽碧螺春", "梨山高冷茶", "高山綠茶"],
    recommendReason:
      "高山生茶與綠茶的咖啡因含量最為豐富，且富含茶胺酸（L-theanine）。L-theanine 能與咖啡因協同作用，提供穩定而持久的專注力，不像咖啡那樣產生突然的能量波動和隨後的疲勞感。高海拔茶葉因生長緩慢，茶胺酸累積更多，提神效果更柔和持久。",
    tips: [
      "早上或午後飲用效果最佳",
      "適度提高茶葉量可增強提神效果",
      "搭配少量點心，避免空腹大量飲用",
      "高山茶的提神效果比平地茶更溫和、更持久",
    ],
  },
  coldBody: {
    concern: "體質偏寒",
    avoid: ["綠茶", "輕發酵生茶", "冷泡茶"],
    avoidReason:
      "中醫觀點認為綠茶與生茶屬「寒性」茶類。未經發酵與烘焙的茶保留了較多寒涼性質的茶多酚，長期飲用可能加重寒性體質的不適，如手腳冰冷、腹瀉、經期不適等症狀。",
    recommend: ["重烘焙凍頂烏龍", "日月潭紅茶", "陳年普洱", "炭焙烏龍"],
    recommendReason:
      "重發酵與重烘焙的茶類在中醫理論中屬「溫性」。紅茶經過完全發酵，茶性溫和，能溫胃暖身。炭焙烏龍經長時間低溫炭火烘焙，不僅茶性溫暖，還帶有獨特的焦糖與木質香氣。這類茶品適合秋冬季節或寒性體質的人長期飲用。",
    tips: [
      "冬季可加入少許薑片或紅棗同泡",
      "選擇熱泡方式，避免冷泡",
      "飯後來一杯溫熱的紅茶有助於消化暖身",
      "炭焙烏龍是體質偏寒者的首選日常茶",
    ],
  },
  hotBody: {
    concern: "體質燥熱",
    avoid: ["重烘焙茶", "紅茶（大量飲用）", "老茶"],
    avoidReason:
      "重烘焙茶與全發酵紅茶在中醫理論中偏「溫性」至「熱性」，燥熱體質者大量飲用可能加重上火症狀，如口腔潰瘍、喉嚨不適、皮膚問題等。",
    recommend: ["三峽碧螺春", "高山生茶", "輕發酵烏龍", "冷泡茶"],
    recommendReason:
      "綠茶與輕發酵茶屬「涼性」，富含兒茶素等抗氧化成分，具有清熱降火的效果。冷泡茶因低溫沖泡，咖啡因釋出較少，茶多酚保留更完整，口感甘甜且茶性更為涼爽。高山生茶清爽甘醇，是夏季消暑的絕佳選擇。",
    tips: [
      "夏季可嘗試冷泡法：冷水浸泡6-8小時",
      "綠茶搭配少許薄荷葉，清涼解暑效果更佳",
      "避免睡前飲用大量涼性茶，以免影響腸胃",
      "輕發酵高山茶是日常降火的好選擇",
    ],
  },
  caffeine: {
    concern: "咖啡因敏感",
    avoid: ["綠茶濃泡", "高山生茶濃泡", "任何茶類的第一泡濃茶"],
    avoidReason:
      "茶葉中約80%的咖啡因會在第一泡的前30秒內釋出。濃泡或長時間浸泡的茶湯咖啡因含量更高。綠茶雖然常被認為溫和，但其咖啡因含量實際上並不低，尤其是嫩芽製成的高級綠茶。",
    recommend: ["重烘焙烏龍（淡泡）", "陳年老茶", "東方美人茶（淡泡）", "焙茶"],
    recommendReason:
      "烘焙過程能有效降解咖啡因分子。重烘焙茶的咖啡因含量可比生茶低30-40%。陳年存放的老茶，咖啡因會隨時間自然分解。搭配「洗茶」技巧（快速沖掉第一泡），可進一步減少約50%的咖啡因攝取量。",
    tips: [
      "養成「洗茶」習慣：熱水沖泡10秒後倒掉第一泡",
      "減少茶葉用量，增加沖泡水量",
      "選擇粗老葉製成的茶（咖啡因比嫩芽茶低）",
      "避免浸泡超過3分鐘，咖啡因會持續釋出",
    ],
  },
  detox: {
    concern: "養生保健",
    avoid: [],
    avoidReason: "",
    recommend: [
      "阿里山高山烏龍",
      "三峽碧螺春",
      "東方美人茶",
      "日月潭紅茶",
    ],
    recommendReason:
      "台灣茶葉富含多種有益健康的活性成分。兒茶素（EGCG）是強效抗氧化劑，有助於清除自由基、促進新陳代謝。茶多酚有助調節血脂與血糖。茶胺酸能舒緩壓力、改善專注力。建議不同茶類交替飲用，攝取更全面的營養成分：綠茶富含兒茶素，烏龍茶有助代謝，紅茶溫潤養胃。",
    tips: [
      "每日飲茶3-5杯（約600-1000ml）為適量",
      "不同茶類輪替飲用，營養攝取更均衡",
      "以80-90度C熱水沖泡，更好地保留抗氧化成分",
      "搭配均衡飲食與適度運動，效果更佳",
    ],
  },
}

type RoastedTea = {
  name: string
  roastLevel: string
  fermentation: string
  color: string
  aroma: string
  taste: string
  aftertaste: string
  bestFor: string
  tagline: string
  flavorKeywords: string[]
}

const roastedTeas: RoastedTea[] = [
  {
    name: "傳統凍頂烏龍",
    roastLevel: "中焙 ~ 重焙",
    fermentation: "中發酵（25-35%）",
    color: "琥珀金黃色",
    aroma:
      "像走進一間老式烘焙坊——烤堅果、焦糖與微微的炭火香氣交織在一起，溫暖而令人安心。",
    taste:
      "入口是圓潤飽滿的「烤地瓜甜」，不是糖的那種甜，而是食物被慢火烤出來的天然甘甜。中段帶有核桃、榛果般的堅果油脂感，喝起來滑順不澀。",
    aftertaste:
      "吞嚥後喉嚨深處會慢慢浮上一股「焦糖奶油」般的回甘，嘴裡留香可以持續好幾分鐘，讓你忍不住想再喝一口。",
    bestFor: "適合剛從咖啡轉喝茶的人，風味濃郁有記憶點",
    tagline: "一杯會讓你想起冬天壁爐旁的溫暖",
    flavorKeywords: ["烤地瓜甜", "焦糖奶油", "堅果油脂感"],
  },
  {
    name: "炭焙烏龍",
    roastLevel: "重焙（龍眼木炭焙）",
    fermentation: "中發酵（30-40%）",
    color: "深琥珀色，接近紅寶石",
    aroma:
      "非常獨特的「龍眼乾」香氣，混合著木炭煙燻味、黑糖香與一絲絲烤麵包的焦香。聞起來像在傳統廟會旁的老茶行。",
    taste:
      "口感極為厚實，像喝一碗溫熱的黑糖水但完全不膩。舌頭感受到明顯的「炭火烙印感」，帶有龍眼肉、烤杏仁、甚至一點點巧克力的複雜層次。",
    aftertaste:
      "回甘非常深沉綿長，喉韻有一種「木質溫暖感」，彷彿喝了一杯液態的煙燻木頭。三泡之後甜味反而越來越明顯。",
    bestFor: "適合喜歡威士忌、精品咖啡等複雜風味的老饕",
    tagline: "茶界的單一麥芽威士忌，越品越上癮",
    flavorKeywords: ["龍眼乾", "黑糖煙燻", "炭火烙印"],
  },
  {
    name: "日月潭紅茶（台茶18號紅玉）",
    roastLevel: "全發酵（無需額外烘焙）",
    fermentation: "全發酵（95-100%）",
    color: "寶石般的深紅色，光線下透著琥珀光澤",
    aroma:
      "這支茶最出名的就是它的「薄荷巧克力」香氣——先是一股清涼的薄荷感撲鼻，接著是可可與肉桂的甜香。全世界只有台灣的紅玉紅茶有這種味道。",
    taste:
      "入口像在吃一塊溫熱的布朗尼蛋糕，巧克力般的醇厚感包覆整個口腔。但又不像甜點那樣膩，反而帶有紅茶特有的清爽收斂感，讓人覺得優雅而不負擔。",
    aftertaste:
      "薄荷涼感會在吞嚥後從喉嚨慢慢升起，配合持久的蜜香甜韻，像含了一顆薄荷巧克力糖但清爽一百倍。",
    bestFor: "適合喜歡喝英式紅茶、想嘗試最有台灣特色茶款的人",
    tagline: "世界獨一無二的薄荷巧克力紅茶",
    flavorKeywords: ["薄荷巧克力", "布朗尼蛋糕", "肉桂蜜韻"],
  },
  {
    name: "東方美人茶（白毫烏龍）",
    roastLevel: "無烘焙 ~ 輕焙",
    fermentation: "重發酵（60-70%）",
    color: "明亮的琥珀蜜色，帶有橙紅光澤",
    aroma:
      "打開茶罐的瞬間會以為自己走進了一座花園——成熟蜜桃、熟蘋果、玫瑰花瓣與蜂蜜的香氣一層一層展開。這些天然的果蜜香，來自小綠葉蟬叮咬後茶樹的自然防禦反應。",
    taste:
      "口感像在喝一杯現榨的水蜜桃汁混合蜂蜜水。完全不苦不澀，甜到讓人懷疑是不是有加糖（但真的沒有）。質地柔滑如絲綢，帶有白葡萄酒般的微微果酸。",
    aftertaste:
      "嘴巴裡會殘留蜂蜜與熟果的甜香，非常持久。有人形容像「喝了一口花蜜」，溫柔地在舌尖慢慢散去。",
    bestFor: "適合平常不太喝茶、怕苦澀味的初學者，或送禮首選",
    tagline: "一隻小蟲創造的甜蜜奇蹟，連英國女王都驚艷",
    flavorKeywords: ["水蜜桃蜂蜜", "絲綢口感", "玫瑰花園"],
  },
  {
    name: "陳年老茶",
    roastLevel: "重焙（多年反覆覆焙）",
    fermentation: "後發酵（經年陳化）",
    color: "深沉的栗紅色，幾近黑色卻透著光",
    aroma:
      "帶有明顯的「老木頭」與「中藥房」氣息——陳皮、人蔘、檀香、甘草混合在一起的沉穩香氣。不是刺鼻的藥味，而是讓人覺得沉靜安神的那種。",
    taste:
      "口感極為圓滑，完全沒有稜角，像一塊被河水磨了幾十年的鵝卵石那樣光滑。舌頭上感受到的是陳皮、甘草、老木頭的沉穩味道，帶有微微的酸梅韻。",
    aftertaste:
      "回甘極深且極長，像一股暖流從喉嚨慢慢滑到胃裡。喝完之後整個人會覺得安定下來，有一種「被安撫」的感覺。",
    bestFor: "適合追求心靈沉澱、注重養生，或對茶有一定理解的進階茶友",
    tagline: "時間是最好的製茶師，十年以上才算入門",
    flavorKeywords: ["中藥房陳皮", "鵝卵石圓滑", "老木頭暖流"],
  },
  {
    name: "蜜香紅茶",
    roastLevel: "全發酵",
    fermentation: "全發酵（90-100%）",
    color: "透亮的紅寶石色",
    aroma:
      "濃郁的「蜂蜜花香」撲面而來，像經過一片盛開的野花田。相較紅玉紅茶的巧克力調性，蜜香紅茶更偏向花果系——荔枝、龍眼蜜、桂花的甜美複合香。",
    taste:
      "喝起來像在喝一杯加了蜂蜜的花果茶，但又比花果茶多了紅茶的醇厚底蘊。甜度很高但不膩，有點像吃一顆飽滿多汁的荔枝——清甜、芬芳、水潤。",
    aftertaste:
      "蜜甜味在口中徘徊不去，越回味越甜。鼻腔裡會殘留花香，讓人有一種「剛從花園散步回來」的愉悅感。",
    bestFor: "適合喜歡甜味飲品、想戒含糖飲料的人",
    tagline: "大自然的蜂蜜水，零添加的天然甜",
    flavorKeywords: ["荔枝蜂蜜", "花果茶底蘊", "野花田芬芳"],
  },
]

export function TeaGuide() {
  const [selected, setSelected] = useState<string | null>(null)
  const [activeFlavorTab, setActiveFlavorTab] = useState<number>(0)
  const result = selected ? recommendations[selected] : null

  return (
    <section id="guide" className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Tea Selection Guide
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-wide text-foreground md:text-5xl text-balance">
            如何選擇適合自己的茶
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            {"每個人的體質與需求不同，選茶也應因人而異。"}
            {"請點選您最在意的身體狀況，我們將為您推薦最適合的台灣茶。"}
          </p>
        </div>

        {/* Concern selector cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {concerns.map((concern) => {
            const isActive = selected === concern.id
            return (
              <button
                key={concern.id}
                onClick={() => setSelected(isActive ? null : concern.id)}
                className={`group flex flex-col items-start gap-3 rounded-sm border p-5 text-left transition-all ${
                  isActive
                    ? "border-accent bg-accent/10 shadow-md"
                    : "border-border bg-card hover:border-accent/40 hover:shadow-sm"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent"
                  }`}
                >
                  {concern.icon}
                </span>
                <div>
                  <h3
                    className={`font-serif text-lg font-bold ${
                      isActive ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {concern.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {concern.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Recommendation result */}
        {result && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="rounded-sm border border-accent/30 bg-card p-8 shadow-lg md:p-10">
              {/* Header */}
              <div className="mb-8 flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {result.concern}
                  <span className="ml-2 text-muted-foreground">
                    {'/ '}選茶建議
                  </span>
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <RotateCcw className="h-4 w-4" />
                  重新選擇
                </button>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Avoid section */}
                {result.avoid.length > 0 && (
                  <div className="rounded-sm border border-destructive/20 bg-destructive/5 p-6">
                    <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-destructive">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive/10 text-sm">
                        !
                      </span>
                      建議避免的茶類
                    </h4>
                    <ul className="mt-4 flex flex-col gap-2">
                      {result.avoid.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-relaxed text-foreground"
                        >
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {result.avoidReason}
                    </p>
                  </div>
                )}

                {/* Recommend section */}
                <div
                  className={`rounded-sm border border-accent/20 bg-accent/5 p-6 ${
                    result.avoid.length === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <h4 className="flex items-center gap-2 font-serif text-lg font-bold text-accent">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-sm">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                    推薦茶類
                  </h4>
                  <ul className="mt-4 flex flex-col gap-2">
                    {result.recommend.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground"
                      >
                        <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {result.recommendReason}
                  </p>
                </div>
              </div>

              {/* Tips */}
              <div className="mt-8 rounded-sm bg-secondary/60 p-6">
                <h4 className="font-serif text-lg font-bold text-foreground">
                  實用小訣竅
                </h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {result.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* ========== Roasted Tea Flavor Guide ========== */}
        <div className="mt-32">
          <div className="mb-14 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Roasted Tea Flavor Map
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-wide text-foreground md:text-5xl text-balance">
              熟茶風味圖鑑
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              熟茶經過烘焙或重發酵，茶性溫和不傷胃，適合大多數人日常飲用。
              但每一款熟茶的風味天差地別——以下用最白話的方式，讓你「讀完就知道味道」。
            </p>
          </div>

          {/* Tea name tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {roastedTeas.map((tea, i) => (
              <button
                key={tea.name}
                onClick={() => setActiveFlavorTab(i)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                  activeFlavorTab === i
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                {tea.name}
              </button>
            ))}
          </div>

          {/* Active tea detail card */}
          {(() => {
            const tea = roastedTeas[activeFlavorTab]
            return (
              <div
                key={tea.name}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-sm border border-border bg-card shadow-lg overflow-hidden"
              >
                {/* Top bar: tagline */}
                <div className="bg-primary px-8 py-4">
                  <p className="font-serif text-lg font-bold text-primary-foreground md:text-xl text-balance">
                    {tea.tagline}
                  </p>
                </div>

                <div className="p-8 md:p-10">
                  {/* Name & specs row */}
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                        {tea.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {tea.bestFor}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-foreground">
                        <Flame className="h-3.5 w-3.5 text-accent" />
                        {tea.roastLevel}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-foreground">
                        <Leaf className="h-3.5 w-3.5 text-accent" />
                        {tea.fermentation}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-foreground">
                        <Droplets className="h-3.5 w-3.5 text-accent" />
                        {tea.color}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-8 h-px bg-border" />

                  {/* Three flavor dimensions */}
                  <div className="grid gap-8 md:grid-cols-3">
                    {/* Aroma */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            className="h-4 w-4 text-accent"
                          >
                            <path d="M12 3c.5 2-1 4-1 6s2 4 1 6c-.5 1-2 2-3 2" />
                            <path d="M8 3c.5 2-1 4-1 6s2 4 1 6c-.5 1-2 2-3 2" />
                            <path d="M16 3c.5 2-1 4-1 6s2 4 1 6c-.5 1-2 2-3 2" />
                          </svg>
                        </span>
                        <h4 className="font-serif text-base font-bold text-foreground">
                          聞起來
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {tea.aroma}
                      </p>
                    </div>

                    {/* Taste */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            className="h-4 w-4 text-accent"
                          >
                            <path d="M12 22c-4 0-8-2-8-8V4h16v10c0 6-4 8-8 8Z" />
                            <path d="M20 4c1 0 2 1 2 2v2c0 1-1 2-2 2" />
                          </svg>
                        </span>
                        <h4 className="font-serif text-base font-bold text-foreground">
                          喝起來
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {tea.taste}
                      </p>
                    </div>

                    {/* Aftertaste */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            className="h-4 w-4 text-accent"
                          >
                            <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                            <path d="m12 2 0 2" />
                            <path d="m12 20 0 2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="m2 12 2 0" />
                            <path d="m20 12 2 0" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                          </svg>
                        </span>
                        <h4 className="font-serif text-base font-bold text-foreground">
                          回甘餘韻
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {tea.aftertaste}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* Quick comparison strip */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="py-4 pr-4 text-left font-serif font-bold text-foreground">
                    茶名
                  </th>
                  <th className="py-4 px-4 text-left font-serif font-bold text-foreground">
                    烘焙 / 發酵
                  </th>
                  <th className="py-4 px-4 text-left font-serif font-bold text-foreground">
                    風味關鍵詞
                  </th>
                  <th className="py-4 pl-4 text-left font-serif font-bold text-foreground">
                    最適合的人
                  </th>
                </tr>
              </thead>
              <tbody>
                {roastedTeas.map((tea, i) => (
                  <tr
                    key={tea.name}
                    className={`border-b border-border/50 transition-colors cursor-pointer ${
                      activeFlavorTab === i
                        ? "bg-accent/8 ring-1 ring-accent/20 ring-inset"
                        : "hover:bg-secondary/50"
                    }`}
                    onClick={() => setActiveFlavorTab(i)}
                  >
                    <td className="py-4 pr-4">
                      <span className="font-serif font-bold text-foreground">
                        {tea.name}
                      </span>
                      <br />
                      <span className="text-xs text-muted-foreground">
                        {tea.color}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">
                      <span className="block">{tea.roastLevel}</span>
                      <span className="block text-xs text-muted-foreground/70">
                        {tea.fermentation}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1.5">
                        {tea.flavorKeywords.map((kw) => (
                          <span
                            key={kw}
                            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              activeFlavorTab === i
                                ? "bg-accent/15 text-accent"
                                : "bg-secondary text-muted-foreground"
                            }`}
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 pl-4 text-sm text-muted-foreground">
                      {tea.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

function X({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
