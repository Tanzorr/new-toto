import {User} from "../../models/entities/User";
import {createReducer, on} from "@ngrx/store";
import {addUserSuccess, deleteUserFail, deleteUserSuccess, getUsersFail, getUsersSuccess} from "./users-actions";

export interface UsersStateModel {
  users: User[];
  errorMessage: string;
}

const initialState: UsersStateModel = {
  users: [
    {
      id: 1,
      name: 'User 1',
      email: 'email@ukr.net'
    }
  ],
  errorMessage: '',
};

export const usersReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, action) => {
    return { ...state, users: [...state.users, ...action.value] };
  }),

  on(getUsersFail, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(addUserSuccess, (state, action) => {
    return { ...state, users: [...state.users, action.value] };
  }),

  on(getUsersFail, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(deleteUserSuccess, (state, action) => {
    return {
      ...state,
      users: state.users.filter((user) => user.id !== action.value),
    };
  }),

  on(deleteUserFail, (state, action) => {
    return { ...state, errorMessage: action.value };
  })
);
