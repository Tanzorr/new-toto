import { Password } from './password';
import { User } from './user';
import { SharedAccess } from './shared-access';

export interface Vault {
  id: string;
  user_id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  passwords: Password[];
  accessed_users: User[];
  shared_access: SharedAccess[];
  media?: string | File;
}

export interface CreateVault {
  user_id: string;
  name: string;
  description: string;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginatedVaultsResponse {
  current_page: number;
  data: Vault[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
