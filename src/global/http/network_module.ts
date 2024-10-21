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
    console.log(value);
    return value;
  }

  _onResponse(value: AxiosResponse) {
    console.log(value);
    return value;
  }

  _onError(config: AxiosError) {
    console.error(config.toJSON());
    return config;
  }
}
