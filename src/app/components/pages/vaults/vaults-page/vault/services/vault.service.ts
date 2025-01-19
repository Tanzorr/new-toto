import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { VaultsState } from '../../../../../../store/valuts/vaults-reducers';
import { deleteVault, addVault, updateVault } from '../../../../../../store/valuts/vaults-actions';
import { vaultSelector } from '../../../../../../store/valuts/vautls-selecotors';
import { CreateVault, Vault } from '../../../../../../models/vault';
import { selectLoggedUser } from '../../../../../../store/auth/auth-selectors';
import { AuthState } from '../../../../../../store/auth/auth-reducers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VaultService {
  vault$: Observable<Vault | null> = this.store.select(vaultSelector);

  constructor(private store: Store<VaultsState>) {}

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
