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
  props<{ value: Password }>()
);

export const getPasswordFailure = createAction(
  '[Passwords] Get Password Failure',
  props<{ value: any }>()
);

export const addPassword = createAction(
  '[Passwords] Add Password',
  props<{ value: CreatePassword }>()
);

export const addPasswordSuccess = createAction(
  '[Passwords] Add Password Success',
  props<{ value: any }>()
);

export const addPasswordFailure = createAction(
  '[Passwords] Add Password Fail',
  props<{ value: string }>()
);

export const updatePassword = createAction(
  '[Passwords] Update Password',
  props<{ value: Password }>()
);

export const updatePasswordSuccess = createAction(
  '[Passwords] Update Password Success',
  props<{ value: Password }>()
);

export const updatePasswordFailure = createAction(
  '[Passwords] Update Password Fail',
  props<{ value: string }>()
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
  props<{ value: string }>()
);

export const searchPassword = createAction(
  '[Passwords] Search Passwords',
  props<{ value: string }>()
);
