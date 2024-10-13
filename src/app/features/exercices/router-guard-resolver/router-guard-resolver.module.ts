import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterGuardResolverRoutingModule } from './router-guard-resolver-routing.module';
import { RouterGuardResolverComponent } from './router-guard-resolver.component';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { LoginComponent } from './components/exercice/login/login.component';
import { UserComponent } from './components/exercice/user/user.component';


@NgModule({
  declarations: [
    RouterGuardResolverComponent,
    ExerciceComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterGuardResolverRoutingModule
  ],
  exports: [
    RouterGuardResolverComponent,
  ]
})
export class RouterGuardResolverModule { }
