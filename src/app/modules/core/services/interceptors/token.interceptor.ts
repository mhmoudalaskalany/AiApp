import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * Token Interceptor
 * An Interceptor for add auth token to the header of each http
 */
export class TokenInterceptor implements HttpInterceptor {
  private token = '';
  constructor(private storage: StorageService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = this.storage.getToken();
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      }
    });
    return next.handle(request).pipe(finalize(() => {}));
  }
}
