import { createAction, props } from '@ngrx/store';

export const getVaults = createAction('[Vaults] Get Vaults', props<{ url?: string | null }>());

export const getVaultsSuccess = createAction(
  '[Vaults] Get Vaults Success',
  props<{ value: any }>()
);

export const getVaultsFailure = createAction(
  '[Vaults] Get Vaults Failure',
  props<{ value: string }>()
);

export const addVault = createAction('[Vaults] Add Vault', props<{ value: any }>());

export const addVaultSuccess = createAction('[Vaults] Add Vault Success', props<{ value: any }>());

export const addVaultFailure = createAction('[Vaults] Add Vault Fail', props<{ value: string }>());

export const getVault = createAction('[Vaults] Get Vault', props<{ id: number }>());

export const getVaultSuccess = createAction('[Vaults] Get Vault Success', props<{ value: any }>());

export const getVaultFailure = createAction('[Vaults] Get Vault Fail', props<{ value: string }>());

export const updateVault = createAction('[Vaults] Update Vault', props<{ value: any }>());

export const updateVaultSuccess = createAction(
  '[Vaults] Update Vault Success',
  props<{ value: any }>()
);

export const updateVaultFailure = createAction(
  '[Vaults] Update Vault Fail',
  props<{ value: string }>()
);
export const deleteVault = createAction('[Vaults] Delete Vault', props<{ id: number }>());

export const deleteVaultSuccess = createAction(
  '[Vaults] Delete Vault Success',
  props<{ id: number }>()
);

export const deleteVaultFailure = createAction(
  '[Vaults] Delete Vault Fail',
  props<{ value: string }>()
);
