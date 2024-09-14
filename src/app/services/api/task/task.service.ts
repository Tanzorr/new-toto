import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task, Tasks} from "../../../models/entities/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
   private baseUrl = 'http://127.0.0.1:20080/';
  constructor(private http: HttpClient) {
  }

  getTasks():Observable<Tasks> {
    return this.http.get<Tasks>(this.baseUrl + 'tasks');
  }

    getTask(id: number):Observable<Task> {
    return this.http.get<Task>(this.baseUrl + 'tasks/' + id);
  }
}
