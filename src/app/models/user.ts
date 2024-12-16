import { Vault } from './vault';
import { SharedAccess } from './shared-access';

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
  shared_access_id?: SharedAccess['id'] | undefined;
  pivot?: Pivot;
}

export interface CreateUserResponse {
  message: string;
  user: User;
}

type Pivot = {
  user_id: number;
  accessible_id: number;
};
