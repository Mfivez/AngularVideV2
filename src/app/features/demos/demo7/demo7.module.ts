import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegratedPipesComponent } from './components/integrated-pipes/integrated-pipes.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { ImpurPipesComponent } from './components/impur-pipes/impur-pipes.component';
import { Demo7Component } from './demo7.component';
import { CustomPipe } from './components/custom-pipes/tools/custom.pipe';
import { FormsModule } from '@angular/forms';
import { ImpurePipe } from './components/impur-pipes/tools/impure.pipe';



@NgModule({
  declarations: [
    IntegratedPipesComponent,
    CustomPipesComponent,
    ImpurPipesComponent,
    Demo7Component,
    CustomPipe,
    ImpurePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IntegratedPipesComponent,
    CustomPipesComponent,
    ImpurPipesComponent,
    Demo7Component,
    CustomPipe,
    ImpurePipe
  ]
})
export class Demo7Module { }
