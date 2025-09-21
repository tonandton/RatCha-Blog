"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { motion, AnimatePresence } from "framer-motion"


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
        relative
        rounded-xl border-none 
        bg-[var(--accent)] text-[var(--background)] 
        hover:bg-[var(--accent2)] transition-colors cursor-pointer flex items-center justify-center overflow-hidden
      "
          >

               <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                         <motion.div
                              key="moon"
                              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                              animate={{ opacity: 1, rotate: 0, scale: 1 }}
                              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                         >
                              <Moon className="h-[1.2rem] w-[1.2rem]" />
                         </motion.div>
                    ) : (
                         <motion.div
                              key="sun"
                              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                              animate={{ opacity: 1, rotate: 0, scale: 1 }}
                              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                         >
                              <Sun className="h-[1.2rem] w-[1.2rem]" />
                         </motion.div>
                    )}
               </AnimatePresence>

               <span className="sr-only">Toggle theme</span>
          </Button>
     )
}
