"use client"

import React from 'react'
import Footer from '../../footer/Footer'
import { FormLogin } from '../../homepage/homepageController'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from '../../homepage/schema'
import Link from 'next/link'

interface Field {
  name: "Email" | "Password"
  label: string
  type: "email" | "password" 
}

export default function SignUpForm() {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
      Password: "",
    },
  })

  const fields: Field[] = [ 
    { name: "Email", label: "Email or phone number", type: "email" },
    { name: "Password", label: "Password", type: "password" } 
  ] as const

  const onSubmit = (rawData: FormLogin) => {
    // Handle sign-up logic here  
    console.log("Sign-up data:", rawData);
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <section className='flex-grow flex-col bg-gray-100 flex items-center justify-center p-4 md:p-14'>
      <h1>Facebook</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-80 bg-white p-6 rounded-lg shadow-md">
        <p className='text-center'>Create a new account</p>
        {fields.map((fieldDef) => (
          <FormField
          key={fieldDef.name}
          control={form.control}
          name={fieldDef.name}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type={fieldDef.type} required placeholder={fieldDef.label} {...field} className="h-12"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        ))}

        <Button type="submit" className="w-full hover:bg-blue-800 bg-blue-600 text-semibold text-white h-12">Login</Button>
        <Link href="" className="block text-blue-600 text-center">Forgot Password?</Link>
        <hr className=" mb-8 mt-8"/>
        <div className="flex justify-center items-center">
          <Link href={"/sign-up"} className="rounded-md flex justify-center items-center w-full lg:w-3/4 hover:bg-green-600 bg-green-600 text-semibold text-white h-12">
            Create new account
          </Link>
        </div>
      </form>
    </Form>
      </section>
      <Footer />
    </div>
  )
}