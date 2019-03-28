import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../login/auth-guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authGuard: AuthGuard,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authGuard.logout();
    this.router.navigate(['']);
  }

}
