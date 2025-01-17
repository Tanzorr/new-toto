import { createAction, props } from '@ngrx/store';
import { CreateVault, PaginatedVaultsResponse, Vault } from '../../models/vault';
import { QueryParams } from '../../models/query-params';

export const getVaults = createAction(
  '[Vaults] Get Vaults',
  props<{ queryParams?: QueryParams }>()
);

export const getVaultsSuccess = createAction(
  '[Vaults] Get Vaults Success',
  props<{ paginatedVaults: PaginatedVaultsResponse }>()
);

export const getVaultsFailure = createAction(
  '[Vaults] Get Vaults Failure',
  props<{ error: string }>()
);

export const addVault = createAction('[Vaults] Add Vault', props<{ vaultData: CreateVault }>());

export const addVaultSuccess = createAction('[Vaults] Add Vault Success');

export const addVaultFailure = createAction(
  '[Vaults] Add Vault Failure',
  props<{ error: string }>()
);

export const getVault = createAction('[Vaults] Get Vault', props<{ id: string | number }>());

export const getVaultSuccess = createAction(
  '[Vaults] Get Vault Success',
  props<{ vault: Vault }>()
);

export const getVaultFailure = createAction(
  '[Vaults] Get Vault Failure',
  props<{ error: string }>()
);

export const updateVault = createAction('[Vaults] Update Vault', props<{ vault: Vault }>());

export const updateVaultSuccess = createAction(
  '[Vaults] Update Vault Success',
  props<{ updatedVault: Vault }>()
);
export const deleteVault = createAction('[Vaults] Delete Vault', props<{ id: Vault['id'] }>());

export const deleteVaultSuccess = createAction(
  '[Vaults] Delete Vault Success',
  props<{ deletedVaultId: number }>()
);

export const deleteVaultFailure = createAction(
  '[Vaults] Delete Vault Failure',
  props<{ error: string }>()
);
