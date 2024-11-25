import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { VaultsState } from '../../../../../../store/valuts/vaults-reducers';
import { deleteVault, addVault } from '../../../../../../store/valuts/vaults-actions';
import { vaultSelector } from '../../../../../../store/valuts/vautls-selecotors';
import { Vault } from '../../../../../../models/vault';

@Injectable({
  providedIn: 'root',
})
export class VaultService {
  vault$ = this.store.select(vaultSelector);
  constructor(private store: Store<VaultsState>) {}

  addVault(vaultData: any): void {
    this.store.dispatch(addVault({ value: vaultData }));
  }

  deleteVault(id: Vault['id']): void {
    this.store.dispatch(deleteVault({ id }));
  }
}
