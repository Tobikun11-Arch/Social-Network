'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import Link from 'next/link';
import {handleLogin} from '../homepageController';
import {loginUser} from '../homepageModel';
import {formSchema} from '../schemas/auth/loginSchema';
import {FormLogin} from '../homepageController';
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

interface Field {
  name: 'Email' | 'Password';
  label: string;
  type: 'email' | 'password';
}

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: '',
      Password: ''
    }
  });

  const fields: Field[] = [
    {name: 'Email', label: 'Email or phone number', type: 'email'},
    {name: 'Password', label: 'Password', type: 'password'}
  ] as const;

  const onSubmit = (rawData: FormLogin) => {
    const validatation = handleLogin(rawData);

    if (!validatation.success) {
      console.error('Validation failed:', validatation.errors);
      return;
    }

    const response = loginUser(validatation.data);
    console.log('Login response:', response);
  };

  return (
    <div className="flex-col w-full">
      <aside className="bg-white p-8 rounded-lg shadow-lg w-full xl:w-3/4 xl:mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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

            <Button
              type="submit"
              className="w-full hover:bg-blue-800 bg-blue-600 text-semibold text-white h-12"
            >
              Login
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
      </aside>

      <p className="text-center mt-5">
        <span className="font-bold">Create a Page</span> for a celebrity, brand
        or business.
      </p>
    </div>
  );
}
