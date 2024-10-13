import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theorie14Component } from './theorie14.component';
import { IntroComponent } from './components/intro/intro.component';



@NgModule({
  declarations: [
    Theorie14Component,
    IntroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Theorie14Component
  ]
})
export class Theorie14Module { }
