import {PaginatedUsersResponse, User} from "../../models/entities/User";
import {createReducer, on} from "@ngrx/store";
import {
  addUserFail,
  addUserSuccess,
  deleteUserFail,
  deleteUserSuccess, getUser,
  getUsersFail,
  getUsersSuccess, getUserSuccess
} from "./users-actions";

export interface UsersStateModel {
  user: User;
  errorMessage: string;
  paginationResponse: PaginatedUsersResponse;
}

export interface UsersState {
  usersState: UsersStateModel;
}

const initialState: UsersStateModel = {
  user:
    {
      id: 1,
      name: 'User 1',
      email: 'email@ukr.net',
      password: 'password',
      password_confirmation: 'password'
    },
  paginationResponse: {
    current_page: 1,
    data: [],
    first_page_url: '',
    from: 1,
    last_page: 1,
    last_page_url: '',
    next_page_url: '',
    links: [],
    path: "",
    per_page: 0,
    prev_page_url: null,
    to: 0,
    total: 0
  },
  errorMessage: '',
};

export const usersReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, action) => {
    return { ...state, paginationResponse: {...state.paginationResponse, ...action.value || {}} };
  }),

  on(getUsersFail, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(addUserSuccess, (state, action) => {
    return {
      ...state,
      paginationResponse: {
        ...state.paginationResponse,
        data: [ action.value, ...state.paginationResponse.data]
      }
    };
  }),

  on(getUserSuccess, (state, action) => {
    return { ...state, user: action.value };
  }),

  on(addUserFail, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),


  on(deleteUserSuccess, (state, action) => {
    return {
      ...state,
      paginationResponse: {
        ...state.paginationResponse,
        data: state.paginationResponse.data.filter((user) => user.id !== action.value)
      }
    };
  }),

  on(deleteUserFail, (state, action) => {
    return { ...state, errorMessage: action.value };
  })
);
