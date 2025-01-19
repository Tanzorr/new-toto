import { Vault } from '../../models/vault';
import { createReducer, on } from '@ngrx/store';
import {
  addVaultFailure,
  deleteVaultFailure,
  deleteVaultSuccess,
  getVaultFailure,
  getVaultsFailure,
  getVaultsSuccess,
  getVaultSuccess,
  updateVaultSuccess,
} from './vaults-actions';
import { initialState } from './vault-states';

export interface PaginationResponse<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  links: any[];
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface VaultsStateModel {
  vault: Vault | null;
  vaults: Vault[];
  selectedVault: Vault | null;
  paginationResponse: PaginationResponse<Vault>;
  errorMessage: string;
}

export interface VaultsState {
  vaultsState: VaultsStateModel;
}

const updatePaginationResponse = (
  state: VaultsStateModel,
  updates: Partial<PaginationResponse<Vault>>
): PaginationResponse<Vault> => {
  return { ...state.paginationResponse, ...updates };
};

export const vaultsReducer = createReducer(
  initialState,
  on(getVaultsSuccess, (state, action) => ({
    ...state,
    paginationResponse: updatePaginationResponse(state, action.paginatedVaults || {}),
  })),

  on(getVaultsFailure, (state, action) => ({
    ...state,
    errorMessage: action.error,
  })),

  on(addVaultFailure, (state, action) => ({
    ...state,
    errorMessage: action.error,
  })),

  on(getVaultSuccess, (state, action) => ({
    ...state,
    vault: action.vault,
  })),

  on(getVaultFailure, (state, action) => ({
    ...state,
    errorMessage: action.error,
  })),

  on(updateVaultSuccess, (state, action) => ({
    ...state,
    paginationResponse: {
      ...state.paginationResponse,
      data: state.paginationResponse.data.map((vault: Vault) =>
        vault.id === action.updatedVault.id ? action.updatedVault : vault
      ),
    },
    vault: action.updatedVault,
  })),

  on(deleteVaultSuccess, (state, action) => ({
    ...state,
    paginationResponse: {
      ...state.paginationResponse,
      data: state.paginationResponse.data.filter(
        (vault: Vault) => vault.id !== action.deletedVaultId
      ),
    },
  })),

  on(deleteVaultFailure, (state, action) => ({
    ...state,
    errorMessage: action.error,
  }))
);
