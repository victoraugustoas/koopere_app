export interface PageableResponse<T> {
  total: number;
  page: number;
  limit: number;
  data: T;
}
