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
  updatePasswordFailure,
  updatePasswordSuccess,
} from './passwords-actions';

export interface PasswordStateModel {
  passwords: Password[];
  password: Password | null;
  selectedPassword: Password | null;
  errorMessage: string;
}

export interface PasswordState {
  passwordsState: PasswordStateModel;
}

const initialState: PasswordStateModel = {
  passwords: [],
  password: null,
  selectedPassword: null,
  errorMessage: '',
};

export const passwordsReducer = createReducer(
  initialState,
  on(getPasswordsSuccess, (state, action) => {
    return { ...state, passwords: action.passwords };
  }),

  on(getPasswordSuccess, (state, action) => {
    return { ...state, password: action.value };
  }),

  on(getPasswordFailure, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(addPasswordSuccess, (state, action) => {
    return { ...state, passwords: [action.value, ...state.passwords] };
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
  })
);
