import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem('authToken')
    
    if (authToken && authToken != '') {
      return next.handle(request.clone( { setHeaders: { Authorization: 'Bearer ' + authToken } } ));
    }
    return next.handle(request);
  }
}
