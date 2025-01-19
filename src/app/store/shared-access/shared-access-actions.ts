import { createAction, props } from '@ngrx/store';
import { QueryParams } from '../../models/query-params';
import { User } from '../../models/user';
import { SharedAccess, SharedAccessData } from '../../models/shared-access';

export const getSharedAccessSuccesses = createAction(
  '[SharedAccess] Get Shared Access Successes',
  props<{ sharedAccesses: SharedAccess[] }>()
);

export const addSharedAccess = createAction(
  '[SharedAccess] Add Shared Access',
  props<{ data: SharedAccessData }>()
);

export const addSharedAccessSuccess = createAction(
  '[SharedAccess] Add Shared Access Success',
  props<{ accessUser: User }>()
);

export const addSharedAccessFailure = createAction(
  '[SharedAccess] Add Shared Access Failure',
  props<{ error: string }>()
);

export const deleteSharedAccess = createAction(
  '[SharedAccess] Delete Shared Access',
  props<{ user: User }>()
);

export const deleteSharedAccessSuccess = createAction(
  '[SharedAccess] Delete Shared Access Success',
  props<{ userId: User['id'] }>()
);

export const deleteSharedAccessFailure = createAction(
  '[SharedAccess] Delete Shared Access Failure',
  props<{ error: string }>()
);

export const updateSharedAccess = createAction(
  '[SharedAccess] Update Shared Access',
  props<{ sharedAccess: SharedAccess }>()
);

export const updateSharedAccessSuccess = createAction(
  '[SharedAccess] Update Shared Access Success',
  props<{ sharedAccess: SharedAccess }>()
);

export const updateSharedAccessFailure = createAction(
  '[SharedAccess] Update Shared Access Failure',
  props<{ error: string }>()
);

export const getAccessedUsers = createAction(
  '[SharedAccess] Get Accessed Users',
  props<{ id: string }>()
);

export const getAccessedUsersSuccess = createAction(
  '[SharedAccess] Get Accessed Users Success',
  props<{ users: User[] }>()
);

export const getAccessedUsersFailure = createAction(
  '[SharedAccess] Get Accessed Users Failure',
  props<{ error: string }>()
);

export const getNotAccessedUsers = createAction(
  '[SharedAccess] Get Not Accessed Users',
  props<{ id: string; params: QueryParams | undefined }>()
);

export const getNotAccessedUsersSuccess = createAction(
  '[SharedAccess] Get Not Accessed Users Success',
  props<{ users: User[] }>()
);

export const getNotAccessedUsersFailure = createAction(
  '[SharedAccess] Get Not Accessed Users Failure',
  props<{ error: string }>()
);
