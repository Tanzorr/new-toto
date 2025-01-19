export interface AngularQueryParams {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}
export interface AngularQueryParamsOptions {
  fromObject: (params: AngularQueryParams) => string;
}

export interface QueryParams extends AngularQueryParams {
  search: string;
}
