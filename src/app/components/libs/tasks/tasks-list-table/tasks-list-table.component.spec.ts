import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListTableComponent } from './tasks-list-table.component';

describe('TasksListTableComponent', () => {
  let component: TasksListTableComponent;
  let fixture: ComponentFixture<TasksListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListTableComponent]
    });
    fixture = TestBed.createComponent(TasksListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
