export class UrlBuilder {
  private constructor(
    readonly host: string,
    readonly pathSegments: string[],
    readonly queryParameters: {[key: string]: string},
  ) {}

  static https(host: string): UrlBuilder {
    return new UrlBuilder(`https://${host}`, [], {});
  }

  static http(host: string): UrlBuilder {
    return new UrlBuilder(`http://${host}`, [], {});
  }
  /// Create uri with path and params
  ///
  /// ```typescript
  /// url.make({pathJoin: ['auth', 'login'], queryParameters: {'query': 'abc'}});
  ///
  /// // for path params, the convention is the string stats with ':'
  /// url.make({pathJoin: ["user", "plan", ":id"]});
  /// ```
  make(data: {
    pathJoin?: string[];
    queryParameters?: {[key: string]: string};
  }): UrlBuilder {
    // const pathName = data.pathJoin?.join('/') ?? '';
    // const query = Object.entries(data.queryParameters ?? {})
    //   .map(([key, value]) => {
    //     return `${key}=${value}`;
    //   })
    //   .join('&');
    // const queryParameters = query ? '' : `?${query}`;

    // const url = `${pathName}${queryParameters}`;

    return new UrlBuilder(
      this.host,
      [...this.pathSegments, ...(data.pathJoin ?? [])],
      {...this.queryParameters, ...data.queryParameters},
    );
  }

  /// Add [queryParameters] in url
  ///
  /// ```dart
  /// url.withQParams({'query': 'abc'});
  /// ```
  withQParams(queryParameters: {[key: string]: any}): UrlBuilder {
    return new UrlBuilder(this.host, this.pathSegments, {
      ...this.queryParameters,
      ...queryParameters,
    });
  }

  /// Replace [pathParameters] in url
  ///
  /// ```dart
  /// url.withPathParams({':id': 'abc', ':proposal_code': '123456'});
  /// ```
  withPathParams(pathParameters: {[key: string]: any}): UrlBuilder {
    const newPathSegments: string[] = this.pathSegments.map(segment => {
      return Object.keys(pathParameters).includes(segment)
        ? pathParameters[segment]!.toString()
        : segment;
    });
    return new UrlBuilder(this.host, newPathSegments, this.queryParameters);
  }

  get str(): string {
    const query = Object.entries(this.queryParameters ?? {})
      .map(([key, value]) => {
        return `${key}=${value}`;
      })
      .join('&');
    const queryParameters = query ? `?${query}` : '';

    return `${this.host}/${this.pathSegments.join('/')}${queryParameters}`;
  }
}
