export abstract class HttpClient {
  abstract get<T>(url: string): Promise<T>;
  abstract post<T>(url: string, body: {[key: string]: any}): Promise<T>;
}
