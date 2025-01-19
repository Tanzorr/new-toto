import { PasswordState } from './passwords-reducers';

export const passwordsSelector = (state: PasswordState) => state.passwordsState?.passwords;
