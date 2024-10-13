import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HighlightDirective } from '../features/demos/demo6/components/custom-directive/tools/highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';


@NgModule({
  declarations: [
    CapitalizePipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    CapitalizePipe,
  ]
})
export class SharedModule { }
