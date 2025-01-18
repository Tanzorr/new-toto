import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserResponse, User } from '../../models/user';
import { Observable } from 'rxjs';
import { PaginatedUsersResponse } from '../../models/paginate-users-response';
import { QueryParams } from '../../models/query-params';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = '/api/users/';

  constructor(private http: HttpClient) {}

  getUsers(queryParams?: QueryParams): Observable<PaginatedUsersResponse> {
    return this.http.get<PaginatedUsersResponse>(this.baseUrl, { params: queryParams });
  }

  getUser(id: string | null): Observable<User> {
    return this.http.get<User>(this.baseUrl + id);
  }

  addUser(user: User) {
    return this.http.post<CreateUserResponse>(this.baseUrl, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  updateUser(value: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + value.id, value);
  }

  getNotAccessedUsers(
    entityName: string,
    entityId: number | string,
    queryParams?: QueryParams
  ): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}not-access/${entityName}/${entityId}`, {
      params: queryParams,
    });
  }
}
