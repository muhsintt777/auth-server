import { model, Schema, SchemaTypes } from 'mongoose';

import { getCommonJsonTransformConfig } from 'utils/common';
import { Crypto } from 'utils/crypto';

import { UserCreateAttributes } from './user';

const userSchema = new Schema<UserCreateAttributes>(
  {
    email: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    password: {
      type: SchemaTypes.String,
      required: true,
    },
    fullName: {
      type: SchemaTypes.String,
      required: true,
    },

    refreshToken: {
      type: SchemaTypes.String,
      default: null,
    },
  },
  {
    timestamps: true,

    // calling .lean() on document will cause issues with this config!!
    toJSON: getCommonJsonTransformConfig((_doc: any, ret: any) => {
      delete ret.password;
      delete ret.refreshToken;
    }),
  },
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await Crypto.hashString(this.password);
  next();
});

export const UserModel = model('User', userSchema);
