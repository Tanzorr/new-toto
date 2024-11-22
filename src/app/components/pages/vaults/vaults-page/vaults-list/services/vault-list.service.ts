import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getVaults } from '../../../../../../store/valuts/vaults-actions';
import { vaultsSelector } from '../../../../../../store/valuts/vautls-selecotors';

@Injectable({
  providedIn: 'root',
})
export class VaultListService {
  paginatedVaultsResponse$ = this.store.select(vaultsSelector);
  constructor(private store: Store<any>) {}

  getVaults(url?: string | null): void {
    this.store.dispatch(getVaults({ url }));
  }
}
