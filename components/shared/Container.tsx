"use client"

import { useActiveContext } from "@/context"
import { cn } from "@/lib/utils"

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const { isActive } = useActiveContext()

  return (
    <main
      className={cn(
        "relative",
        isActive && "max-h-svh min-h-svh overflow-hidden",
        className,
      )}
    >
      {children}
    </main>
  )
}
export default Container
