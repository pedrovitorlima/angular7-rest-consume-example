import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/login/auth-guard';
import { TokenInterceptor } from './components/login/security.interceptor';
import { TokenStorage } from './components/login/token-storage';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateProductComponent,
    ListProductComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(), //boostrap web components, like alert <ngb-alert>
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    AuthGuard,
    TokenStorage,
    AlertService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
