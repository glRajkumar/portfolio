import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/provider";

export const metadata: Metadata = {
  title: "Portfolio - Raj kumar",
  description: "",
}

function RootLayout({ children }: readOnlyChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-primary text-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
