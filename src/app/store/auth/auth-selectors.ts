import { AuthState } from './auth-reducers';
import { Observable } from 'rxjs';

export const selectAccessToken = (state: AuthState) => {
  return state.authState.authToken;
};
