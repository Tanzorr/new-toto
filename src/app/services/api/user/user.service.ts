import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/entities/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id: number):Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl + 'users', user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/' + id);
  }
}
