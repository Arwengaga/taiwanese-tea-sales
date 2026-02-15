import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-wider">
              茶韻山房
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              堅持以最高標準選茶、製茶，將台灣高山的純淨與匠人的用心，
              帶到您的茶杯之中。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em]">
              快速連結
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="#products"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  精選茶品
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  茶葉歷史
                </a>
              </li>
              <li>
                <a
                  href="#environment"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  風土環境
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em]">
              聯絡資訊
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>南投縣鹿谷鄉茶園路88號</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+886-49-275-8888</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@taiwantea.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/50">
          <p>{'© 2026 茶韻山房 All Rights Reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}
