"use client"

import { useState } from "react"
import Image from "next/image"

const timeline = [
  {
    era: "17世紀",
    title: "茶的起源",
    description:
      "台灣原住民早已發現野生茶樹的蹤跡。荷蘭統治時期，文獻首次記載台灣山區的野生茶樹，為日後台灣茶業發展埋下種子。",
  },
  {
    era: "19世紀",
    title: "茶業興起",
    description:
      "清朝統治時期，福建移民帶來成熟的製茶技術與茶苗。1860年代台灣開港通商，烏龍茶外銷歐美，「Formosa Oolong Tea」享譽國際，台北大稻埕成為茶葉貿易重鎮。",
  },
  {
    era: "日治時期",
    title: "科學化發展",
    description:
      "日本殖民政府引進現代化製茶技術與品種改良，在魚池鄉設立紅茶試驗所，培育出阿薩姆與紅玉紅茶品種，奠定台灣紅茶國際地位。",
  },
  {
    era: "1970年代",
    title: "高山茶崛起",
    description:
      "隨著經濟發展與內需市場擴大，茶農開始向高海拔山區拓展種植。梨山、阿里山、杉林溪等高山茶區相繼開發，高山烏龍茶成為台灣茶的代名詞。",
  },
  {
    era: "當代",
    title: "精品茶時代",
    description:
      "台灣茶業走向精緻化與品牌化，強調風土特色與職人精神。台灣茶在國際茶葉比賽屢獲金獎，成為全球精品茶愛好者追逐的珍品。",
  },
]

export function History() {
  const [imgError, setImgError] = useState(false)
  return (
    <section id="history" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            A Rich Heritage
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-wide text-foreground md:text-5xl">
            台灣茶葉的歷史
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            從野生山茶到享譽國際的精品好茶，台灣茶的故事跨越四百年，
            是一段文化、技藝與風土交織的動人篇章。
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            {!imgError ? (
              <Image
                src="/images/tea-history.jpg"
                alt="傳統台灣製茶師傅手工揉捻茶葉"
                fill
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                茶葉歷史圖片
              </div>
            )}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />

            <div className="flex flex-col gap-10">
              {timeline.map((item) => (
                <div key={item.era} className="relative pl-10">
                  {/* Dot */}
                  <div className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {item.era}
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
