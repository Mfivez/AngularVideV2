import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientRoutingModule } from './http-client-routing.module';
import { HttpClientComponent } from './http-client.component';
import { FormsModule } from '@angular/forms';
import { CorrectionUserFormComponent } from './components/correction/user-form/user-form.component';
import { CorrectionUserListComponent } from './components/correction/user-list/user-list.component';
import { StudentUserFormComponent } from './components/student/user-form/user-form.component';
import { StudentUserListComponent } from './components/student/user-list/user-list.component';


@NgModule({
  declarations: [
    HttpClientComponent,
    CorrectionUserFormComponent,
    CorrectionUserListComponent,
    StudentUserFormComponent,
    StudentUserListComponent
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
