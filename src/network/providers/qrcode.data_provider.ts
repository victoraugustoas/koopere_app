import {HttpClient} from '../../global/http/http_client';
import {QrCodeEndpoints} from '../endpoints/qrcode.endpoints';

export class QrCodeDataProvider {
  constructor(private readonly httpClient: HttpClient) {}

  async getAllQrCodes(data: {page: number; limit: number}): Promise<void> {
    try {
      const response = await this.httpClient.get(
        QrCodeEndpoints.qrCode.withQParams({
          page: data.page ?? 0,
          limit: data.limit ?? 10,
        }).str,
      );
      console.log(response);
      // return TireListDto.fromJson(response);
    } catch (e) {
      throw e;
    }
  }

  async createQrCode(data: {name: string; value: string}): Promise<void> {
    try {
      await this.httpClient.post<void>(QrCodeEndpoints.qrCode.str, data);
    } catch (e) {
      throw e;
    }
  }
}
