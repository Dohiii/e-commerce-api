import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "./custom-api";

// type BadRequestErrorType = {
//   message?: string;
//   statusCode: StatusCodes
// };

export class BadRequestError extends CustomAPIError {
  statusCode = StatusCodes.BAD_REQUEST;
  constructor(message: string) {
    super(message);
  }
}
