import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theorie2Component } from './theorie2.component';
import { ContextComponent } from './components/context/context.component';
import { GoalComponent } from './components/goal/goal.component';
import { StepsComponent } from './components/steps/steps.component';



@NgModule({
  declarations: [
    Theorie2Component,
    ContextComponent,
    GoalComponent,
    StepsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Theorie2Component,
    ContextComponent,
    GoalComponent,
    StepsComponent
  ]
})
export class Theorie2Module { }
