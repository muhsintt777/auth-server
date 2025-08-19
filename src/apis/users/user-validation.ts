import { z } from 'zod';

import { REGEX } from 'configs/constants';

export const CreateUserReqSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .regex(REGEX.email, { message: 'Email is not valid' }),
  password: z
    .string()
    .trim()
    .min(1, { message: 'Password is required' })
    .regex(REGEX.password, { message: 'Password is not valid' }),
  fullName: z
    .string()
    .trim()
    .min(1, { message: 'Full name is required' })
    .regex(REGEX.fullName, { message: 'Full name is not valid' }),
});
export type CreateUserReqType = z.infer<typeof CreateUserReqSchema>;

export const UserIdSchema = z
  .string()
  .trim()
  .min(1, { message: 'User ID is required' });
