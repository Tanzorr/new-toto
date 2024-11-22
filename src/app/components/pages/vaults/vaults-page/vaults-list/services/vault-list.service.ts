import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getVault, getVaults } from '../../../../../../store/valuts/vaults-actions';
import { vaultsSelector } from '../../../../../../store/valuts/vautls-selecotors';
import { Vault } from '../../../../../../models/vault';
import { VaultsState } from '../../../../../../store/valuts/vaults-reducers';

@Injectable({
  providedIn: 'root',
})
export class VaultListService {
  paginatedVaultsResponse$ = this.store.select(vaultsSelector);

  constructor(private store: Store<VaultsState>) {}

  getVaults(url?: string | null): void {
    this.store.dispatch(getVaults({ url }));
  }

  getVault(id: Vault['id']): void {
    this.store.dispatch(getVault({ id }));
  }
}
