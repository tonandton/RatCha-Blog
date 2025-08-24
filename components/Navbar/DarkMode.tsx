"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DarkMode() {
     const { theme, setTheme } = useTheme()

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

          // <DropdownMenu >
          //      <DropdownMenuTrigger asChild>
          //           <Button variant="outline" size="icon" className="rounded-xl border-none border-[var(--accent)] bg-[var(--accent)] hover:bg-[var(--accent2)] cursor-pointer">
          //                <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
          //                <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block transition-all" />
          //                <span className="sr-only outline">Toggle theme</span>
          //           </Button>
          //      </DropdownMenuTrigger>
          //      <DropdownMenuContent align="end" className="rounded-xl border-none ">
          //           <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
          //                Light
          //           </DropdownMenuItem>
          //           <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
          //                Dark
          //           </DropdownMenuItem>
          //           {/* <DropdownMenuItem onClick={() => setTheme("system")}>
          //                System
          //           </DropdownMenuItem> */}
          //      </DropdownMenuContent>
          // </DropdownMenu>
     )
}
