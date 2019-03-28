import { AlertService } from 'src/app/services/alert.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authGuard: AuthGuard,
                private router: Router,
                private alertService: AlertService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if(err.status == 401) {
                if (!this.authGuard.currentUserValue()) {
                    this.alertService.errorAlert(["Invalid credentials."], true);
                } else {
                    this.alertService.errorAlert(["You are not logged."], true);
                }
                this.authGuard.logout();
                this.router.navigate(['']);
            }else if (err.status == 403) {
                this.alertService.errorAlert(["You have not access."], true);
                this.router.navigate(['']);

            }

            const error = err.error.message || err.statusText;
            console.log("error => " + request);
            return throwError(error);
        }))
    }
}