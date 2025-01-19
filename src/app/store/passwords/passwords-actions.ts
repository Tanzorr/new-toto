import { createAction, props } from '@ngrx/store';
import { CreatePassword, Password } from '../../models/password';

export const getPasswordsSuccess = createAction(
  '[Passwords] Get Passwords Success',
  props<{ passwords: Password[] }>()
);
export const getPassword = createAction(
  '[Passwords] Get Password',
  props<{ id: Password['id'] }>()
);

export const getPasswordSuccess = createAction(
  '[Passwords] Get Password Success',
  props<{ password: Password }>()
);

export const getPasswordFailure = createAction(
  '[Passwords] Get Password Failure',
  props<{ error: string }>()
);

export const addPassword = createAction(
  '[Passwords] Add Password',
  props<{ createPassword: CreatePassword }>()
);

export const addPasswordSuccess = createAction(
  '[Passwords] Add Password Success',
  props<{ password: Password }>()
);

export const addPasswordFailure = createAction(
  '[Passwords] Add Password Fail',
  props<{ error: string }>()
);

export const updatePassword = createAction(
  '[Passwords] Update Password',
  props<{ password: Password }>()
);

export const updatePasswordSuccess = createAction(
  '[Passwords] Update Password Success',
  props<{ password: Password }>()
);

export const updatePasswordFailure = createAction(
  '[Passwords] Update Password Fail',
  props<{ error: string }>()
);

export const deletePassword = createAction(
  '[Passwords] Delete Password',
  props<{ id: Password['id'] }>()
);

export const deletePasswordSuccess = createAction(
  '[Passwords] Delete Password Success',
  props<{ id: Password['id'] }>()
);

export const deletePasswordFailure = createAction(
  '[Passwords] Delete Password Fail',
  props<{ error: string }>()
);

export const searchPassword = createAction(
  '[Passwords] Search Passwords',
  props<{ value: string }>()
);
