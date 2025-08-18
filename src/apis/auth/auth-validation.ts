import { z } from 'zod';

import { REGEX } from 'configs/constants';

export const LoginReqSchema = z
  .object({
    email: z
      .string()
      .trim()
      .regex(REGEX.email, 'Email is not valid')
      .optional(),
    username: z.string().trim().optional(),
    password: z
      .string()
      .trim()
      .min(1, 'Password is required')
      .regex(REGEX.password, 'Password is not valid'),
  })
  .refine((data) => data.email || data.username, {
    message: 'Either email or username is required',
    path: ['email', 'username'],
  });
