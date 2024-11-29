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
  on(getPasswordsSuccess, (state, action) => {
    return {
      ...state,
      passwords: action.passwords,
      allPasswords: action.passwords,
    };
  }),

  on(getPasswordSuccess, (state, action) => {
    return { ...state, password: action.value };
  }),

  on(getPasswordFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(addPasswordSuccess, (state, action) => {
    return {
      ...state,
      passwords: [action.value, ...state.passwords],
      allPasswords: [action.value, ...state.allPasswords],
    };
  }),

  on(addPasswordFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(updatePasswordSuccess, (state, action) => {
    return {
      ...state,
      passwords: state.passwords.map((password) =>
        password.id === action.value.id ? action.value : password
      ),
      allPasswords: state.passwords,
    };
  }),

  on(updatePasswordFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(deletePasswordSuccess, (state, action) => {
    return { ...state, passwords: state.passwords.filter((password) => password.id !== action.id) };
  }),

  on(deletePasswordFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(searchPassword, (state, action) => {
    return {
      ...state,
      passwords: action.value
        ? state.allPasswords.filter((password) => password.name.includes(action.value))
        : [...state.allPasswords], // Повертаємо копію оригінального списку, якщо value порожній
    };
  })
);
