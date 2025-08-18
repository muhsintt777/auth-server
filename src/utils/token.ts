import { sign, verify, type SignOptions } from 'jsonwebtoken';

import { ENV } from 'configs/env';

import { CustomError } from './error';

export interface AccessTokenData {
  userId: string;
}

interface RefreshTokenData {
  userId: string;
}

export class Token {
  static createAccessToken(payload: AccessTokenData) {
    const options: SignOptions = {
      expiresIn: ENV.ACCESS_TOKEN_EXPIRY as SignOptions['expiresIn'],
    };
    return sign(payload, ENV.ACCESS_TOKEN_KEY, options) as string;
  }

  static verifyAccessToken(token: string) {
    try {
      const decoded = verify(token, ENV.ACCESS_TOKEN_KEY);
      return decoded as AccessTokenData;
    } catch (error) {
      throw new CustomError('AUTH_TOKEN_EXPIRED', 'Token expired');
    }
  }

  static createRefreshToken(payload: RefreshTokenData) {
    const options: SignOptions = {
      expiresIn: ENV.REFRESH_TOKEN_EXPIRY as SignOptions['expiresIn'],
    };
    return sign(payload, ENV.REFRESH_TOKEN_KEY, options) as string;
  }

  static verifyRefreshToken(token: string) {
    try {
      const decoded = verify(token, ENV.REFRESH_TOKEN_KEY);
      return decoded as RefreshTokenData;
    } catch (error) {
      throw new CustomError('AUTH_UNAUTHORIZED', 'Invalid token');
    }
  }
}
