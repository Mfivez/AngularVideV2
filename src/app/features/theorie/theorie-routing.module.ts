import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Theorie1Component } from './theorie1/theorie1.component';
import { Theorie2Component } from './theorie2/theorie2.component';
import { Theorie3Component } from './theorie3/theorie3.component';
import { Theorie4Component } from './theorie4/theorie4.component';
import { Theorie5Component } from './theorie5/theorie5.component';
import { Theorie6Component } from './theorie6/theorie6.component';
import { Theorie7Component } from './theorie7/theorie7.component';
import { Theorie8Component } from './theorie8/theorie8.component';
import { Theorie9Component } from './theorie9/theorie9.component';
import { Theorie10Component } from './theorie10/theorie10.component';
import { Theorie11Component } from './theorie11/theorie11.component';
import { Theorie12Component } from './theorie12/theorie12.component';
import { Theorie13Component } from './theorie13/theorie13.component';
import { Theorie14Component } from './theorie14/theorie14.component';
import { Theorie15Component } from './theorie15/theorie15.component';
import { Theorie16Component } from './theorie16/theorie16.component';
import { Theorie17Component } from './theorie17/theorie17.component';
import { Theorie18Component } from './theorie18/theorie18.component';
import { Theorie19Component } from './theorie19/theorie19.component';
import { Theorie20Component } from './theorie20/theorie20.component';
import { Theorie21Component } from './theorie21/theorie21.component';

const routes: Routes = [
  {path: "1", component: Theorie1Component},
  {path: "2", component: Theorie2Component},
  {path: "3", component: Theorie3Component},
  {path: "4", component: Theorie4Component},
  {path: "5", component: Theorie5Component},
  {path: "6", component: Theorie6Component},
  {path: "7", component: Theorie7Component},
  {path: "8", component: Theorie8Component},
  {path: "9", component: Theorie9Component},
  {path: "10", component: Theorie10Component},
  {path: "11", component: Theorie11Component},
  {path: "12", component: Theorie12Component},
  {path: "13", component: Theorie13Component},
  {path: "14", component: Theorie14Component},
  {path: "15", component: Theorie15Component},
  {path: "16", component: Theorie16Component},
  {path: "17", component: Theorie17Component},
  {path: "18", component: Theorie18Component},
  {path: "19", component: Theorie19Component},
  {path: "20", component: Theorie20Component},
  {path: "21", component: Theorie21Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheorieRoutingModule { }
