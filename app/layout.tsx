import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Raj kumar",
  description: "",
}

function RootLayout({ children }: readOnlyChildren) {
  return (
    <html lang="en">
      <body className="bg-primary text-primary-foreground">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
