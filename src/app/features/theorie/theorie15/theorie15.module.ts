import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theorie15Component } from './theorie15.component';
import { HttpClientComponent } from './components/http-client/http-client.component';



@NgModule({
  declarations: [
    Theorie15Component,
    HttpClientComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Theorie15Component
  ]
})
export class Theorie15Module { }
