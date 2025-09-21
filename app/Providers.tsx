import React from 'react'
import { ThemeProvider } from './theme-provide'
import { Toaster } from "@/components/ui/toaster"

const Providers = ({ children }: { children: React.ReactNode }) => {
     return (
          <>
               <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
               >
                    {children}
                    <Toaster />
               </ThemeProvider>
          </>
     )
}

export default Providers