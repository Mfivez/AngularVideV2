import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo5Component } from './demo5.component';
import { FormsModule } from '@angular/forms';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { PropertyBindingTwoWayComponent } from './components/property-binding-two-way/property-binding-two-way.component';
import { AttributeBindingComponent } from './components/attribute-binding/attribute-binding.component';



@NgModule({
  declarations: [
    Demo5Component,
    EventBindingComponent,
    PropertyBindingComponent,
    PropertyBindingTwoWayComponent,
    AttributeBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Demo5Component,
    EventBindingComponent,
    PropertyBindingComponent,
    PropertyBindingTwoWayComponent,
    AttributeBindingComponent
  ]
})
export class Demo5Module { }
