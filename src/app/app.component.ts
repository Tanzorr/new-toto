import { Component } from '@angular/core';
import {TaskService} from "./services/api/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-to-do';

  constructor(private taskService: TaskService) {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    console.log('AppComponent ngOnInit');
    this.taskService.getTasks().subscribe((data) => {
      console.log(data);
    });
  }
}
