import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../store/auth/auth-reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store<AuthState>) {}

  logout() {
    this.store.dispatch({ type: '[Auth] Logout' });
  }
}
