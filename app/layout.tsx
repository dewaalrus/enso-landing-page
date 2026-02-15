import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, EB_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Enso: Relationship Intelligence for GTM Teams",
  description:
    "Relationship intelligence that builds itself and survives change. Enso builds a living relationship graph from your emails, calls, and meetings. Every rep walks into every meeting prepared.",
  openGraph: {
    title: "Enso: Relationship Intelligence for GTM Teams",
    description:
      "The connective layer for GTM teams. Relationship intelligence that builds itself and survives change. Built by Asana GTM and AI teams.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enso: Relationship Intelligence for GTM Teams",
    description:
      "Relationship intelligence that builds itself and survives change. The connective layer for GTM teams. Built by Asana GTM and AI teams.",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#faf8f5",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${ebGaramond.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
