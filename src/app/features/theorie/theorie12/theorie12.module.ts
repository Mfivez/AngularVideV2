import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theorie12Component } from './theorie12.component';
import { RouterComponent } from './components/router/router.component';
import { GuardsComponent } from './components/guards/guards.component';
import { ResolversComponent } from './components/resolvers/resolvers.component';



@NgModule({
  declarations: [
    Theorie12Component,
    RouterComponent,
    GuardsComponent,
    ResolversComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Theorie12Component
  ]
})
export class Theorie12Module { }
