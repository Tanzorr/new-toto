import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TaskPageService} from "./services/task-page.service";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskPageComponent implements OnInit {
  constructor(private _taskPageService: TaskPageService) {
  }

  ngOnInit(): void {

  }
}
