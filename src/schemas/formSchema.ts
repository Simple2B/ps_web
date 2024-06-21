import {z} from 'zod';

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export type UserData = z.infer<typeof formSchema>;
