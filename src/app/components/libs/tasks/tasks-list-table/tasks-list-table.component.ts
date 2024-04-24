import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tasks-list-table',
  templateUrl: './tasks-list-table.component.html',
  styleUrls: ['./tasks-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListTableComponent {
  @Input() titles: string[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  editTitle(index: number) {
    this.edit.emit(index);
  }

  deleteTitle(index: number) {
    this.delete.emit(index);
  }
}
