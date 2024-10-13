import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildBidirectionalComponent } from './child-bidirectional/child-bidirectional.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { Theorie9Component } from './theorie9.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Theorie9Component,
    ChildOutputComponent,
    ChildBidirectionalComponent,
    ChildInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Theorie9Component,
    ChildOutputComponent,
    ChildBidirectionalComponent,
    ChildInputComponent
  ]
})
export class Theorie9Module { }
