import { SharedAccess } from '../../models/shared-access';
import { User } from '../../models/user';
import { createReducer, on } from '@ngrx/store';
import {
  addSharedAccess,
  addSharedAccessFailure,
  addSharedAccessSuccess,
  deleteSharedAccessFailure,
  deleteSharedAccessSuccess,
  getAccessedUsersFailure,
  getAccessedUsersSuccess,
  getNotAccessedUsers,
  getNotAccessedUsersFailure,
  getNotAccessedUsersSuccess,
} from './shared-access-actions';

export interface SharedAccessStateModel {
  sharedAccesses: SharedAccess[];
  accessedUsers: User[];
  notAccessedUses: User[];
  errorMessage: string;
}

export interface SharedAccessState {
  sharedAccessState: SharedAccessStateModel;
}

const initialState: SharedAccessStateModel = {
  sharedAccesses: [],
  accessedUsers: [],
  notAccessedUses: [],
  errorMessage: '',
};

export const sharedAccessReducer = createReducer(
  initialState,
  on(addSharedAccessSuccess, (state, action) => {
    return {
      ...state,
      sharedAccesses: [...state.sharedAccesses, action.value],
    };
  }),

  on(addSharedAccessFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.value,
    };
  }),

  on(deleteSharedAccessSuccess, (state, action) => {
    return {
      ...state,
      sharedAccesses: state.sharedAccesses.filter((access) => access.id !== action.value),
    };
  }),

  on(deleteSharedAccessFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.value,
    };
  }),

  on(getAccessedUsersSuccess, (state, action) => {
    return {
      ...state,
      sharedAccesses: action.value || [],
    };
  }),

  on(getAccessedUsersFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.value,
    };
  }),

  on(getNotAccessedUsersSuccess, (state, action) => {
    return {
      ...state,
      notAccessedUses: action.value || [],
    };
  }),

  on(getNotAccessedUsersFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.value,
    };
  })
);
