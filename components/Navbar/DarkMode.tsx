"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"


export function DarkMode() {
     const { theme, setTheme } = useTheme()
     const [mounted, setMounted] = useState(false)

     useEffect(() => setMounted(true), [])
     if (!mounted) return null

     const toggleTheme = () => {
          setTheme(theme === "dark" ? "light" : "dark")
     }

     return (
          <Button
               onClick={toggleTheme}
               variant="outline"
               size="icon"
               className="
        rounded-xl border-none 
        bg-[var(--accent)] text-[var(--background)] 
        hover:bg-[var(--accent2)] 
        transition-colors cursor-pointer
      "
          >
               <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "hidden" : ""}`} />
               <Moon className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "" : "hidden"}`} />
               <span className="sr-only">Toggle theme</span>
          </Button>
     )
}
