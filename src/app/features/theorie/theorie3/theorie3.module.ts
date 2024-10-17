import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theorie3Component } from './theorie3.component';
import { RoutingContextComponent } from './components/routing-context/routing-context.component';
import { SetRouting1Component } from './components/set-routing1/set-routing1.component';
import { FinallyComponent } from './components/finally/finally.component';



@NgModule({
  declarations: [
    Theorie3Component,
    RoutingContextComponent,
    SetRouting1Component,
    FinallyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Theorie3Component,
    RoutingContextComponent,
    SetRouting1Component,
    FinallyComponent
  ]
})
export class Theorie3Module { }
