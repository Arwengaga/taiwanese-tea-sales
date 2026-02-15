"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

const teas = [
  {
    name: "阿里山高山烏龍",
    origin: "嘉義阿里山",
    price: "NT$ 1,200",
    weight: "150g",
    image: "/images/tea-oolong.jpg",
    description:
      "生長於海拔1,200公尺以上的阿里山茶區，茶湯金黃透亮，帶有獨特的花果香氣與甘醇回甘。",
  },
  {
    name: "東方美人茶",
    origin: "新竹北埔",
    price: "NT$ 1,800",
    weight: "75g",
    image: "/images/tea-oriental-beauty.jpg",
    description:
      "經小綠葉蟬叮咬後自然發酵的獨特白毫烏龍，蜜香濃郁，茶湯琥珀色澤，口感圓潤甘甜。",
  },
  {
    name: "梨山高冷茶",
    origin: "台中梨山",
    price: "NT$ 2,400",
    weight: "150g",
    image: "/images/tea-high-mountain.jpg",
    description:
      "產自海拔2,000公尺以上的梨山茶區，因高海拔低溫使茶葉生長緩慢，風味更加細膩悠長。",
  },
  {
    name: "三峽碧螺春",
    origin: "新北三峽",
    price: "NT$ 800",
    weight: "100g",
    image: "/images/tea-green.jpg",
    description:
      "採用手工炒菁技法，保留茶葉鮮活翠綠。茶湯清澈碧綠，滋味鮮爽回甘，是春茶中的極品。",
  },
  {
    name: "日月潭紅茶",
    origin: "南投魚池",
    price: "NT$ 900",
    weight: "100g",
    image: "/images/tea-black.jpg",
    description:
      "台灣紅茶十八號（紅玉），帶有天然肉桂與薄荷香氣，茶湯深紅明亮，口感醇厚而不澀。",
  },
]

export function Products() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Our Collection
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-wide text-foreground md:text-5xl">
            精選茶品
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            嚴選台灣各大茶區最優質的茶葉，從高山烏龍到蜜香紅茶，
            每一款皆為匠心之作。
          </p>
        </div>

        {/* Product grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teas.map((tea) => (
            <article
              key={tea.name}
              className="group overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {failedImages.has(tea.name) ? (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    茶品圖片
                  </div>
                ) : (
                  <Image
                    src={tea.image}
                    alt={tea.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => setFailedImages((prev) => new Set(prev).add(tea.name))}
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {tea.name}
                    </h3>
                    <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                      {tea.origin} / {tea.weight}
                    </p>
                  </div>
                  <span className="shrink-0 text-base font-bold text-accent">
                    {tea.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tea.description}
                </p>
                <button className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-sm bg-primary text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">
                  <ShoppingBag className="h-4 w-4" />
                  加入購物車
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
