import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../store/auth/auth-reducers';
import { LocalStorageService } from '../../../../services/storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private store: Store<AuthState>,
    private storageService: LocalStorageService
  ) {}

  logout() {
    this.store.dispatch({ type: '[Auth] Logout' });
    this.storageService.delete('logged_user');
    this.storageService.delete('access_token');
  }
}
