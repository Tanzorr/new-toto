import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateInfoPage, InfoPage } from '../../models/infoPage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoPageService {
  private baseUrl = '/api/pages/';

  constructor(private http: HttpClient) {}

  getPages(): Observable<InfoPage[]> {
    return this.http.get<InfoPage[]>(this.baseUrl);
  }

  getPage(id: InfoPage['id']): Observable<InfoPage> {
    return this.http.get<InfoPage>(this.baseUrl + id);
  }

  addPage(page: CreateInfoPage): Observable<InfoPage> {
    return this.http.post<InfoPage>(this.baseUrl, page);
  }

  updatePage(page: InfoPage): Observable<InfoPage> {
    return this.http.put<InfoPage>(this.baseUrl + page.id, page);
  }

  deletePage(id: InfoPage['id']): Observable<{}> {
    return this.http.delete(this.baseUrl + id);
  }
}
