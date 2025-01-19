export interface AngularQueryParams {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}
export interface QueryParams extends AngularQueryParams {
  search: string;
}
