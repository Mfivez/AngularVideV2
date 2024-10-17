import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/exercice/user/user.component';
import { LoginComponent } from './components/exercice/login/login.component';
import { authGuardGuard } from './tools/auth-guard.guard';

const routes: Routes = [
  { path: 'user/:id', component: UserComponent, 
    canActivate: [authGuardGuard]
  },
  { path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterGuardResolverRoutingModule { }
