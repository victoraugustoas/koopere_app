import {HttpClient} from '../../global/http/http_client';
import {QrCodeDTO} from '../../model/dtos/qrcode';
import {PageableResponse} from '../../utils/pageable';
import {QrCodeEndpoints} from '../endpoints/qrcode.endpoints';

export class QrCodeDataProvider {
  constructor(private readonly httpClient: HttpClient) {}

  async getAllQrCodes(data: {
    page: number;
    limit: number;
  }): Promise<PageableResponse<QrCodeDTO[]>> {
    try {
      const response = await this.httpClient.get<PageableResponse<QrCodeDTO[]>>(
        QrCodeEndpoints.qrCode.withQParams({
          page: data.page ?? 0,
          limit: data.limit ?? 10,
        }).str,
      );
      return response;
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
