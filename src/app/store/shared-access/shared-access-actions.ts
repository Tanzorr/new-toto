import { createAction, props } from '@ngrx/store';
import { Vault } from '../../models/vault';
import { QueryParams } from '../../models/query-params';

export const getShareAccess = createAction('[SharedAccess] Get Shared Access');

export const getSharedAccessSuccess = createAction(
  '[SharedAccess] Get Shared Access Success',
  (value: any) => ({ value })
);

export const getSharedAccessFailure = createAction(
  '[SharedAccess] Get Shared Access Failure',
  (value: string) => ({ value })
);

export const addSharedAccess = createAction('[SharedAccess] Add Shared Access', (value: any) => ({
  value,
}));

export const addSharedAccessSuccess = createAction(
  '[SharedAccess] Add Shared Access Success',
  (value: any) => ({ value })
);

export const addSharedAccessFailure = createAction(
  '[SharedAccess] Add Shared Access Failure',
  (value: string) => ({ value })
);

export const deleteSharedAccess = createAction(
  '[SharedAccess] Delete Shared Access',
  (value: any) => ({ value })
);

export const deleteSharedAccessSuccess = createAction(
  '[SharedAccess] Delete Shared Access Success',
  (value: any) => ({ value })
);

export const deleteSharedAccessFailure = createAction(
  '[SharedAccess] Delete Shared Access Failure',
  (value: string) => ({ value })
);

export const updateSharedAccess = createAction(
  '[SharedAccess] Update Shared Access',
  (value: any) => ({ value })
);

export const updateSharedAccessSuccess = createAction(
  '[SharedAccess] Update Shared Access Success',
  (value: any) => ({ value })
);

export const updateSharedAccessFailure = createAction(
  '[SharedAccess] Update Shared Access Failure',
  (value: string) => ({ value })
);

export const getAccessedUsers = createAction(
  '[SharedAccess] Get Accessed Users',
  props<{ value: { id: string | number; params: QueryParams } }>()
);

export const getAccessedUsersSuccess = createAction(
  '[SharedAccess] Get Accessed Users Success',
  props<{ value: any }>()
);

export const getAccessedUsersFailure = createAction(
  '[SharedAccess] Get Accessed Users Failure',
  props<{ value: string }>()
);

export const getNotAccessedUsers = createAction(
  '[SharedAccess] Get Not Accessed Users',
  props<{ id: string | number; params: QueryParams }>()
);

export const getNotAccessedUsersSuccess = createAction(
  '[SharedAccess] Get Not Accessed Users Success',
  props<{ value: any }>()
);

export const getNotAccessedUsersFailure = createAction(
  '[SharedAccess] Get Not Accessed Users Failure',
  props<{ value: string }>()
);
