import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/cutom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check if headers have already been sent
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  console.error(err); // Log the error for debugging

  res.status(500).json({
    errors: [{ message: 'Something went wrong' }],
  });
};
