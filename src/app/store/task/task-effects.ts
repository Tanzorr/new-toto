import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { Store} from "@ngrx/store";
import {Task} from "../../models/entities/Task";
import {TaskService} from "../../services/api/task/task.service";
import {getTask, getTaskSuccess} from "./task-actions";
import {switchMap, tap, withLatestFrom} from 'rxjs';
import {routerSelector} from "../router/router-selector"

@Injectable()
export class TaskEffects {

  getTask$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(getTask),
        withLatestFrom(this._store.select(routerSelector)),
        switchMap(([action, params]) => {
          const taskId = params.state.params.id;
          return this._taskService.getTask(taskId).pipe(
            tap((task: Task) => {
              this._store.dispatch(getTaskSuccess({value: task}));
            })
          );
        })),
    {dispatch: false}
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<{ task: Task }>,
    private _taskService: TaskService,
  ) {
  }
}
