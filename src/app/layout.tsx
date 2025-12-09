import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Heitor Barreto | Desenvolvedor Full-Stack",
  description: "Portfólio de Heitor Barreto. Desenvolvedor Full-Stack especializado em Front-end, APIs RESTful, arquitetura de banco de dados e DevOps.",
  keywords: "Heitor Barreto, Desenvolvedor, Full-Stack, React, Next.js, TypeScript, Node.js, DevOps",
  authors: [{ name: "Heitor Barreto", url: "https://heitorbrrt.vercel.app" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://heitorbrrt.vercel.app",
    siteName: "Heitor Barreto",
    title: "Heitor Barreto | Desenvolvedor Full-Stack",
    description: "Portfólio de Heitor Barreto. Desenvolvedor Full-Stack especializado em Front-end, APIs RESTful, arquitetura de banco de dados e DevOps.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
