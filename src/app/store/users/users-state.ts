import { User } from '../../models/user';
import { PaginatedUsersResponse } from '../../models/paginate-users-response';

export const initialPaginationResponse: PaginatedUsersResponse = {
  current_page: 1,
  data: [],
  first_page_url: '',
  from: 1,
  last_page: 1,
  last_page_url: '',
  next_page_url: null,
  links: [],
  path: '',
  per_page: 0,
  prev_page_url: null,
  to: 1,
  total: 0,
};

export const initialUser: User = {
  id: '1',
  name: 'User 1',
  email: 'email@ukr.net',
  password: 'password',
  password_confirmation: 'password',
};

export const initialState = {
  user: null as User | null,
  paginationResponse: initialPaginationResponse,
  errorMessage: null as string | null,
};
