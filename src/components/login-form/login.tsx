'use client';
import {FC} from 'react';

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Mail} from 'lucide-react';
import {Link} from '@tanstack/react-router';
import {PasswordInput} from './pass-input';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export const Login: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem className="my-4">
                <FormControl>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Mail color="#828282" />
                    </div>
                    <Input placeholder="Email" {...field} className="pl-14" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem className="mt-4 mb-2">
                <FormControl>
                  <div className="relative">
                    <PasswordInput
                      placeholder="Password"
                      {...field}
                      className="pl-14"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="w-full text-[#3949AB] font-primaryRegular">
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#9ba4d5] rounded-full font-primaryRegular text-white text-[14px] hover:bg-slate-400 mt-6">
            Log in
          </Button>
        </form>
      </Form>
    </>
  );
};
