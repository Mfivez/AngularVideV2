import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypescriptRoutingModule } from './typescript-routing.module';
import { IntroComponent } from './intro/intro.component';
import { LangageAnalyseComponent } from './langage-analyse/langage-analyse.component';


@NgModule({
  declarations: [
    IntroComponent,
    LangageAnalyseComponent
  ],
  imports: [
    CommonModule,
    TypescriptRoutingModule
  ]
})
export class TypescriptModule { }
