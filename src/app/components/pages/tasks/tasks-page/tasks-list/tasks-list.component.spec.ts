import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListComponent } from './tasks-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {provideMockStore} from "@ngrx/store/testing";
import {StoreModule} from "@ngrx/store";
import {TaskListModule} from "./tasks-list.module";

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListComponent],
      imports:[RouterTestingModule,  StoreModule.forRoot(provideMockStore), TaskListModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the tasks list table component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-tasks-list-table')).toBeTruthy();
  });
});

