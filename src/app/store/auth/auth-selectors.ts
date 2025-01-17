import { AuthState } from './auth-reducers';

export const selectAccessToken = (state: AuthState) => state.authState.authToken;

export const selectLoggedUser = (state: AuthState) => state.authState.loggedUser;
