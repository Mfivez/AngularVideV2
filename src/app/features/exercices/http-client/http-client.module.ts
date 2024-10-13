import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientRoutingModule } from './http-client-routing.module';
import { HttpClientComponent } from './http-client.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HttpClientComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientRoutingModule,
    FormsModule
  ],
  exports: [
    HttpClientComponent
  ]
})
export class HttpClientModule { }
