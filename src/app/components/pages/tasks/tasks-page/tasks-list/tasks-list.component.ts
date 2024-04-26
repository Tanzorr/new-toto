import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import { Task } from 'src/app/models/entities/Task';
import {TaskListService} from "./services/Tasks-list.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
  tasks$: Observable<Task[]>;

  constructor(
    private _taskService: TaskListService
  ) {
    this._taskService.getTasks();
    this.tasks$ = this._taskService.tasks$;
  }
}
