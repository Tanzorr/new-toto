import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginData } from '../../models/auth-login-data';
import { LoginResponse } from '../../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/api/';

  constructor(private http: HttpClient) {}

  login(data: AuthLoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + 'login', data);
  }

  logout() {
    return this.http.post(this.baseUrl + 'logout', {});
  }
}
