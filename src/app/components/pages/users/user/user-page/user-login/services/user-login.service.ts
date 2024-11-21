import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../../../../store/auth/auth-reducers';
import { login } from '../../../../../../../store/auth/auth-actions';
import { ILoginData } from '../../../../../../../models/ilogin-data';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  constructor(private store: Store<AuthState>) {}

  login(data: ILoginData) {
    this.store.dispatch(login({ value: data }));
  }
}
