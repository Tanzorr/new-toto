import { Password } from './password';

export interface Vault {
  id: number;
  user_id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  passwords: Password[];
}

export interface CreateVault {
  user_id: number;
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
