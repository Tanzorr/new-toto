import { Vault } from './vault';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  password_confirmation?: string;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
  vaults?: Vault[];
}

export interface CreateUserResponse {
  message: string;
  user: User;
}
