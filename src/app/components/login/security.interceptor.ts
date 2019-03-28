import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthGuard } from './auth-guard';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authGuard: AuthGuard) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authGuard.currentUserValue();
        if (currentUser && currentUser.accessToken) {
            console.log("setting header Authorization: " + currentUser.accessToken);
            request = request.clone({
                setHeaders: {
                    Authorization: currentUser.accessToken
                }
            });
        }

        return next.handle(request);
    }
}