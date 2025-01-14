import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth/auth-reducers';
import { selectAccessToken } from '../store/auth/auth-selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly token!: string;
  constructor() {
    this.token = localStorage.getItem('access_token') as string;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.token) {
      const authReq = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${this.token}`)
          .append('Access-Control-Allow-Origin', 'http://localhost:4200'),
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
