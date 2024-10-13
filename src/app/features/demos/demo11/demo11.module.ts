import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo11Component } from './demo11.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { WithValidatorsComponent } from './components/with-validators/with-validators.component';
import { CustomValidatorsComponent } from './components/custom-validators/custom-validators.component';



@NgModule({
  declarations: [
    Demo11Component,
    TwoWayBindingComponent,
    WithValidatorsComponent,
    CustomValidatorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    Demo11Component
  ]
})
export class Demo11Module { }
