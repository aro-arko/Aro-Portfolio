/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { TGenericErrorResponse } from '../interface/error';

/* eslint-disable @typescript-eslint/no-unused-vars */
const handleDuplicateError = (error: any): TGenericErrorResponse => {
  const statusCode = 400;
  return {
    statusCode,
    message: 'Email already exists. Please use different email',
  };
};

export default handleDuplicateError;
