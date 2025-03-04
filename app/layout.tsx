import type { Metadata } from "next"
import {
  Work_Sans,
  Cardo,
  Great_Vibes,
  Edu_VIC_WA_NT_Beginner,
} from "next/font/google"
import "./(root)/globals.css"
import { cn } from "@/lib/utils"
import { ActiveProvider } from "@/context"
import { Toaster } from "@/components/ui/toaster"

const sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700", "100", "200", "300", "500", "600", "800", "900"],
})
const cardo = Cardo({
  subsets: ["latin"],
  variable: "--font-cardo",
  weight: ["400", "700"],
})
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
})

const edu = Edu_VIC_WA_NT_Beginner({
  subsets: ["latin"],
  variable: "--font-edu",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "The Wedding Of Iqbal and Lisa",
  description: "Undangan Pernikahan Iqbal & Lisa",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-cardo text-main-text antialiased", [
          sans.variable,
          cardo.variable,
          greatVibes.variable,
          edu.variable,
        ])}
      >
        <ActiveProvider>{children}</ActiveProvider>
        <Toaster />
      </body>
    </html>
  )
}
