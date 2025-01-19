import { Password } from '../../models/password';
import { createReducer, on } from '@ngrx/store';
import {
  addPasswordFailure,
  addPasswordSuccess,
  deletePasswordFailure,
  deletePasswordSuccess,
  getPasswordFailure,
  getPasswordsSuccess,
  getPasswordSuccess,
  searchPassword,
  updatePasswordFailure,
  updatePasswordSuccess,
} from './passwords-actions';

export interface PasswordStateModel {
  passwords: Password[];
  allPasswords: Password[];
  password: Password | null;
  selectedPassword: Password | null;
  errorMessage: string;
}

export interface PasswordState {
  passwordsState: PasswordStateModel;
}

const initialState: PasswordStateModel = {
  passwords: [],
  allPasswords: [],
  password: null,
  selectedPassword: null,
  errorMessage: '',
};

export const passwordsReducer = createReducer(
  initialState,
  on(getPasswordsSuccess, (state, { passwords }) => ({
    ...state,
    passwords,
    allPasswords: passwords,
  })),
  on(getPasswordSuccess, (state, { password }) => ({
    ...state,
    password,
  })),
  on(getPasswordFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  on(addPasswordSuccess, (state, { password }) => ({
    ...state,
    passwords: [password, ...state.passwords],
    allPasswords: [password, ...state.allPasswords],
  })),
  on(addPasswordFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  on(updatePasswordSuccess, (state, { password }) => ({
    ...state,
    passwords: state.passwords.map((p) => (p.id === password.id ? password : p)),
    allPasswords: state.passwords,
  })),
  on(updatePasswordFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  on(deletePasswordSuccess, (state, { id }) => ({
    ...state,
    passwords: state.passwords.filter((p) => p.id !== id),
  })),
  on(deletePasswordFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  on(searchPassword, (state, { value }) => ({
    ...state,
    passwords: value
      ? state.allPasswords.filter((p) => p.name.includes(value))
      : [...state.allPasswords],
  }))
);
