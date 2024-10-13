import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo9Component } from './demo9.component';
import { ChildOutputComponent } from './components/child-output/child-output.component';
import { ChildBidirectionalComponent } from './components/child-bidirectional/child-bidirectional.component';
import { ChildInputComponent } from './components/child-input/child-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Demo9Component,
    ChildOutputComponent,
    ChildBidirectionalComponent,
    ChildInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Demo9Component,
    ChildOutputComponent,
    ChildBidirectionalComponent,
    ChildInputComponent
  ]
})
export class Demo9Module { }
