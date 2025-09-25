import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { create } from 'domain'

const createProfileAction = async (formData: FormData) => {
     'use server'
     const firstName = formData.get('firstName') as string
     // Validate
     // Inset to db
     // return
     console.log("create profile action", firstName)
}

const CreateProfile = () => {
     return (
          <section>
               <h1 className="text-2xl font-semibold mb-8 capitalize">new user </h1>
               <div className="border-none bg-white/30 p-8 rounded max-w-lg">
                    <form action={createProfileAction}>
                         <div className="mb-2">
                              <Label htmlFor='firstName'>First Name</Label>
                              <Input name="firstName" type="text" className="rounded" />
                         </div>
                         <Button type="submit" size="lg" className="rounded ">Create Profile</Button>
                    </form>
               </div>
          </section>
     )
}

export default CreateProfile