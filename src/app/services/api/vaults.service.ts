import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedVaultsResponse, Vault } from '../../models/vault';
import { QueryParams } from '../../models/query-params';
import { MediaResponse } from '../../models/media-response';

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

  deleteVault(id: Vault['id']): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addVault(value: any): Observable<MediaResponse> {
    return this.http.post<MediaResponse>(this.baseUrl, value);
  }

  updateVault(value: Vault): Observable<any> {
    return this.http.put(`${this.baseUrl}/${value.id}`, value);
  }
}
