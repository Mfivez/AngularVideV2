import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo15Component } from './demo15.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import { provideHttpClient } from '@angular/common/http';
import { Demo15RoutingModule } from './demo15-routing.module';



@NgModule({
  declarations: [
    Demo15Component,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Demo15RoutingModule
  ],
  exports: [
    Demo15Component
  ]
})
export class Demo15Module { }
