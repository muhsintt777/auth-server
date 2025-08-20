import { z } from 'zod';

import { REGEX } from 'configs/constants';

export const LoginReqSchema = z.object({
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
});
