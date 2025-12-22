import { RootProvider } from 'fumadocs-ui/provider/next';
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

import type { Metadata } from "next";
import "./globals.css";

import { basic, jsonLd } from "@/lib/data";

import { ThemeProvider } from "@/components/theme/provider";

export const metadata: Metadata = {
  metadataBase: new URL(basic.url),
  title: {
    default: basic.title,
    template: `%s - ${basic.title}`
  },
  description: basic.description,
  keywords: [
    `${basic.name} portfolio`,
    `${basic.name} full stack web developer`,
    `${basic.name} full stack developer`,
    `${basic.name} MERN stack developer`,
    "React dev",
    "Node.js dev",
    "Next.js dev",
    "MERN stack dev",
    "Full stack dev",
    "Web developer"
  ],
  authors: [{ name: basic.name, url: basic.url }],
  applicationName: basic.appName,
  creator: basic.name,
  openGraph: {
    url: basic.url,
    type: "website",
    title: basic.title,
    locale: "en_IN",
    siteName: basic.appName,
    description: basic.description,
    images: [{
      url: "/imgs/og_image.png",
      width: 1200,
      height: 630,
      alt: basic.title
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: basic.title,
    description: basic.description,
    site: `@${basic.appName}`,
    creator: basic.xId,
    images: ["/imgs/og_image.png"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/android-icon-192x192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [
      { url: "/icons/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/icons/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/icons/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/icons/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/icons/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/icons/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/icons/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/icons/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/icons/apple-icon-180x180.png", sizes: "180x180" }
    ],
  },
}

function RootLayout({ children }: readOnlyChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-primary-foreground text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>

        <Script id="json-ld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>

        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
