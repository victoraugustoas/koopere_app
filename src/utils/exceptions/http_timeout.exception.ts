import {HttpException} from './http.exception';

export class HttpTimeoutException extends HttpException {
  constructor() {
    super();
  }
}
