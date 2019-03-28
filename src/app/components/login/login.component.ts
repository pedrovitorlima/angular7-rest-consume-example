import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AuthGuard } from './auth-guard';
import { TokenStorage } from './token-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginURL = "http://localhost:8080/auth";
  private loginForm: FormGroup;
  submitted = false;

  constructor( private alertService: AlertService,
    private http: HttpClient, 
    private formBuilder: FormBuilder,
    private authGuard: AuthGuard,
    private tokenStorage: TokenStorage,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['' , Validators.required],
      password: ['' , Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  tryLogin() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    let formRaw = this.loginForm.getRawValue();
    let loginDataJSON = JSON.stringify(formRaw);


    this.http.post(this.loginURL, loginDataJSON).subscribe(
      data => {
        let authUser = <User>data;
        this.tokenStorage.saveToken(authUser.accessToken);
        this.authGuard.setAuthenticatedUser(authUser);

        this.alertService.successAlert(['Welcome back, ' + authUser.username], true);
        this.router.navigate(['list-product']);
      },

      error => {
        if (error.status) {
          if (error.status == 401) {
            this.alertService.errorAlert(['Invalid credentials.']); 
          } else {
            this.alertService.errorAlert(['A error occours while contacting authentication server. Please try again later.']);
            console.log(error.status);
          }
        }
      }
    )

  }

}
