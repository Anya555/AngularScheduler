import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppContext } from '../../app/context';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private context: AppContext) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.set(
        'x-access-token',
        this.context.admin.accessToken || ''
      ),
    });

    return next.handle(modifiedReq);
  }
}
