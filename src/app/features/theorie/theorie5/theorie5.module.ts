import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Theorie5Component } from './theorie5.component';



@NgModule({
  declarations: [
    Theorie5Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Theorie5Component
  ]
})
export class Theorie5Module { 
}
