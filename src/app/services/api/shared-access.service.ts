import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryParams } from '../../models/query-params';

@Injectable({
  providedIn: 'root',
})
export class SharedAccessService {
  private baseUrl = 'http://127.0.0.1:8000/api/vaults/';
  constructor(private http: HttpClient) {}

  getNotAccessedUsers(vaultId: number | string, queryParams?: QueryParams): Observable<any> {
    return this.http.get(`${this.baseUrl}not-access`);
  }

  // getAccessedUsers(vaultId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/not-access/${vaultId}`);
  // }
}
