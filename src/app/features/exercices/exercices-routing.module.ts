import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { CyclesDeVieComponent } from './cycles-de-vie/cycles-de-vie.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ComponentsComponent } from './component-Exo/components.component';
import { CorrectionFormulaireSebComponent } from './correction-formulaire-seb/correction-formulaire-seb.component';
import { RouterGuardResolverComponent } from './router-guard-resolver/router-guard-resolver.component';
import { ServiceInjectionComponent } from './service-injection/service-injection.component';
import { StoragesComponent } from './storages/storages.component';
import { ObservablesComponent } from './observables/observables.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
  {path: "1", component: ComponentsComponent},
  {path: '2', component: RoutingComponent},
  {path: "3", component: BindingComponent},
  {path: "4", component: DirectivesComponent},
  {path: "5", component: PipesComponent},
  {path: "6", component: CyclesDeVieComponent},
  {path: "7", component: InputOutputComponent},
  {path: "8", component: CorrectionFormulaireSebComponent},
  {path: "9", component: RouterGuardResolverComponent},
  {path: '9', loadChildren: () => import('./router-guard-resolver/router-guard-resolver.module').then(m => m.RouterGuardResolverModule) },
  {path: '10', component: ServiceInjectionComponent},
  {path: '11', component: StoragesComponent},
  {path: '11', loadChildren: () => import('./storages/storages.module').then(m => m.StoragesModule) },
  {path: '12', component: ObservablesComponent},
  {path: '12', loadChildren: () => import('./observables/observables.module').then(m => m.ObservablesModule) },
  {path: '13', component: HttpClientComponent},
  {path: '13', loadChildren: () => import('./http-client/http-client.module').then(m => m.HttpClientModule) },
  {path: '14', component: InterceptorComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }
