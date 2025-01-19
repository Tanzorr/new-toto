import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media, PaginatedMediasResponse } from '../../models/media';
import { QueryParams } from '../../models/query-params';
import { MediaResponse } from '../../models/media-response';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private baseUrl = '/api/medias';

  constructor(private http: HttpClient) {}

  getMedias(queryParams?: QueryParams): Observable<PaginatedMediasResponse> {
    return this.http.get<PaginatedMediasResponse>(this.baseUrl, { params: queryParams });
  }

  addMedia(media: FormData): Observable<MediaResponse> {
    return this.http.post<MediaResponse>(this.baseUrl, media);
  }

  deleteMedia(id: Media['id']): Observable<MediaResponse> {
    return this.http.delete<MediaResponse>(`${this.baseUrl}/${id}`);
  }
}
