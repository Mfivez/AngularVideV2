import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectionLoginComponent } from './components/correction/login.component';

const routes: Routes = [
  { path: 'login', component: CorrectionLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoragesRoutingModule { }
