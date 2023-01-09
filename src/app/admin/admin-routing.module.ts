import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashComponent } from './pages/dash/dash.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "dash",
        component : DashComponent
      },
      {
        path : "category",
        component : CategoryComponent
      },
      {
        path : "add-category",
        component : AddCategoryComponent
      },
      {
        path : "product",
        component : ProductComponent
      },
      {
        path : "add-product",
        component : AddProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
