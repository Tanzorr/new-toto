import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PasswordState } from '../../../../../../store/passwords/passwords-reducers';
import { passwordsSelector } from '../../../../../../store/passwords/password-selecotors';
import { Password } from '../../../../../../models/password';
import {
  addPassword,
  deletePassword,
  updatePassword,
  searchPassword,
  getPasswordsSuccess,
} from '../../../../../../store/passwords/passwords-actions';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  passwords$ = this.store.select(passwordsSelector);
  constructor(private store: Store<PasswordState>) {}

  deletePassword(id: Password['id']): void {
    this.store.dispatch(deletePassword({ id }));
  }

  addPassword(passwordData: any) {
    this.store.dispatch(addPassword({ value: passwordData }));
  }

  updatePassword(passwordData: Password) {
    this.store.dispatch(updatePassword({ value: passwordData }));
  }

  searchPassword(searchTerm: string) {
    this.store.dispatch(searchPassword({ value: searchTerm }));
  }
}
