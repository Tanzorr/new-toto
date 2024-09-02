import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getTasks,
  getTasksFail,
  getTasksSuccess,
} from './tasks-actions';
import { catchError, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/entities/Task';
import {tasksSelector} from "./tasks-selectors";
import {TaskService} from "../../services/api/task.service";


@Injectable()
export class TasksEffects {
  getTasks = createEffect(
    () =>
      this._actions$.pipe(
        ofType(getTasks),
        withLatestFrom(this._store.select(tasksSelector)),
        switchMap(() => {
          return this._tasksApiService.getTasks().pipe(
            tap((tasks: Task[]) => {
              this._store.dispatch(getTasksSuccess({ value: tasks }));
              catchError((error) => {
                this._store.dispatch(getTasksFail({ value: error }));
                return error;
              });
            })
          );
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<{ tasks: Task[] }>,
    private _tasksApiService: TaskService
  ) {}
}
