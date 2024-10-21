import {Endpoints} from '../../global/http/endpoints';
import {UrlBuilder} from '../../utils/url';

export class QrCodeEndpoints {
  static qrCode: UrlBuilder = Endpoints.url.make({pathJoin: ['qrcode']});
}
