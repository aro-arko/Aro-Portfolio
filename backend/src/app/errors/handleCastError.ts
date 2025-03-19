/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TGenericErrorResponse } from '../interface/error';

const handleCastError = (err: any): TGenericErrorResponse => {
  const statusCode = 401;

  return {
    statusCode,
    message: 'Invalid token or expired session',
  };
};

export default handleCastError;
