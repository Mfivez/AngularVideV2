import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule) },
  { path: 'exos', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule) },
  { path: 'theorie', loadChildren: () => import('./theorie/theorie.module').then(m => m.TheorieModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
