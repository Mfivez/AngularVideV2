import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Theorie7Component } from './theorie7.component';



@NgModule({
  declarations: [
    Theorie7Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    Theorie7Component
  ]
})
export class Theorie7Module { }
