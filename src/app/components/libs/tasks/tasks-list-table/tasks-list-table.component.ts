import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../../models/entities/Task";

@Component({
  selector: 'app-tasks-list-table',
  templateUrl: './tasks-list-table.component.html',
  styleUrls: ['./tasks-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListTableComponent {
  private _tasks: Task[] = [];
  @Input()
  set tasks(value: Task[] | null) {
    this._tasks = value ? this.transform(value) : [];
  }

  get tasks(): Task[] {
    return this._tasks;
  }
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  editTask(index: number) {
    this.edit.emit(index);
  }

  deleteTask(index: number) {
    this.delete.emit(index);
  }

  private transform(value: Task[]): Task[] {
    // Implement your transformation logic here
    return value;
  }
}
