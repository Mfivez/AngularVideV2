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
import { PokemonComponent } from './interceptor/components/pokemon/pokemon.component';
import { RoutingComponent } from './routing/routing.component';
import { UserProfileComponent } from './binding/components/user-profile/user-profile.component';
import { ListViewComponent } from './directives/components/list-view/list-view.component';
import { ChronoComponent } from './pipes/components/chrono/chrono.component';
import { TimerComponent } from './cycles-de-vie/components/timer/timer.component';
import { AddItemComponent } from './input-output/components/add-item/add-item.component';
import { ItemListComponent } from './input-output/components/item-list/item-list.component';
import { ShoppingViewComponent } from './input-output/components/shopping-view/shopping-view.component';
import { AddComponent } from './service-injection/components/add-item/add-item.component';
import { ListComponent } from './service-injection/components/item-list/item-list.component';
import { ShoppingComponent } from './service-injection/components/shopping-view/shopping-view.component';


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
    PokemonComponent,
    RoutingComponent,
    UserProfileComponent,
    ListViewComponent,
    ChronoComponent,
    TimerComponent,
    AddItemComponent,
    ItemListComponent,
    ShoppingViewComponent,
    AddComponent,
    ListComponent,
    ShoppingComponent
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
