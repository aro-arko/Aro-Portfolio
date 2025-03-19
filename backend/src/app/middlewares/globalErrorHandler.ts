/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ZodError } from 'zod';
import { ErrorRequestHandler } from 'express';
import handleZodError from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';
import handleDuplicateError from '../errors/handleDuplicateError';
import handleTokenError from '../errors/handleTokenError';
import handleCastError from '../errors/handleCastError';
import AppError from '../errors/AppError';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong';

  //   handle validation errors
  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    message = simplifiedError?.message;
  } else if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  } else if (error?.code === 11000) {
    const simplifiedError = handleDuplicateError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  } else if (
    error.name === 'TokenExpiredError' ||
    error.name === 'JsonWebTokenError'
  ) {
    const simplifiedError = handleTokenError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error?.message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    error: {
      details: error,
    },
    stack: config.node_env === 'development' ? error?.stack : null,
  });

  return;
};

export default globalErrorHandler;
