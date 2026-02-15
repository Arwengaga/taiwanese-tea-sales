import type { Metadata } from 'next'
import { Noto_Serif_TC, Noto_Sans_TC } from 'next/font/google'

import './globals.css'

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-serif',
})

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '茶韻山房 | 台灣精品茶葉',
  description:
    '來自台灣高山的精品茶葉，傳承百年製茶工藝。探索烏龍茶、東方美人、高山茶與紅茶的極致風味。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${notoSerifTC.variable} ${notoSansTC.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
