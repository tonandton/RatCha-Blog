"user client"

import React from 'react'
import { AlignLeft } from 'lucide-react'
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserIcon from './UserIcon'
import Link from 'next/link'
import { links } from '@/utils/links'
import { Button } from '../ui/button'



const DropdownListMenu = () => {
     return (
          <DropdownMenu>
               <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                         <AlignLeft />
                         <UserIcon />
                    </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                    <DropdownMenuLabel> My Account</DropdownMenuLabel>
                    {
                         links.map((link, i) => {
                              return (
                                   <DropdownMenuItem key={i}><Link href={link.href}>{link.label}</Link> </DropdownMenuItem>)
                         })
                    }
               </DropdownMenuContent>
          </DropdownMenu>
     )
}

export default DropdownListMenu