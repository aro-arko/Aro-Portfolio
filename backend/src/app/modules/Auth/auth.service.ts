import AppError from '../../errors/AppError';
import { TUser } from '../User/user.interface';
import User from '../User/user.model';
import httpStatus from 'http-status';
import { createToken } from './auth.utils';
import config from '../../config';
import { TChangePassword } from './auth.interface';
import { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const createUserIntoDB = async (payLoad: TUser) => {
  const userData = { ...payLoad };
  userData.role = 'random';

  const result = await User.create(userData);
  return result;
};

const loginUser = async (userData: Partial<TUser>) => {
  const user = await User.isUserExistsByEmail(userData.email as string);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  const samePassword = await User.isPasswordMatched(
    userData.password as string,
    user.password,
  );

  if (!samePassword) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid password');
  }

  // jwt token generation
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return { accessToken: accessToken };
};

const changePassword = async (
  payLoad: TChangePassword,
  userData: JwtPayload,
) => {
  const user = await User.isUserExistsByEmail(userData.email);
  // console.log(userData);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  if (!(await User.isPasswordMatched(payLoad.oldPassword, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  // hased new password
  const newHashedPassword = await bcrypt.hash(
    payLoad.newPassword,
    Number(config.bcrypt_salt_rounds),
  );

  // console.log(newHashedPassword);

  await User.findOneAndUpdate(
    {
      email: userData.email,
      role: userData.role,
    },
    {
      password: newHashedPassword,
    },
  );

  return null;
};

export const authServices = {
  createUserIntoDB,
  loginUser,
  changePassword,
};
