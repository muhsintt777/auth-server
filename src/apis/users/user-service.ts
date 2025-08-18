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
    const [isEmailExists, isUsernameExists] = await Promise.all([
      UserModel.exists({ email }),
    ]);
    if (isEmailExists || isUsernameExists) {
      const errorMessage =
        isEmailExists && isUsernameExists
          ? 'Email and username already exists'
          : isEmailExists
            ? 'Email already exists'
            : 'Username already exists';
      throw new CustomError('RESOURCE_CONFLICT', errorMessage);
    }

    const result = await UserModel.create({
      email,
      username,
      password,
      fullName,
      profileImage,
    });

    return result._id.toString();
  }

  static async deleteUser(id: string): Promise<string> {
    const result = await UserModel.findByIdAndDelete(id);
    if (!result) throw new CustomError('RESOURCE_NOT_FOUND', 'User not found');
    return result._id.toString();
  }
}
