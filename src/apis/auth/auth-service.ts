import { UserModel } from 'apis/users/user-model';
import { Crypto } from 'utils/crypto';
import { CustomError } from 'utils/error';
import { Token } from 'utils/token';

interface EmailLogin {
  type: 'EMAIL';
  email: string;
  password: string;
}

type LoginParams = EmailLogin;

export class AuthService {
  static async login(loginDetails: LoginParams) {
    const { email, password } = loginDetails;
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new CustomError('AUTH_UNAUTHORIZED', 'Invalid credentials');
    }

    const isPasswordValid = Crypto.compare(user.password, password);
    if (!isPasswordValid) {
      throw new CustomError('AUTH_UNAUTHORIZED', 'Invalid credentials');
    }

    const accessToken = Token.createAccessToken({
      userId: user._id.toString(),
    });
    const refreshToken = Token.createRefreshToken({
      userId: user._id.toString(),
    });
    await UserModel.findByIdAndUpdate(user._id, { refreshToken: refreshToken });
    return { accessToken, refreshToken };
  }

  static async refreshToken(
    userID: string,
    refreshToken: string,
  ): Promise<string> {
    const user = await UserModel.findById(userID);
    if (user?.refreshToken !== refreshToken)
      throw new CustomError('AUTH_UNAUTHORIZED', 'Unauthorized');

    return Token.createAccessToken({ userId: user._id.toString() });
  }

  static async logout(userID: string) {
    await UserModel.findByIdAndUpdate(userID, { refreshToken: null });
  }
}
