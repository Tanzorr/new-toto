export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  password_confirmation?: string;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
}

export type Users = User[];
export type UserId = User['id'];
export type UserCreateData = User;

interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginatedUsersResponse {
  current_page: number;
  data: Users;
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

export interface CreateUserResponse {
  message: string;
  user: User;
}
