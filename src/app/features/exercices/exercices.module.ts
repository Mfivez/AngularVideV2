import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { DirectivesComponent } from './directives/directives.component';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { CyclesDeVieComponent } from './cycles-de-vie/cycles-de-vie.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ComponentsComponent } from './component-Exo/components.component';
import { CorrectionFormulaireSebComponent } from './correction-formulaire-seb/correction-formulaire-seb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterGuardResolverModule } from './router-guard-resolver/router-guard-resolver.module';
import { ServiceInjectionComponent } from './service-injection/service-injection.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { StoragesModule } from './storages/storages.module';
import { ObservablesModule } from './observables/observables.module';
import { HttpClientModule } from './http-client/http-client.module';
import { RoutingComponent } from './routing/routing.component';
import { CorrectionUserProfileComponent } from './binding/components/correction/user-profile/user-profile.component';
import { StudentUserProfileComponent } from './binding/components/student/user-profile/user-profile.component';
import { StudentContactFormComponent } from './correction-formulaire-seb/components/student/contact-form.component';
import { CorrectionContactFormComponent } from './correction-formulaire-seb/components/correction/contact-form.component';
import { StudentTimerComponent } from './cycles-de-vie/components/student/timer.component';
import { CorrectionTimerComponent } from './cycles-de-vie/components/correction/timer.component';
import { StudentListViewComponent } from './directives/components/student/list-view.component';
import { CorrectionListViewComponent } from './directives/components/correction/list-view.component';
import { CorrectionAddItemComponent } from './input-output/components/correction/add-item/add-item.component';
import { CorrectionItemListComponent } from './input-output/components/correction/item-list/item-list.component';
import { CorrectionShoppingViewComponent } from './input-output/components/correction/shopping-view/shopping-view.component';
import { StudentAddItemComponent } from './input-output/components/student/add-item/add-item.component';
import { StudentItemListComponent } from './input-output/components/student/item-list/item-list.component';
import { StudentShoppingViewComponent } from './input-output/components/student/shopping-view/shopping-view.component';
import { CorrectionPokemonComponent } from './interceptor/components/correction/pokemon.component';
import { StudentPokemonComponent } from './interceptor/components/student/pokemon.component';
import { StudentChronoComponent } from './pipes/components/student/chrono.component';
import { CorrectionChronoComponent } from './pipes/components/correction/chrono.component';
import { CorrectionAddComponent } from './service-injection/components/correction/add-item/add-item.component';
import { CorrectionListComponent } from './service-injection/components/correction/item-list/item-list.component';
import { CorrectionShoppingComponent } from './service-injection/components/correction/shopping-view/shopping-view.component';
import { StudentAddComponent } from './service-injection/components/student/add-item/add-item.component';
import { StudentListComponent } from './service-injection/components/student/item-list/item-list.component';
import { StudentShoppingComponent } from './service-injection/components/student/shopping-view/shopping-view.component';



@NgModule({
  declarations: [
    PipesComponent,
    StudentChronoComponent,
    CorrectionChronoComponent,

    InputOutputComponent,
    ComponentsComponent,

    ServiceInjectionComponent,
    CorrectionAddComponent,
    CorrectionListComponent,
    CorrectionShoppingComponent,
    StudentAddComponent,
    StudentListComponent,
    StudentShoppingComponent,

    RoutingComponent,

    InterceptorComponent,
    CorrectionPokemonComponent,
    StudentPokemonComponent,

    InputOutputComponent,
    CorrectionAddItemComponent,
    CorrectionItemListComponent,
    CorrectionShoppingViewComponent,
    StudentAddItemComponent,
    StudentItemListComponent,
    StudentShoppingViewComponent,

    DirectivesComponent,
    StudentListViewComponent,
    CorrectionListViewComponent,

    CyclesDeVieComponent,
    StudentTimerComponent,
    CorrectionTimerComponent,

    BindingComponent,
    CorrectionUserProfileComponent,
    StudentUserProfileComponent,

    CorrectionFormulaireSebComponent,
    CorrectionContactFormComponent,
    StudentContactFormComponent,
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
