import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { ObservablesComponent } from './observables.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    ObservablesComponent
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
