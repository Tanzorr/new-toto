import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { VaultsState } from '../../../../../../store/valuts/vaults-reducers';
import { deleteVault, addVault, updateVault } from '../../../../../../store/valuts/vaults-actions';
import { vaultSelector } from '../../../../../../store/valuts/vautls-selecotors';
import { CreateVault, Vault } from '../../../../../../models/vault';
import { selectLoggedUser } from '../../../../../../store/auth/auth-selectors';
import { AuthState } from '../../../../../../store/auth/auth-reducers';

@Injectable({
  providedIn: 'root',
})
export class VaultService {
  vault$ = this.store.select(vaultSelector);
  loggedUser$ = this.authStore.select(selectLoggedUser);
  constructor(
    private store: Store<VaultsState>,
    private authStore: Store<AuthState>
  ) {}

  addVault(vaultData: CreateVault): void {
    this.store.dispatch(addVault({ vaultData }));
  }

  deleteVault(id: Vault['id']): void {
    this.store.dispatch(deleteVault({ id }));
  }

  updateVault(vault: Vault): void {
    this.store.dispatch(updateVault({ vault }));
  }
}
