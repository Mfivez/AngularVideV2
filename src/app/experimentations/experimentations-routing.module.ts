import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './recyclable-forms/components/view/view.component';

const routes: Routes = [
  {path:"exp1", component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperimentationsRoutingModule { }
