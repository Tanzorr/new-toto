import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.body instanceof FormData) {
      // const modifiedReq = req.clone({
      //   setHeaders: {
      //     //'content-type': 'multipart/form-data',
      //   },
      //  });
      //return next.handle(modifiedReq);
    }

    return next.handle(req);
  }
}
