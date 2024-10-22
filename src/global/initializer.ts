import {QrCodeDataProvider} from '../network/providers/qrcode.data_provider';
import {DependenciInjection} from './container/dependency_injection';
import {InversifyDIProvider} from './container/provider/inversify.provider';
import {TYPES} from './container/types';
import {NetworkModule} from './http/network_module';
import {AxiosHttpClient} from './http/provider/axios_http_client.provider';

export class Initializer {
  dependenciInjection: DependenciInjection = InversifyDIProvider.get();

  async initialize() {
    const axios = new NetworkModule().provideAxios();
    const axiosClient = new AxiosHttpClient(axios);

    // data providers
    this.dependenciInjection.putIfAbsent<QrCodeDataProvider>(
      TYPES.QrCodeDataProvider,
      new QrCodeDataProvider(axiosClient),
    );

    function delay(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    await delay(1000);
  }
}
