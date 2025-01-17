import { User } from '../../models/user';
import { createReducer, on } from '@ngrx/store';
import { loginFail, loginSuccess, logoutFail, logoutSuccess } from './auth-actions';

export interface AuthStateModel {
  isAuthenticated: boolean;
  authToken: string;
  loggedUser: User | null;
  errorMessage: string;
}

export interface AuthState {
  authState: AuthStateModel;
}

const initialState: AuthStateModel = {
  isAuthenticated: false,
  authToken: '',
  loggedUser: null,
  errorMessage: '',
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action: any) => {
    return {
      ...state,
      isAuthenticated: true,
      authToken: action.value.authToken,
      loggedUser: action.value.loggedUser,
    };
  }),

  on(loginFail, (state, action) => {
    return { ...state, errorMessage: action.error };
  }),

  on(logoutSuccess, (state, action) => {
    return {
      ...state,
      isAuthenticated: false,
      authToken: '',
      loggedUser: null,
    };
  }),

  on(logoutFail, (state, action) => {
    return { ...state, errorMessage: action.error };
  })
);
