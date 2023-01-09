import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashComponent } from './pages/dash/dash.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { ProductComponent } from './pages/product/product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    CategoryComponent,
    AddCategoryComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
