import { Vault } from '../../models/vault';
import { createReducer, on } from '@ngrx/store';
import {
  addVaultFailure,
  addVaultSuccess,
  deleteVaultFailure,
  deleteVaultSuccess,
  getVaultFailure,
  getVaultsFailure,
  getVaultsSuccess,
  getVaultSuccess,
  updateVaultSuccess,
} from './vaults-actions';

import { deletePasswordSuccess } from '../passwords/passwords-actions';

export interface VaultsStateModel {
  vault: Vault | null;
  vaults: Vault[];
  selectedVault: Vault | null;
  paginationResponse: any;
  errorMessage: string;
}

export interface VaultsState {
  vaultsState: VaultsStateModel;
}

const initialState: VaultsStateModel = {
  vault: null,
  vaults: [],
  selectedVault: null,
  paginationResponse: {
    current_page: 1,
    data: [],
    first_page_url: '',
    from: 1,
    last_page: 1,
    last_page_url: '',
    next_page_url: '',
    links: [],
    path: '',
    per_page: 0,
    prev_page_url: null,
    to: 0,
    total: 0,
  },
  errorMessage: '',
};

export const vaultsReducer = createReducer(
  initialState,
  on(getVaultsSuccess, (state, action) => {
    return {
      ...state,
      paginationResponse: { ...state.paginationResponse, ...(action.value || {}) },
    };
  }),

  on(getVaultsFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(addVaultSuccess, (state, action) => {
    return {
      ...state,
      paginationResponse: {
        ...state.paginationResponse,
        data: [action.value, ...state.paginationResponse.data],
      },
    };
  }),

  on(addVaultFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(getVaultSuccess, (state, action) => {
    return { ...state, vault: action.value };
  }),

  on(getVaultFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(updateVaultSuccess, (state, action) => {
    return {
      ...state,
      paginationResponse: {
        ...state.paginationResponse,
        data: state.paginationResponse.data.map((vault: Vault) =>
          vault.id === action.value.id ? action.value : vault
        ),
      },
      vault: action.value,
    };
  }),

  on(deleteVaultSuccess, (state, action) => {
    return {
      ...state,
      paginationResponse: {
        ...state.paginationResponse,
        data: state.paginationResponse.data.filter((vault: Vault) => vault.id !== action.id),
      },
    };
  }),

  on(deleteVaultFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  })
);
