import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './shared/header/header.component';
import { SilderComponent } from './shared/silder/silder.component';



@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    SilderComponent,
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
