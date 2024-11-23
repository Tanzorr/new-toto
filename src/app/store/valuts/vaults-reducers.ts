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

export interface VaultsStateModel {
  vault: Vault;
  vaults: Vault[];
  selectedVault: Vault | null;
  paginationResponse: any;
  errorMessage: string;
}

export interface VaultsState {
  vaultsState: VaultsStateModel;
}

const initialState: VaultsStateModel = {
  vault: {
    id: 1,
    name: 'Vault 1',
    description: 'Description 1',
    user_id: 1,
    createdAt: '',
    updatedAt: '',
    passwords: [],
  },
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
    console.log('getVaultSuccess', action);
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
        data: state.paginationResponse.data.map((vault: { id: any }) =>
          vault.id === action.value.id ? action.value : vault
        ),
      },
    };
  }),

  on(deleteVaultFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(deleteVaultSuccess, (state, action) => {
    return {
      ...state,
      paginationResponse: {
        ...state.paginationResponse,
        data: state.paginationResponse.data.filter(
          (vault: { id: number }) => vault.id !== action.id
        ),
      },
    };
  }),

  on(deleteVaultFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  })
);
