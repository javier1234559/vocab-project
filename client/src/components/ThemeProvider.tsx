'use client'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from '@nextui-org/react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}