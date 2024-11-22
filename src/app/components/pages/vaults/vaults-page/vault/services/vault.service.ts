import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { VaultsState } from '../../../../../../store/valuts/vaults-reducers';
import { getVault } from '../../../../../../store/valuts/vaults-actions';
import { vaultSelector } from '../../../../../../store/valuts/vautls-selecotors';
import { Vault } from '../../../../../../models/vault';

@Injectable({
  providedIn: 'root',
})
export class VaultService {
  vault$ = this.store.select(vaultSelector);
  constructor(private store: Store<VaultsState>) {}
}
