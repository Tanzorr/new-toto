import { createAction, props } from '@ngrx/store';
import { ILoginData } from '../../models/ilogin-data';
import { LoginResponse } from '../../models/login-response';

export const login = createAction('[Auth] Login', props<{ value: ILoginData }>());

export const loginSuccess = createAction('[Auth] Login Success', props<{ value: LoginResponse }>());

export const loginFail = createAction('[Auth] Login Fail', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success', props<{ message: string }>());

export const logoutFail = createAction('[Auth] Logout Fail', props<{ error: string }>());
