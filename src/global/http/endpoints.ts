import {UrlBuilder} from '../../utils/url';

export class Endpoints {
  // base url
  private static productionUrl = '192.168.68.135:3000';

  static url = UrlBuilder.http(this.productionUrl).make({pathJoin: ['api']});

  static generalTimeout = 5000;
}
