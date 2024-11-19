export interface ServerError {
  message: string;
  url: string;
  status: number;
  name: string;
  statusText: string;
}
