import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePassword, Password } from '../../models/password';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private baseUrl = '/api/passwords';

  constructor(private http: HttpClient) {}

  getPassword(id: number | string): Observable<Password> {
    return this.http.get<Password>(`${this.baseUrl}/${id}`);
  }

  addPassword(password: CreatePassword): Observable<Password> {
    return this.http.post<Password>(this.baseUrl, password);
  }

  deletePassword(id: Password['id']): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updatePassword(password: Password): Observable<Password> {
    return this.http.put<Password>(`${this.baseUrl}/${password.id}`, password);
  }
}
