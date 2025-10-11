import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme/provider";

const config = {
  url: "https://glrk.dev",
  name: "Raj kumar",
  title: "Raj kumar | Full Stack Web Developer",
  description: "Raj Kumar is a Full Stack Web Developer specializing in React and Node.js ecosystem.",
  appName: "glrk",
}

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  title: {
    default: config.title,
    template: `%s - ${config.title}`
  },
  description: config.description,
  keywords: ["Raj kumar portfolio", "Raj kumar full stack web developer", "Raj kumar full stack developer", "Raj kumar MERN stack developer", "React dev", "Node.js dev", "Next.js dev", "MERN stack dev", "Full stack dev", "Web developer"],
  authors: [{ name: config.name, url: config.url }],
  applicationName: config.appName,
  creator: config.name,
  openGraph: {
    url: config.url,
    type: "website",
    title: config.title,
    locale: "en_IN",
    siteName: config.appName,
    description: config.description,
    images: [{
      url: "/imgs/og_image.png",
      width: 1200,
      height: 630,
      alt: "Raj kumar"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    site: `@${config.appName}`,
    creator: "@glrajkumar01",
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
      <body className="bg-primary-foreground text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
