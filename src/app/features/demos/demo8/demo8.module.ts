import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCyclesComponent } from './components/life-cycles/life-cycles.component';
import { Demo8Component } from './demo8.component';



@NgModule({
  declarations: [
    Demo8Component,
    LifeCyclesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Demo8Component,
    LifeCyclesComponent
  ]
})
export class Demo8Module { }
