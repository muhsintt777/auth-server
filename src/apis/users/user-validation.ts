import { z } from 'zod';

import { REGEX } from 'configs/constants';

export const CreateUserReqSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be string',
    })
    .trim()
    .regex(REGEX.email, 'Email is not valid'),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be string',
    })
    .trim()
    .regex(REGEX.password, 'Password is not valid'),
  fullName: z
    .string({
      required_error: 'Full name is required',
      invalid_type_error: 'Full name must be string',
    })
    .trim()
    .regex(REGEX.fullName, 'Full name is not valid'),
});
export type CreateUserReqType = z.infer<typeof CreateUserReqSchema>;
