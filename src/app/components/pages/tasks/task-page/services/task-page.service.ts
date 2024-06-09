import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Task, TaskId} from "src/app/models/entities/Task";
import {getTask} from "../../../../../store/task/task-actions";
import {taskSelector} from "../../../../../store/tasks/tasks-selectors";

@Injectable({
  providedIn: 'root',
})
export class TaskPageService {
  $task$  = this._store.select(taskSelector);
  constructor(private _store: Store<{ task: Task }>){
  }
  getTask(taskId: TaskId): void {
    this._store.dispatch(getTask({taskId}));
  }
}

