import type { Metadata, Viewport } from "next"
import { Inter, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Move Pet | Mobilidade e Dignidade para seu Pet",
  description:
    "Cadeiras de rodas, próteses e soluções de mobilidade personalizadas em impressão 3D para pets. Inclusão, sustentabilidade e impacto social.",
  keywords: [
    "pet",
    "mobilidade",
    "cadeira de rodas",
    "prótese",
    "impressão 3D",
    "acessibilidade animal",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}