import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo16Component } from './demo16.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Demo16Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Demo16Component
  ]
})
export class Demo16Module { }
