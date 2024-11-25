import { PasswordState } from './passwords-reducers';

export const passwordsSelector = (state: PasswordState) => {
  return state.passwordsState?.passwords;
};
export const passwordSelector = (state: PasswordState) => state.passwordsState.password;
