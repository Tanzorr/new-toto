import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
   private baseUrl = 'http://127.0.0.1:20080/';
  constructor(private http: HttpClient) {
  }

  getTasks():Observable<any> {
    return this.http.get(this.baseUrl + 'tasks');
  }

  getTask(id: number):Observable<any> {
    return this.http.get(this.baseUrl + 'tasks/' + id);
  }

  createTask(task: Object):Observable<Object> {
    return this.http.post(this.baseUrl + 'tasks', task);
  }

  updateTask(id: number, value: any):Observable<Object> {
    return this.http.put(this.baseUrl + 'tasks/' + id, value);
  }
}
