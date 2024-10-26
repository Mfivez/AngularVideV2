import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterGuardResolverRoutingModule } from './router-guard-resolver-routing.module';
import { RouterGuardResolverComponent } from './router-guard-resolver.component';
import { CorrectionExerciceComponent } from './components/correction/exercice.component';
import { CorrectionLoginComponent } from './components/correction/login/login.component';
import { CorrectionUserComponent } from './components/correction/user/user.component';
import { StudentExerciceComponent } from './components/student/exercice.component';
import { StudentLoginComponent } from './components/student/login/login.component';
import { StudentUserComponent } from './components/student/user/user.component';

@NgModule({
  declarations: [
    RouterGuardResolverComponent,
    CorrectionExerciceComponent,
    CorrectionLoginComponent,
    CorrectionUserComponent,
    StudentExerciceComponent,
    StudentLoginComponent,
    StudentUserComponent
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
