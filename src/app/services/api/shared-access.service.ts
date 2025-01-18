import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryParams } from '../../models/query-params';
import { SharedAccess, SharedAccessData } from '../../models/shared-access';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class SharedAccessService {
  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  addSharedAccess(data: SharedAccessData): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}shared-accesses/`, data);
  }

  deleteSharedAccess(id: User['shared_access_id']): Observable<any> {
    return this.http.delete(`${this.baseUrl}shared-accesses/${id}`);
  }

  updateSharedAccess(value: SharedAccess): Observable<SharedAccess> {
    return this.http.put<SharedAccess>(`${this.baseUrl}shared-accesses/${value.id}`, value);
  }
}
