import {UsersState} from "./users-reducers";

export const usersSelector = (state:any) => state.usersState.paginationResponse;


export const userSelector = (state: any) => state.usersState.user;
