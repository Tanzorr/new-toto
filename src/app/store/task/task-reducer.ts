import { Task } from "src/app/models/entities/Task";
import {createReducer, on} from "@ngrx/store";
import {getTaskFailure, getTaskSuccess} from "./task-actions";

export interface TaskStateModel {
  tasks: Task,
  errorMessage: string
}

const initialState: TaskStateModel = {
  tasks: {
    id: 1,
    title: '',
    description: ''
  },
  errorMessage: ''
}

export const taskReducer = createReducer(
  initialState,
    on(getTaskSuccess, (state, action) => {
      return {
        ...state,
        tasks: action.value
      }
    }),

   on(getTaskFailure, (state, action) => {
      return {
        ...state,
        errorMessage: action.value
      }
   })
);
