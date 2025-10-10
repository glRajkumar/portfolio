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
  title: config.title,
  description: config.description,
  keywords: ["Raj kumar portfolio", "Raj kumar full stack web developer", "Raj kumar full stack developer", "Raj kumar MERN stack developer", "React dev", "Node.js dev", "Next.js dev", "MERN stack dev", "Full stack dev", "Web developer"],
  authors: [{ name: config.name, url: config.url }],
  applicationName: config.appName,
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    locale: "en_IN",
    type: "website",
    siteName: config.appName,
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    site: `@${config.appName}`,
    creator: "@glrajkumar01",
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
