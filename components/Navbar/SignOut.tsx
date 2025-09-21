'use client'

import { SignOutButton } from '@clerk/nextjs'
import { useToast } from "@/hooks/use-toast"


import React from 'react'

const SignOut = () => {
     const { toast } = useToast()

     const handleLogout = () => {
          toast({ description: "You have been logged out." })
     }

     return (
          <SignOutButton redirectUrl='/'>
               <button className="w-full text-left" onClick={handleLogout}>Logout</button>
          </SignOutButton>
     )
}

export default SignOut