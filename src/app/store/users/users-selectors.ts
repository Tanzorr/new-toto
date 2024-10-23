import {State} from "@ngrx/store";

export const usersSelector = (state: any) => state.usersState.paginationResponse;


export const userSelector = (state: any) => state.usersState.user;
