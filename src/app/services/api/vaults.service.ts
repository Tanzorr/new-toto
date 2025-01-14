import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedVaultsResponse, Vault } from '../../models/vault';
import { QueryParams } from '../../models/query-params';

@Injectable({
  providedIn: 'root',
})
export class VaultsService {
  private baseUrl = '/api/vaults';

  constructor(private http: HttpClient) {}

  getVaults(queryParams?: QueryParams): Observable<PaginatedVaultsResponse> {
    return this.http.get<PaginatedVaultsResponse>(this.baseUrl, { params: queryParams });
  }

  getVault(id: number | string): Observable<Vault> {
    return this.http.get<Vault>(`${this.baseUrl}/${id}`);
  }

  deleteVault(id: Vault['id']): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addVault(value: any): Observable<any> {
    return this.http.post(this.baseUrl, value);
  }

  updateVault(value: Vault): Observable<any> {
    return this.http.put(`${this.baseUrl}/${value.id}`, value);
  }
}
