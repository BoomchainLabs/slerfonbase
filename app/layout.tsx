import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Manrope } from 'next/font/google'
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "SLERF - The Viral DeFi Token on Base | Play, Earn & Win Real Tokens",
  description: "Join the SLERF revolution on Base chain. Play games, earn real tokens, trade, and build wealth with the community. 🚀",
  keywords: ["SLERF", "Base", "DeFi", "Crypto", "Play-to-Earn", "Token", "Web3"],
  generator: "v0.app",
  openGraph: {
    title: "SLERF - Earn Real Crypto Playing Games on Base",
    description: "The most engaging DeFi platform. Earn SLERF tokens by playing, referring, and trading.",
    type: "website",
    url: "https://slerf-base.vercel.app",
    siteName: "SLERF",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLERF - Earn Real Tokens Playing Games",
    description: "Join the viral DeFi revolution. Earn SLERF tokens on Base.",
    creator: "@slerf00",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SLERF",
  },
  formatDetection: {
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1e40af" />
        <meta name="mobile-web-app-capable" content="true" />
        <meta name="apple-mobile-web-app-capable" content="true" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SLERF" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "SLERF",
              description: "The viral DeFi token on Base - Play, Earn, Trade",
              url: "https://slerf-base.vercel.app",
              applicationCategory: "FinanceApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "SLERF",
                url: "https://twitter.com/slerf00",
              },
            }),
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-serif: ${manrope.variable};
}
        `}</style>
      </head>
      <body className={`${GeistSans.variable} ${manrope.variable} font-sans antialiased`}>
        {children}
        <noscript>
          <div style={{ padding: "20px", textAlign: "center", color: "#fff" }}>
            Please enable JavaScript to use SLERF. This is a Web3 application that requires JavaScript.
          </div>
        </noscript>
      </body>
    </html>
  )
}
