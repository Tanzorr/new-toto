import {Injectable} from "@angular/core";
import {Action, Store} from "@ngrx/store";
import { getTasks } from "src/app/store/tasks/tasks-actions";
import {tasksSelector} from "src/app/store/tasks/tasks-selectors";

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  // @ts-ignore
  tasks$ = this._store.select(tasksSelector);

  constructor(private _store: Store<{ tasks: [] }>) {}

  getTasks(): void {
    this._store.dispatch(getTasks());
  }

}
