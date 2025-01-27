import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/auth/auth-reducers';
import { selectLoggedUser } from '../../store/auth/auth-selectors';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  loggedUser$: Observable<User | null> = this.store.select(selectLoggedUser);
  constructor(private store: Store<AuthState>) {}
}
