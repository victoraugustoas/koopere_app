import {Axios, AxiosError} from 'axios';
import {HttpException} from '../../../utils/exceptions/http.exception';
import {HttpTimeoutException} from '../../../utils/exceptions/http_timeout.exception';
import {HttpUserException} from '../../../utils/exceptions/http_user.exception';
import {HttpClient} from '../http_client';

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly axios: Axios) {}

  async post<T>(url: string, body: {[key: string]: any}): Promise<T> {
    try {
      const response = await this.axios.post<T>(url, body);
      return response.data;
    } catch (error) {
      throw this.buildError(error);
    }
  }

  async get<T>(url: string): Promise<T> {
    try {
      const response = await this.axios.get<T>(url);
      return response.data;
    } catch (error) {
      throw this.buildError(error);
    }
  }

  private buildError(error: any): HttpException {
    if (error instanceof AxiosError) {
      // status code !== 200
      if (error.response) {
        return new HttpUserException(
          error.response.statusText,
          error.response.status,
        );
      } else if (error.request) {
        return new HttpTimeoutException();
      }
    }

    return new HttpException();
  }
}
