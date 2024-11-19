import { UsersState } from './users-reducers';

export const usersSelector = (state: UsersState) => state.usersState.paginationResponse;

export const userSelector = (state: UsersState) => state.usersState.user;
