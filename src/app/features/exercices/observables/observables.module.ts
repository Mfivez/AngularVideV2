import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservablesComponent } from './observables.component';
import { CorrectionPokemonDetailComponent } from './components/correction/pokemon-detail/pokemon-detail.component';
import { CorrectionPokemonListComponent } from './components/correction/pokemon-list/pokemon-list.component';
import { StudentPokemonListComponent } from './components/student/pokemon-list/pokemon-list.component';
import { StudentPokemonDetailComponent } from './components/student/pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    ObservablesComponent,
    CorrectionPokemonDetailComponent,
    CorrectionPokemonListComponent,
    StudentPokemonListComponent,
    StudentPokemonDetailComponent
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ],
  exports: [
    ObservablesComponent
  ]
})
export class ObservablesModule { }
