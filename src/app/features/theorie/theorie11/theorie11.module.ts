import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theorie11Component } from './theorie11.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Theorie11Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    Theorie11Component
  ]
})
export class Theorie11Module { }
