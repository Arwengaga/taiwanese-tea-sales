import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { TeaGuide } from "@/components/tea-guide"
import { History } from "@/components/history"
import { Environment } from "@/components/environment"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <TeaGuide />
      <History />
      <Environment />
      <Footer />
    </main>
  )
}
