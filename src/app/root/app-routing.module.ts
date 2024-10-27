import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../features/features.module').then(module => module.FeaturesModule)},
  { path: '', loadChildren: () => import('../experimentations/experimentations.module').then(module => module.ExperimentationsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
