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
import {PasswordInput} from '../login-form/pass-input';
import {registerFormSchema} from '@/schemas/formSchema';
import {useAPIRegister} from '@/api/authentication/authentication';
import {toast} from 'sonner';
import {useNavigate} from '@tanstack/react-router';

export const Register: FC = () => {
  const navigate = useNavigate();
  const registrationMutate = useAPIRegister({
    mutation: {
      onSuccess: () => {
        toast.success('Registration successful');
        navigate({to: '/'});
      },
      onError: error => {
        console.log('Error while trying to register', error);
        toast.error('Failed to register user');
      },
    },
  });
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    values.username = values.email;
    registrationMutate.mutate({data: values});
    console.log(values);
    form.reset();
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({field}) => (
              <FormItem className="mt-4 mb-2">
                <FormControl>
                  <div className="relative">
                    <PasswordInput
                      placeholder="Confirm Password"
                      {...field}
                      className="pl-14"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-[#9ba4d5] rounded-full font-primaryRegular text-white text-[14px] hover:bg-slate-400 mt-6">
            Sign Up
          </Button>
        </form>
      </Form>
    </>
  );
};
