'use client';

import React from 'react';
import Footer from '../../footer/Footer';
import {FormRegister} from '../../homepage/schemas/auth/registerSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {registerSchema} from '../../homepage/schemas/auth/registerSchema';
import Link from 'next/link';

interface Field {
  name: 'first_name' | 'last_name';
  label: string;
  type: 'text';
}

export default function SignUpForm() {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: '',
      last_name: ''
    }
  });

  const fields: Field[] = [
    {name: 'first_name', label: 'First name', type: 'text'},
    {name: 'last_name', label: 'Last name', type: 'text'}
  ] as const;

  const onSubmit = (rawData: FormRegister) => {
    // Handle sign-up logic here
    console.log('Sign-up data:', rawData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow flex-col bg-gray-100 flex items-center justify-center p-4 md:p-14">
        <h1 className="text-blue-600 text-5xl mb-5 font-bold">
          Social Networks
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-80 bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-center font-semibold text-2xl">
              Create a new account
            </p>
            <p className="text-center">Its quick and easy.</p>
            <hr className="-mx-6" />
            <div className="flex gap-4">
              {fields.map(fieldDef => (
                <FormField
                  key={fieldDef.name}
                  control={form.control}
                  name={fieldDef.name}
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type={fieldDef.type}
                          required
                          placeholder={fieldDef.label}
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <p>birthday</p>

            <Button
              type="submit"
              className="w-full hover:bg-blue-800 bg-blue-600 text-semibold text-white h-12"
            >
              sign up
            </Button>
            <Link href="" className="block text-blue-600 text-center">
              Forgot Password?
            </Link>
            <hr className=" mb-8 mt-8" />
            <div className="flex justify-center items-center">
              <Link
                href={'/sign-up'}
                className="rounded-md flex justify-center items-center w-full lg:w-3/4 hover:bg-green-600 bg-green-600 text-semibold text-white h-12"
              >
                Create new account
              </Link>
            </div>
          </form>
        </Form>
      </section>
      <Footer />
    </div>
  );
}
