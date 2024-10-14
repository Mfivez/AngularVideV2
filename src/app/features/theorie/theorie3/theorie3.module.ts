import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theorie3Component } from './theorie3.component';
import { RoutingContextComponent } from './components/routing-context/routing-context.component';
import { SetRouting1Component } from './components/set-routing1/set-routing1.component';
import { SetRouting3Component } from './components/set-routing3/set-routing3.component';
import { SetRouting4Component } from './components/set-routing4/set-routing4.component';
import { ActiveUrlComponent } from './components/active-url/active-url.component';
import { SetRouting5Component } from './components/set-routing5/set-routing5.component';
import { SetRouting6Component } from './components/set-routing6/set-routing6.component';
import { FinallyComponent } from './components/finally/finally.component';



@NgModule({
  declarations: [
    Theorie3Component,
    RoutingContextComponent,
    SetRouting1Component,
    SetRouting3Component,
    SetRouting4Component,
    ActiveUrlComponent,
    SetRouting5Component,
    SetRouting6Component,
    FinallyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Theorie3Component,
    RoutingContextComponent,
    SetRouting1Component,
    SetRouting3Component,
    SetRouting4Component,
    ActiveUrlComponent,
    SetRouting5Component,
    SetRouting6Component,
    FinallyComponent
  ]
})
export class Theorie3Module { }
