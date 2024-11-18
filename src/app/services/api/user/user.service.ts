import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CreateUserResponse,
  PaginatedUsersResponse,
  User,
  UserCreateData,
} from '../../../models/entities/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://127.0.0.1:8000/api/';

  private csrfToken: string | null = null;

  private baringToken: string | null = '8|1PKzqbp0PfRtNvmbjc6IlMlSuXZdTK4nLWCplI0bb05545a';

  private headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.baringToken,
  };

  constructor(private http: HttpClient) {}

  getUsers(url: string | null = null): Observable<PaginatedUsersResponse> {
    let urlParams = url ? url : this.baseUrl + 'users';

    return this.http.get<PaginatedUsersResponse>(urlParams, { headers: this.headers });
  }

  getUser(id: string | null): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id, { headers: this.headers });
  }

  addUser(user: UserCreateData) {
    return this.http.post<CreateUserResponse>(this.baseUrl + 'users', user, {
      headers: this.headers,
    });
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/' + id, { headers: this.headers });
  }

  updateUser(value: User): Observable<User> {
    console.log('Update User:', value);
    return this.http.put<User>(this.baseUrl + 'users/' + value.id, value, {
      headers: this.headers,
    });
  }
}
