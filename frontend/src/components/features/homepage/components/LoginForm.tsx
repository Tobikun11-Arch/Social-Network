"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"

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

const formSchema = z.object({
  Email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

interface Field {
  name: "Email" | "Password"
  label: string
  type: "email" | "password" 
}


export default function LoginForm() {
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

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data)
    // Seperate this logic on homepageController
  }

  return (
    <aside className='bg-white p-8 rounded-lg shadow-lg w-full'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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

        <Button type="submit" className="w-full bg-blue-600 text-semibold text-white h-12">Login</Button>
        <Link href="" className="block text-blue-500 text-center">Forgot Password</Link>
        <hr className=" mb-8 mt-8"/>
        <Button type="submit" className="w-full bg-green-600 text-semibold text-white h-12">Create account</Button>
      </form>
    </Form>
    </aside>
  )
}