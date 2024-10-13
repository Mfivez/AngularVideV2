import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo6Component } from './demo6.component';
import { FormsModule } from '@angular/forms';
import { DirectivesStructurellesComponent } from './components/directives-structurelles/directives-structurelles.component';
import { DirectivesAttributsComponent } from './components/directives-attributs/directives-attributs.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { HighlightDirective } from './components/custom-directive/tools/highlight.directive';



@NgModule({
  declarations: [
    Demo6Component,
    DirectivesStructurellesComponent,
    DirectivesAttributsComponent,
    CustomDirectiveComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Demo6Component,
    DirectivesStructurellesComponent,
    DirectivesAttributsComponent,
    CustomDirectiveComponent,
    HighlightDirective
  ]
})
export class Demo6Module { }
