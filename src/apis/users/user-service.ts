import { CustomError } from 'utils/error';

import { UserModel } from './user-model';

export class UserService {
  static async getUser(id: string) {
    const result = await UserModel.findById(id);
    if (!result) throw new CustomError('RESOURCE_NOT_FOUND', 'User not found');
    return result;
  }

  static async createUser(
    email: string,
    password: string,
    fullName: string,
  ): Promise<string> {
    const isEmailExists = await UserModel.exists({ email });

    if (isEmailExists) {
      throw new CustomError('RESOURCE_CONFLICT', 'Email already exists');
    }

    const result = await UserModel.create({
      email,
      password,
      fullName,
      refreshToken: null,
    });

    return result._id.toString();
  }

  static async deleteUser(id: string): Promise<string> {
    const result = await UserModel.findByIdAndDelete(id);
    if (!result) throw new CustomError('RESOURCE_NOT_FOUND', 'User not found');
    return result._id.toString();
  }
}
