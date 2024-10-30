import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateUserResponse, PaginatedUsersResponse, User, UserCreateData} from "../../../models/entities/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  private csrfToken: string | null = null;

  constructor(private http: HttpClient) {
  }

  getUsers(url: string | null = null): Observable<PaginatedUsersResponse> {
    let urlParams = url ? url : this.baseUrl + 'users';
    return this.http.get<PaginatedUsersResponse>(urlParams);
  }

  getUser(id: string | null): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  addUser(user: UserCreateData) {
    return this.http.post<CreateUserResponse>(this.baseUrl + 'users', user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/' + id);
  }

  updateUser(value: User): Observable<User> {
    console.log('Update User:', value);
    return this.http.put<User>(this.baseUrl + 'users/' + value.id, value);
  }
}
