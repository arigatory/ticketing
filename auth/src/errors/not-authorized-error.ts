import { CustomError } from "./cutom-error";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Not Authorized");

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: "Not authorized" }];
  }
}