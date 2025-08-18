import { ObjectId } from 'mongoose';

interface UserCreateAttributes {
  email: string;
  password: string;
  fullName: string;
  refreshToken: string | null;
  updatedAt: string;
  createdAt: string;
}

interface User extends UserCreateAttributes {
  _id: ObjectId;
  __v: number;
}
