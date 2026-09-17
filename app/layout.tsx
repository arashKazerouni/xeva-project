import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "XEVA — A Stellar asset with a sharper edge",
  description: "XEVA is a community-led Stellar asset built for fast, borderless value.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
