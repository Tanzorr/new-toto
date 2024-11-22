import { VaultsState } from './vaults-reducers';

export const vaultsSelector = (state: VaultsState) => state.vaultsState.paginationResponse;
export const vaultSelector = (state: VaultsState) => state.vaultsState.vault;
