import { User } from './user';

export interface LoginResponse {
  authToken: string;
  loggedUser: User;
  original?: {
    message: string;
  };
}
