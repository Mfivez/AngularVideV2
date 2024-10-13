import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo15Component } from './demo15.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo15RoutingModule { }
