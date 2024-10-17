import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theorie4Component } from './theorie4.component';
import { ContextComponent } from './components/context/context.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { Step4Component } from './components/step4/step4.component';



@NgModule({
  declarations: [
    Theorie4Component,
    ContextComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Theorie4Component,
    ContextComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ]
})
export class Theorie4Module { }
