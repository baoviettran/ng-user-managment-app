import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.get("skip"))
           return next.handle(request);

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getTokenString()}`
      }
    });
    return next.handle(request).pipe(
      tap(
        event => this.handleResponse(request, event),
        error => this.handleError(request, error)
      )
    );
  }
  handleResponse(req: HttpRequest<any>, event:any) {
    console.log('Handling response for ', req.url, event);
    if (event instanceof HttpResponse) {
      console.log('Request for ', req.url,
          ' Response Status ', event.status,
          ' With body ', event.body);
    }
  }

  handleError(req: HttpRequest<any>, event:any) {
    console.error('Request for ', req.url,
          ' Response Status ', event.status,
          ' With error ', event.error);
  }

}
