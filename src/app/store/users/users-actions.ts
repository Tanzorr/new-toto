import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';
import { PaginatedUsersResponse } from '../../models/paginate-users-response';
import { QueryParams } from '../../models/query-params';

interface ErrorPayload {
  error: string;
}

interface IdPayload {
  id: User['id'];
}

export const getUsers = createAction('[Users] Get Users', props<{ queryParams?: QueryParams }>());

export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  props<{ users: PaginatedUsersResponse }>()
);

export const getUsersFail = createAction('[Users] Get Users Fail', props<ErrorPayload>());

export const addUser = createAction('[Users] Add User', props<{ user: User }>());

export const addUserSuccess = createAction('[Users] Add User Success', props<{ user: User }>());

export const addUserFail = createAction('[Users] Add User Fail', props<ErrorPayload>());

export const getUser = createAction('[Users] Get User');

export const getUserSuccess = createAction('[Users] Get User Success', props<{ user: User }>());

export const getUserFail = createAction('[Users] Get User Fail', props<ErrorPayload>());

export const updateUser = createAction('[Users] Update User', props<{ user: User }>());

export const updateUserSuccess = createAction(
  '[Users] Update User Success',
  props<{ user: User }>()
);

export const updateUserFail = createAction('[Users] Update User Fail', props<ErrorPayload>());

export const deleteUser = createAction('[Users] Delete User', props<IdPayload>());

export const deleteUserSuccess = createAction('[Users] Delete User Success', props<IdPayload>());

export const deleteUserFail = createAction('[Users] Delete User Fail', props<ErrorPayload>());

export const attachUserMedia = createAction(
  '[Users] Attach User Media',
  props<{ userId: User['id']; mediaId: number }>()
);
