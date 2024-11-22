import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { VaultsState } from '../../../../../store/valuts/vaults-reducers';
import { Vault } from '../../../../../models/vault';
import { getVault } from '../../../../../store/valuts/vaults-actions';

@Injectable({
  providedIn: 'root',
})
export class VaultService {}
