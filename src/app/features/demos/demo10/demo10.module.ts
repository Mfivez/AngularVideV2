import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { Demo10Component } from './demo10.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Demo10Component,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Demo10Component,
    ServicesComponent
  ]
})
export class Demo10Module { }
