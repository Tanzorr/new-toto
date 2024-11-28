import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedVaultsResponse, Vault } from '../../models/vault';

@Injectable({
  providedIn: 'root',
})
export class VaultsService {
  private baseUrl = 'http://127.0.0.1:8000/api/vaults';

  constructor(private http: HttpClient) {}

  getVaults(): Observable<PaginatedVaultsResponse> {
    return this.http.get<PaginatedVaultsResponse>(this.baseUrl);
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
