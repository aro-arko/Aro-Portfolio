/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TGenericErrorResponse } from '../interface/error';

const handleTokenError = (error: any): TGenericErrorResponse => {
  const statusCode = 401;

  return {
    statusCode,
    message: 'Invalid token or expired token',
  };
};

export default handleTokenError;
