import { createReducer, on } from '@ngrx/store';
import {
  addUserFail,
  addUserSuccess,
  deleteUserFail,
  deleteUserSuccess,
  getUserFail,
  getUsersFail,
  getUsersSuccess,
  getUserSuccess,
  updateUserFail,
  updateUserSuccess,
} from './users-actions';
import { initialState } from './users-state';
import { User } from '../../models/user';
import { PaginatedUsersResponse } from '../../models/paginate-users-response';

export interface UsersStateModel {
  user: User;
  errorMessage: string;
  paginationResponse: PaginatedUsersResponse;
}

export interface UsersState {
  usersState: UsersStateModel;
}

export const usersReducer = createReducer(
  initialState,

  on(getUsersSuccess, (state, { users }) => ({
    ...state,
    paginationResponse: { ...state.paginationResponse, ...users },
  })),

  on(getUsersFail, (state, { error }) => ({
    ...state,
    paginationResponse: initialState.paginationResponse,
    errorMessage: error,
  })),

  on(addUserSuccess, (state, { user }) => ({
    ...state,
    paginationResponse: {
      ...state.paginationResponse,
      data: [user, ...state.paginationResponse.data],
    },
  })),

  on(addUserFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),

  on(
    getUserSuccess,
    (state, { user }) => (
      console.log('getUserSuccess', user),
      {
        ...state,
        user,
      }
    )
  ),

  on(getUserFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),

  on(updateUserSuccess, (state, { user }) => ({
    ...state,
    paginationResponse: {
      ...state.paginationResponse,
      data: state.paginationResponse.data.map((u) => (u.id === user.id ? user : u)),
    },
  })),

  on(updateUserFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
  })),

  on(deleteUserSuccess, (state, { id }) => ({
    ...state,
    paginationResponse: {
      ...state.paginationResponse,
      data: state.paginationResponse.data.filter((u) => u.id !== id),
    },
  })),

  on(deleteUserFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
  }))
);
