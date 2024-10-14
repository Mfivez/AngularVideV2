import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Redirige ceux qui essaye de se rendre vers 'http://localhost:4200' vers 'http://localhost:4200/home'
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  //Liaison - module Home à l'URL : 'http://localhost:4200/home'
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  //Liaison - module Demos à l'URL : 'http://localhost:4200/demos'
  { path: 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule) },

  //Liaison - module Exercices à l'URL : 'http://localhost:4200/exos'
  { path: 'exos', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule) },

  //Liaison - module Theorie à l'URL : 'http://localhost:4200/theorie'
  { path: 'theorie', loadChildren: () => import('./theorie/theorie.module').then(m => m.TheorieModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
