import { Request, Response } from 'express';

import { ApiResponse } from 'utils/api-response';

import { UserService } from './user-service';
import { CreateUserReqSchema, UserIdSchema } from './user-validation';

export class UserController {
  static async getCurrentUser(req: Request, res: Response) {
    const userID = req.token?.userId as string;
    const result = await UserService.getUser(userID);
    res.status(200).json(new ApiResponse(result));
  }

  static async getUser(req: Request, res: Response) {
    const userID = UserIdSchema.parse(req.params.id);
    const result = await UserService.getUser(userID);
    res.status(200).json(new ApiResponse(result));
  }

  static async createUser(req: Request, res: Response) {
    const { email, password, fullName } = CreateUserReqSchema.parse(req.body);

    const userID = await UserService.createUser(email, password, fullName);

    res.status(201).json(new ApiResponse({ id: userID }, 'User created'));
  }

  static async deleteUser(req: Request, res: Response) {
    const id = UserIdSchema.parse(req.params.id);
    const userID = await UserService.deleteUser(id);
    res.status(200).json(new ApiResponse({ id: userID }, 'User deleted'));
  }
}
