import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media, PaginatedMediasResponse } from '../../models/media';
import { QueryParams } from '../../models/query-params';
import { ResponseMessage } from '../../models/response-message';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private baseUrl = '/api/medias';

  constructor(private http: HttpClient) {}

  getMedias(queryParams?: QueryParams): Observable<PaginatedMediasResponse> {
    return this.http.get<PaginatedMediasResponse>(this.baseUrl, { params: queryParams });
  }

  addMedia(media: FormData): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(this.baseUrl, media);
  }

  deleteMedia(id: Media['id']): Observable<ResponseMessage> {
    return this.http.delete<ResponseMessage>(`${this.baseUrl}/${id}`);
  }
}
