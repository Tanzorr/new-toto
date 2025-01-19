import { VaultsStateModel } from './vaults-reducers';

const paginationResponse = {
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
  to: 0,
  total: 0,
};
export const initialState: VaultsStateModel = {
  vault: null,
  vaults: [],
  selectedVault: null,
  paginationResponse: paginationResponse,
  errorMessage: '',
};
