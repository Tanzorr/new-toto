import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TasksComponent} from './tasks.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
