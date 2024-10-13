import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterClassComponent } from './components/router-class/router-class.component';
import { Demo12Component } from './demo12.component';
import { Demo12RoutingModule } from './demo12-routing.module';
import { GuardsComponent } from './components/guards-component/guards.component';
import { ResolversComponent } from './components/resolvers-component/resolvers.component';

@NgModule({
  declarations: [
    RouterClassComponent,
    Demo12Component,
    GuardsComponent,
    ResolversComponent
  ],
  imports: [
    CommonModule,
    Demo12RoutingModule
  ],
  exports: [
    Demo12Component
  ]
})
export class Demo12Module { }
