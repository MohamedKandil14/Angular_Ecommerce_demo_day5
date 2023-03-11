import { AuthGuard } from './guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes:Routes= [
 {
  path:'products',
   canActivate:[AuthGuard],
  children:[
    {path:'',component:ProductsComponent},
    {path:':id',component:ProductDetailsComponent},
    {path:':id/edit',component:ProductEditComponent},
  ]
 }


];


@NgModule({
  declarations: [ ProductDetailsComponent,
    ProductsComponent,
    ProductEditComponent,
   ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,

  ],
  exports:[RouterModule]
})
export class ProductModule { }
