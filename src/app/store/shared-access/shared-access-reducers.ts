import { SharedAccess } from '../../models/shared-access';
import { User } from '../../models/user';
import { createReducer, on } from '@ngrx/store';
import {
  addSharedAccessFailure,
  addSharedAccessSuccess,
  deleteSharedAccessFailure,
  deleteSharedAccessSuccess,
  getAccessedUsersFailure,
  getAccessedUsersSuccess,
  getNotAccessedUsersFailure,
  getNotAccessedUsersSuccess,
  updateSharedAccessSuccess,
} from './shared-access-actions';

export interface SharedAccessStateModel {
  sharedAccesses: SharedAccess[];
  accessedUsers: User[];
  notAccessedUses: User[];
  errorMessage: string;
}

export interface SharedAccessState {
  accessState: SharedAccessStateModel;
}

const initialState: SharedAccessStateModel = {
  sharedAccesses: [],
  accessedUsers: [],
  notAccessedUses: [],
  errorMessage: '',
};

export const sharedAccessReducer = createReducer(
  initialState,
  on(addSharedAccessSuccess, (state, { accessUser }) => ({
    ...state,
    accessedUsers: [...state.accessedUsers, accessUser],
    notAccessedUses: state.notAccessedUses.filter((user) => user.id !== accessUser.id),
  })),
  on(addSharedAccessFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  on(updateSharedAccessSuccess, (state, { sharedAccess }) => ({
    ...state,
    sharedAccesses: state.sharedAccesses.map((access) =>
      access.id === sharedAccess.id ? sharedAccess : access
    ),
  })),
  on(deleteSharedAccessSuccess, (state, { userId }) => ({
    ...state,
    accessedUsers: state.accessedUsers.filter((user) => user.id !== userId),
  })),
  on(deleteSharedAccessFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  on(getAccessedUsersSuccess, (state, { users }) => ({
    ...state,
    accessedUsers: users || [],
  })),
  on(getAccessedUsersFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),
  on(getNotAccessedUsersSuccess, (state, { users }) => ({
    ...state,
    notAccessedUses: users || [],
  })),
  on(getNotAccessedUsersFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
  }))
);
