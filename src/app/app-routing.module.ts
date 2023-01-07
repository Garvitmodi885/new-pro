import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    loadChildren : ()=>import('./user/user.module').then(use=>use.UserModule)
  },
  {
    path : "admin",
    loadChildren : ()=>import('./admin/admin.module').then(adm=>adm.AdminModule)
  },
  {
    path : "seller",
    loadChildren : ()=>import('./seller/seller.module').then(sel=>sel.SellerModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
