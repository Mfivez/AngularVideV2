import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo12Component } from './demo12.component';
import { isauthGuard } from './tools/guards/isauth.guard';
import { canActivateChildGuard } from './tools/guards/can-activate-child.guard';
import { canDesactivateGuard } from './tools/guards/can-desactivate.guard';
import { UserResolver } from './tools/resolvers/user.resolver';

const routes: Routes = [
  { path: ':id', component: Demo12Component, 
    canActivate: [canActivateChildGuard, isauthGuard], //Démo Guards
    canDeactivate: [canDesactivateGuard], //Démo Guards
    resolve: { user: UserResolver } //Démo Résolvers
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo12RoutingModule { }
