import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectionPokemonDetailComponent } from './components/correction/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'pokemon-detail', component: CorrectionPokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
