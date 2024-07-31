"use client"

import { useActiveContext } from "@/context"
import { cn } from "@/lib/utils"

const Container = ({ children }: { children: React.ReactNode }) => {
  const { isActive } = useActiveContext()

  return (
    <main className={cn("relative", isActive && "max-h-svh overflow-hidden")}>
      {children}
    </main>
  )
}
export default Container
