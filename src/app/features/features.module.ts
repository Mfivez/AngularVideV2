import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    // Plus besoin d'importer les modules Exercices & Démos ici puisqu'ils sont déjà chargés via le lazy loading du FeaturesRoutingModule !
  ],
  exports: [
    // Les modules enfants n'ont plus besoin d'être exportés car le routing les charge dynamiquement
  ]
})
export class FeaturesModule { }
