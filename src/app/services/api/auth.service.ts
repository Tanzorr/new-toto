import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginData } from '../../models/ilogin-data';
import { LoginResponse } from '../../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/api/';

  constructor(private http: HttpClient) {}

  login(data: ILoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + 'login', data);
  }

  logout() {
    return this.http.post(this.baseUrl + 'logout', {});
  }
}
