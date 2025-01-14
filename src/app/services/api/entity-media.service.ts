import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AttachMediaResponse } from '../../models/attach-media-response';
import { Media } from '../../models/media';

@Injectable({
  providedIn: 'root',
})
export class EntityMediaService {
  private baseUrl = 'api/entities/';
  constructor(private http: HttpClient) {}

  attachMedia(
    entityType: string,
    entityId: number,
    mediaId: Media['id']
  ): Observable<AttachMediaResponse> {
    return this.http.post<AttachMediaResponse>(`/api/entities/media/attach`, {
      media_id: mediaId,
      mediable_type: entityType,
      mediable_id: entityId,
    });
  }

  detachMedia(
    entityType: string,
    entityId: number | string,
    mediaId: Media['id']
  ): Observable<AttachMediaResponse> {
    return this.http.post<AttachMediaResponse>(`/api/entities/media/detach`, {
      media_id: mediaId,
      mediable_type: entityType,
      mediable_id: entityId,
    });
  }
}
