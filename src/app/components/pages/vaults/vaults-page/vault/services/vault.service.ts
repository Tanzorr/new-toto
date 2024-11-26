import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { VaultsState } from '../../../../../../store/valuts/vaults-reducers';
import { deleteVault, addVault, updateVault } from '../../../../../../store/valuts/vaults-actions';
import { vaultSelector } from '../../../../../../store/valuts/vautls-selecotors';
import { CreateVault, Vault } from '../../../../../../models/vault';

@Injectable({
  providedIn: 'root',
})
export class VaultService {
  vault$ = this.store.select(vaultSelector);
  constructor(private store: Store<VaultsState>) {}

  addVault(vaultData: CreateVault): void {
    this.store.dispatch(addVault({ value: vaultData }));
  }

  deleteVault(id: Vault['id']): void {
    this.store.dispatch(deleteVault({ id }));
  }

  updateVault(vault: Vault): void {
    this.store.dispatch(updateVault({ value: vault }));
  }
}
