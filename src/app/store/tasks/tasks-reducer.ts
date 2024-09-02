import { createReducer, on } from '@ngrx/store';

import {
  addTaskFail,
  addTaskSuccess,
  deleteTaskSuccess,
  getTasksFail,
  getTasksSuccess,
} from './tasks-actions';
import { Task } from 'src/app/models/entities/Task';

export interface TasksStateModel {
  tasks: Task[];
  errorMessage: string;
}

const initialState: TasksStateModel = {
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
    },
  ],
  errorMessage: '',
};

export const tasksReducer = createReducer(
  initialState,
  on(getTasksSuccess, (state, action) => {
    return { ...state, tasks: [...state.tasks, ...action.value] };
  }),

  on(getTasksFail, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(addTaskSuccess, (state, action) => {
    return { ...state, tasks: [...state.tasks, action.value] };
  }),

  on(addTaskFail, (state, action) => {
    return { ...state, errorMessage: action.value };
  }),

  on(deleteTaskSuccess, (state, action) => {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.value),
    };
  }),

  on(addTaskFail, (state, action) => {
    return { ...state, errorMessage: action.value };
  })
);
