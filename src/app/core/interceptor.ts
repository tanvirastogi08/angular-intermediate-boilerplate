import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import * as _ from 'lodash';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

// tslint:disable-next-line
type HttpEventAny = HttpEvent<any>;
// tslint:disable-next-line
type HttpRequestAny = HttpRequest<any>;

const WINDOW_CONFIG = window['CONFIG'];

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor() {}

  public intercept(
    request: HttpRequest<HttpRequestAny>,
    next: HttpHandler
  ): Observable<HttpEventAny> {
    return next
      .handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          const isTOSApiError = (
            err instanceof HttpErrorResponse &&
            err.status === 403 &&
            _.isObject(err.error) &&
            _.isObject(err.error.error) &&
            err.error.error.message === 'TOS has not been accepted'
          );

          if (isTOSApiError) {
            this.handleTOSRedirect();
          }
          return throwError(err);
        })
      );
  }

  private handleTOSRedirect(): void {
    const finalUrl = 'http://localhost:4200/login';
    window.stop();
    window.location.href = finalUrl;
  }
}
