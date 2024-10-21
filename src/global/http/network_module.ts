import {
  Axios,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {Endpoints} from './endpoints';

export class NetworkModule {
  provideAxios(): Axios {
    const axios = new Axios({
      baseURL: Endpoints.url.str,
      timeout: Endpoints.generalTimeout,
      headers: {'Content-Type': 'application/json'},
      withCredentials: false,
    });

    axios.interceptors.request.use(this._onRequest, this._onError);
    axios.interceptors.response.use(this._onResponse, this._onError);

    return axios;
  }

  _onRequest(value: InternalAxiosRequestConfig) {
    // TODO add here logs
    return value;
  }

  _onResponse(response: AxiosResponse) {
    if (response.data) {
      response.data = JSON.parse(response.data);
    }
    return response;
  }

  _onError(config: AxiosError) {
    // TODO add here logs
    console.error(config.toJSON());
    return config;
  }
}
