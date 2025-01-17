import { PasswordState } from './passwords-reducers';

export const passwordsSelector = (state: PasswordState) => {
  return state.passwordsState?.passwords;
};
