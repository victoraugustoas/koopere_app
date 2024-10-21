import {HttpException} from './http.exception';

export class HttpUserException extends HttpException {
  constructor(readonly message: string, readonly statusCode: number) {
    super();
  }
}
