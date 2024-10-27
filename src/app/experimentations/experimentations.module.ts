import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentationsRoutingModule } from './experimentations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './recyclable-forms/components/view/view.component';
import { ValidatorsErrorsHandlerComponent } from './recyclable-forms/components/dynamic-component/components/validators-errors-handler/validators-errors-handler.component';
import { RecyclableFormsComponent } from './recyclable-forms/components/dynamic-component/recyclable-forms.component';


@NgModule({
  declarations: [
    RecyclableFormsComponent,
    ViewComponent,
    ValidatorsErrorsHandlerComponent,
  ],
  imports: [
    CommonModule,
    ExperimentationsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExperimentationsModule { }
