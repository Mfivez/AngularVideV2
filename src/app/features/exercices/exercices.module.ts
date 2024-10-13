import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { DirectivesComponent } from './directives/directives.component';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { CyclesDeVieComponent } from './cycles-de-vie/cycles-de-vie.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ComponentsComponent } from './component-Exo/components.component';
import { Exo1Component } from './component-Exo/components/exo1/exo1.component';
import { CorrectionFormulaireSebComponent } from './correction-formulaire-seb/correction-formulaire-seb.component';
import { ContactFormComponent } from './correction-formulaire-seb/components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterGuardResolverModule } from './router-guard-resolver/router-guard-resolver.module';
import { ServiceInjectionComponent } from './service-injection/service-injection.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { StoragesModule } from './storages/storages.module';
import { ObservablesModule } from './observables/observables.module';
import { HttpClientModule } from './http-client/http-client.module';


@NgModule({
  declarations: [
    DirectivesComponent,
    BindingComponent,
    PipesComponent,
    CyclesDeVieComponent,
    InputOutputComponent,
    ComponentsComponent,
    Exo1Component,
    CorrectionFormulaireSebComponent,
    ContactFormComponent,
    ServiceInjectionComponent,
    InterceptorComponent,
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterGuardResolverModule,
    StoragesModule,
    ObservablesModule,
    HttpClientModule
  ]
})
export class ExercicesModule { }
