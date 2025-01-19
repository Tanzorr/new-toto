import { User } from '../../models/user';
import { createReducer, on } from '@ngrx/store';
import { loginFail, loginSuccess, logoutFailure, logoutSuccess } from './auth-actions';

export interface AuthStateModel {
  isAuthenticated: boolean;
  authToken: string;
  loggedUser: User | null;
  errorMessage: string | null;
}

export const initialState: AuthStateModel = {
  isAuthenticated: false,
  authToken: '',
  loggedUser: null,
  errorMessage: null,
};

export interface AuthState {
  authState: AuthStateModel;
}

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { value }) => ({
    ...state,
    isAuthenticated: true,
    authToken: value.authToken,
    loggedUser: value.loggedUser,
    errorMessage: null, // Очищення помилки
  })),

  on(loginFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),

  on(logoutSuccess, (state) => ({
    ...state,
    isAuthenticated: false,
    authToken: '',
    loggedUser: null,
    errorMessage: null, // Очищення помилки
  })),

  on(logoutFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  }))
);
