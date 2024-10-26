import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectionUserComponent } from './components/correction/user/user.component';
import { CorrectionLoginComponent } from './components/correction/login/login.component';
import { correctionAuthGuardGuard } from './components/correction/tools/auth-guard.guard';

const routes: Routes = [
  { path: 'user/:id', component: CorrectionUserComponent, 
    canActivate: [correctionAuthGuardGuard]
  },
  { path: 'login', component: CorrectionLoginComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterGuardResolverRoutingModule { }
