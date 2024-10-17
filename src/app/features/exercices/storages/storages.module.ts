import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoragesRoutingModule } from './storages-routing.module';
import { StoragesComponent } from './storages.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StoragesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoragesRoutingModule
  ],
  exports: [
    StoragesComponent,
    LoginComponent
  ]
})
export class StoragesModule { }
