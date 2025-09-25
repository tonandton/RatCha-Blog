import React from 'react'
import { Button } from '@/components/ui/button'
import Forminput from '@/components/Form/Forminput'

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
                         <div className="grid md:grid-cols-2 gap-4 mt-4">
                              <Forminput name="firstName" label="test" type="typename" placeholder='Phoc' />
                              <Forminput name="lastName" label="Last name" type="2type" />
                              <Forminput name="email" label="Email" type="email" />
                         </div>
                         <Button type="submit" size="lg" className="rounded ">Create Profile</Button>
                    </form>
               </div>
          </section>
     )
}

export default CreateProfile