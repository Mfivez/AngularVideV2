import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'fake-jwt-token';

    this.loaderService.setLoading(true);

    const clonedRequest = req.clone(
      { setHeaders: 
        { Authorization: `Bearer ${token}` } 
      }
    );

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) { 
          this.router.navigate(['/login']); }
          return throwError(() => error); 
        }),
      finalize(() => this.loaderService.setLoading(false))
    );
  }
}