import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { AlertType, Alert } from './alert.domain';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private keepAfterRouteChange = false;
  private subject = new Subject<Alert>();

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  clear() {
    this.subject.next();
  }

  errorAlert(messages : any[], keepAfterRouteChange = false) {
    messages.forEach(message => {
      this.alert(AlertType.Error, message, keepAfterRouteChange);
    });   
  }

  successAlert(messages : any[], keepAfterRouteChange = false) {
    messages.forEach(message => {
      this.alert(AlertType.Success, message, keepAfterRouteChange);
    });
  }

  alert(type: AlertType, message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert>{ type: type, message: message });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }
}
