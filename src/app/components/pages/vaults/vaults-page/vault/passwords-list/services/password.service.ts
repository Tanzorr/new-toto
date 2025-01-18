import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PasswordState } from '../../../../../../../store/passwords/passwords-reducers';
import { passwordsSelector } from '../../../../../../../store/passwords/password-selecotors';
import { CreatePassword, Password } from '../../../../../../../models/password';
import {
  addPassword,
  deletePassword,
  updatePassword,
  searchPassword,
  getPasswordsSuccess,
} from '../../../../../../../store/passwords/passwords-actions';
import { VaultService } from '../../services/vault.service';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  passwords$ = this.store.select(passwordsSelector);
  vault$ = this.vaultService.vault$;
  constructor(
    private store: Store<PasswordState>,
    private vaultService: VaultService
  ) {}

  deletePassword(id: Password['id']): void {
    this.store.dispatch(deletePassword({ id }));
  }

  addPassword(passwordData: CreatePassword) {
    this.store.dispatch(addPassword({ createPassword: passwordData }));
  }

  updatePassword(passwordData: Password) {
    this.store.dispatch(updatePassword({ password: passwordData }));
  }

  searchPassword(searchTerm: string) {
    this.store.dispatch(searchPassword({ value: searchTerm }));
  }
}
