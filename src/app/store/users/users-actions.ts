import {createAction, props} from "@ngrx/store";
import {User, UserId, Users} from "../../models/entities/User";

export const getUsers = createAction('[Users] Get Users');

export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  props<{ value: Users }>()
);


export const getUsersFail = createAction(
  '[Users] Get Users Fail',
  props<{ value: string }>()
);


export const addUser = createAction(
  '[Users] Add User',
  props<{ value: User }>()
);

export const addUserSuccess = createAction(
  '[Users] Add User Success',
  props<{ value: User }>()
);

export const addUserFail = createAction(
  '[Users] Add User Fail',
  props<{ value: string }>()
);


export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ value: UserId }>()
);


export const deleteUserSuccess = createAction(
  '[Users] Delete User Success',
  props<{ value: UserId }>()
);

export const deleteUserFail = createAction(
  '[Users] Delete User Fail',
  props<{ value: string }>()
);
