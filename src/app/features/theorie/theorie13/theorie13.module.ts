import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theorie13Component } from './theorie13.component';
import { StorageComponent } from './components/storage/storage.component';
import { LocalStorageComponent } from './components/local-storage/local-storage.component';
import { SessionStorageComponent } from './components/session-storage/session-storage.component';
import { ComparaisonComponent } from './components/comparaison/comparaison.component';
import { OtherComponent } from './components/other/other.component';



@NgModule({
  declarations: [
    Theorie13Component,
    StorageComponent,
    LocalStorageComponent,
    SessionStorageComponent,
    ComparaisonComponent,
    OtherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Theorie13Component
  ]
})
export class Theorie13Module { }
