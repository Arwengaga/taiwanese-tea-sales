import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-tea.jpg"
        alt="台灣高山茶園雲霧繚繞的壯麗景色"
        fill
        sizes="100vw"
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-background/80">
          Taiwan Premium Tea
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-wide text-background md:text-7xl lg:text-8xl">
          茶韻山房
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/90 md:text-xl">
          <span>{"源自台灣高山的頂級茶葉，傳承百年製茶工藝，"}</span>
          <br className="hidden md:block" />
          <span>{"將山間雲霧的清幽與大地的醇厚，凝結於每一片茶葉之中。"}</span>
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#products"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-background px-8 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-background/90"
          >
            探索茶品
          </a>
          <a
            href="#history"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-background/40 px-8 text-sm font-medium tracking-wide text-background transition-colors hover:bg-background/10"
          >
            了解更多
          </a>
        </div>
      </div>
    </section>
  )
}
