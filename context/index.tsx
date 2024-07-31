"use client"

import { createContext, useContext, useState } from "react"

interface IActivator {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const ActiveContext = createContext<IActivator | undefined>(undefined)

export const ActiveProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(true)

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ActiveContext.Provider>
  )
}

export const useActiveContext = () => {
  const context = useContext(ActiveContext)

  if (!context)
    throw new Error("useActiveContext must be used within a ActiveProvider")

  return context
}
