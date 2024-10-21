import {UrlBuilder} from '../../utils/url';

export class Endpoints {
  // base url
  private static productionHost = 'koopere.homepilachu.online';

  static url = UrlBuilder.https(this.productionHost).make({pathJoin: ['api']});

  static generalTimeout = 5000;
}
