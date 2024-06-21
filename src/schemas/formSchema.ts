import {z} from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export type UserData = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z
  .object({
    username: z
      .string()
      .min(4, 'Username must be at least 4 characters')
      .catch('Username'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type RegisterData = z.infer<typeof registerFormSchema>;
