import Image from "next/image"
import { Mountain, Droplets, Cloud, Thermometer } from "lucide-react"

const factors = [
  {
    icon: Mountain,
    title: "高海拔地形",
    description:
      "台灣擁有超過200座海拔3,000公尺以上的高山。茶園多分佈於海拔800至2,600公尺之間，高海拔使日夜溫差大，茶葉生長緩慢，葉片更厚實，風味物質更集中濃縮。",
  },
  {
    icon: Cloud,
    title: "雲霧繚繞",
    description:
      "山區午後常有雲霧升起，遮蔽陽光形成天然的「遮蔭效應」。散射光照使茶葉中的茶胺酸含量增加、苦澀的兒茶素減少，造就高山茶特有的甘醇甜潤口感。",
  },
  {
    icon: Droplets,
    title: "充沛雨量",
    description:
      "台灣年均降雨量約2,500毫米，且山區雨量更為豐沛。充足的水分搭配排水良好的山坡地形，使茶樹根系深入土壤，充分吸收礦物質養分，茶湯層次更加豐富。",
  },
  {
    icon: Thermometer,
    title: "亞熱帶氣候",
    description:
      "台灣位於北回歸線上，兼具熱帶與亞熱帶氣候特徵。全年溫暖濕潤，春夏秋冬四季分明，不同季節採摘的茶葉各有獨特風味——春茶清香、冬茶醇厚。",
  },
]

export function Environment() {
  return (
    <section id="environment" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Terroir & Climate
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-wide text-foreground md:text-5xl">
            得天獨厚的風土
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            台灣獨特的地理環境與氣候條件，造就了世界頂級茶葉的搖籃。
            每一座山、每一片雲霧，都是大自然賜予的珍貴禮物。
          </p>
        </div>

        {/* Full-width image */}
        <div className="relative mb-16 aspect-[21/9] overflow-hidden rounded-sm">
          <Image
            src="/images/tea-environment.jpg"
            alt="台灣高山茶區雲霧繚繞的壯麗山景與梯田茶園"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <blockquote className="max-w-2xl px-6 text-center">
              <p className="font-serif text-2xl font-bold leading-relaxed text-background md:text-3xl">
                {'"'}高山出好茶，雲霧育甘露{'"'}
              </p>
              <footer className="mt-3 text-sm tracking-wide text-background/80">
                — 台灣茶諺
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Factor cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {factors.map((factor) => {
            const Icon = factor.icon
            return (
              <div
                key={factor.title}
                className="rounded-sm border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {factor.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {factor.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional information */}
        <div className="mt-16 rounded-sm bg-primary p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary-foreground">
                200+
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                海拔三千公尺以上高山
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary-foreground">
                2,500mm
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                年均降雨量
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary-foreground">
                6大
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                知名茶葉產區
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
