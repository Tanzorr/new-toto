import { VaultsState } from './vaults-reducers';

export const vaultsSelector = (state: VaultsState) => state.vaultsState.paginationResponse;
