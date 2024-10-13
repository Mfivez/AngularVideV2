import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo7Component } from './demo7/demo7.component';
import { Demo8Component } from './demo8/demo8.component';
import { Demo9Component } from './demo9/demo9.component';
import { Demo10Component } from './demo10/demo10.component';
import { Demo11Component } from './demo11/demo11.component';
import { Demo12Component } from './demo12/demo12.component';
import { Demo13Component } from './demo13/demo13.component';
import { Demo14Component } from './demo14/demo14.component';
import { Demo15Component } from './demo15/demo15.component';
import { Demo16Component } from './demo16/demo16.component';
import { Demo17Component } from './demo17/demo17.component';
import { Demo18Component } from './demo18/demo18.component';
import { Demo19Component } from './demo19/demo19.component';
import { Demo20Component } from './demo20/demo20.component';
import { Demo21Component } from './demo21/demo21.component';
import { RouterClassComponent } from './demo12/components/router-class/router-class.component';

const routes: Routes = [
  {path: '3', component: Demo3Component },
  {path: '4', component: Demo4Component },
  {path: '5', component: Demo5Component },
  {path: '6', component: Demo6Component },
  {path: '7', component: Demo7Component },
  {path: '8', component: Demo8Component },
  {path: '9', component: Demo9Component },
  {path: '10', component: Demo10Component },
  {path: '11', component: Demo11Component },
  {path: '12', component: Demo12Component },
  {path: '12', loadChildren: () => import('./demo12/demo12.module').then(m => m.Demo12Module) },
  {path: '13', component: Demo13Component },
  {path: '14', component: Demo14Component },
  {path: '15', component: Demo15Component },
  {path: '15', loadChildren: () => import('./demo15/demo15.module').then(m => m.Demo15Module) },
  {path: '16', component: Demo16Component },
  {path: '17', component: Demo17Component },
  {path: '18', component: Demo18Component },
  {path: '19', component: Demo19Component },
  {path: '20', component: Demo20Component },
  {path: '21', component: Demo21Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
