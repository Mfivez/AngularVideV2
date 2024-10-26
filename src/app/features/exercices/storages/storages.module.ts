import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoragesRoutingModule } from './storages-routing.module';
import { StoragesComponent } from './storages.component';
import { FormsModule } from '@angular/forms';
import { CorrectionLoginComponent } from './components/correction/login.component';
import { StudentLoginComponent } from './components/student/login.component';


@NgModule({
  declarations: [
    StoragesComponent,
    CorrectionLoginComponent,
    StudentLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoragesRoutingModule
  ],
  exports: [
    StoragesComponent,
    CorrectionLoginComponent,
    StudentLoginComponent
  ]
})
export class StoragesModule { }
