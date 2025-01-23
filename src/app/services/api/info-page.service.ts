import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '../../models/page';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoPageService {
  private baseUrl = '/api/pages/';

  constructor(private http: HttpClient) {}

  getPages(): Observable<Page[]> {
    return this.http.get<Page[]>(this.baseUrl);
  }

  getPage(id: Page['id']): Observable<Page> {
    return this.http.get<Page>(this.baseUrl + id);
  }

  addPage(page: Page): Observable<Page> {
    return this.http.post<Page>(this.baseUrl, page);
  }

  updatePage(page: Page): Observable<Page> {
    return this.http.put<Page>(this.baseUrl + page.id, page);
  }

  deletePage(id: Page['id']): Observable<{}> {
    return this.http.delete(this.baseUrl + id);
  }
}
