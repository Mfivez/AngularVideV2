import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Demo13Component } from './demo13.component';
import { SessionStorageComponent } from './components/session-storage/session-storage.component';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';



@NgModule({
  declarations: [
    Demo13Component,
    SessionStorageComponent,
    LocalStorageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Demo13Component
  ]
})
export class Demo13Module { }
