/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import httpStasus from 'http-status';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStasus.NOT_FOUND).json({
    success: false,
    message: 'API endpoint not found',
    error: '',
  });
};

export default notFound;
