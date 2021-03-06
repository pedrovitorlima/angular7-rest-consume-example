import { AlertService } from 'src/app/services/alert.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private router: Router, private alertService : AlertService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.currentUserValue()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.alertService.errorAlert(['You are not logged.'], true);
        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
    }

    currentUserValue() : User {
        return this.currentUserSubject.value;
    }

    setAuthenticatedUser(user: User) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
}
