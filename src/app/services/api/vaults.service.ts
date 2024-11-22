import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VaultsService {
  private baseUrl = 'http://127.0.0.1:8000/api/vaults';

  constructor(private http: HttpClient) {}

  getVaults() {
    return this.http.get(this.baseUrl);
  }

  getVault(id: number | string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
