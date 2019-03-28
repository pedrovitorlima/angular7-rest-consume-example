import { CreateProductComponent } from './components/create-product/create-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/login/auth-guard';

const routes: Routes = [
  {path: 'create-product', component: CreateProductComponent, canActivate: [AuthGuard]},
  {path: 'list-product', component: ListProductComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
