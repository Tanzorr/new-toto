import { createAction, props } from '@ngrx/store';
import {Task, TaskId} from 'src/app/models/entities/Task';


export const getTasks = createAction('[Tasks] Get Tasks');

export const getTasksSuccess = createAction(
  '[Tasks] Get Tasks Success',
  props<{ value: Task[] }>()
);

export const getTasksFail = createAction(
  '[Tasks] Get Tasks Fail',
  props<{ value: string }>()
);

export const getTasksById = createAction(
  '[Tasks] Get Task By Id',
  props<{ value: Task }>()
);

export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ value: Task }>()
);

export const addTaskSuccess = createAction(
  '[Tasks] Add Task Success',
  props<{ value: Task }>()
);

export const addTaskFail = createAction(
  '[Tasks] Add Task Fail',
  props<{ value: string }>()
);

export const deleteTask = createAction(
  '[Tasks] Delete Task',
  props<{ value: string }>()
);

export const deleteTaskSuccess = createAction(
  '[Tasks] Delete Task Success',
  props<{ value: TaskId }>()
);

export const deleteTaskFail = createAction(
  '[Tasks] Delete Task Fail',
  props<{ value: string }>()
);
