import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LangageAnalyseComponent } from './langage-analyse/langage-analyse.component';

const routes: Routes = [
  {path:"1", component: IntroComponent},
  {path:"2", component: LangageAnalyseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypescriptRoutingModule { }
