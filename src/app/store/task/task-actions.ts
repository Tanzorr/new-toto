import {createAction, props} from "@ngrx/store";
import {Task, TaskId} from "../../models/entities/Task";

export const getTask = createAction(
  '[Task] Get Tasks',
  props<{ taskId: TaskId }>()
);

export const getTaskSuccess = createAction(
  '[Task] Get Tasks Success',
  props<{ value: Task }>()
);

export const getTaskFailure = createAction(
  '[Task] Get Task Failure',
  props<{ value: string }>()
);
