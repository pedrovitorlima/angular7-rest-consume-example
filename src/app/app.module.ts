import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateProductComponent,
    ListProductComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(), //boostrap web components, like alert <ngb-alert>
    NgbPaginationModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
