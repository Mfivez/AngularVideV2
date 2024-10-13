import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo14Component } from './demo14.component';
import { ObservablesComponent } from './components/observables/observables.component';



@NgModule({
  declarations: [
    Demo14Component,
    ObservablesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Demo14Component
  ]
})
export class Demo14Module { }
