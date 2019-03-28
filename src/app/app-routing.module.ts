import { CreateProductComponent } from './components/create-product/create-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  {path: 'create-product', component: CreateProductComponent},
  {path: 'list-product', component: ListProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
