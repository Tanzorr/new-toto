import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media, MediaResponse, MediasResponse, PaginatedMediasResponse } from '../../models/media';
import { QueryParams } from '../../models/query-params';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private baseUrl = '/api/medias';

  constructor(private http: HttpClient) {}

  getMedias(queryParams?: QueryParams): Observable<PaginatedMediasResponse> {
    return this.http.get<PaginatedMediasResponse>(this.baseUrl, { params: queryParams });
  }

  getMedia(id: Media['id']): Observable<Media> {
    return this.http.get<Media>(`${this.baseUrl}/${id}`);
  }

  addMedia(media: FormData): Observable<MediaResponse> {
    return this.http.post<MediaResponse>(this.baseUrl, media);
  }

  deleteMedia(id: Media['id']): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
