import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandCreationComponent } from './components/command-creation/command-creation.component';
import { StartServerComponent } from './components/start-server/start-server.component';
import { AotProcessComponent } from './components/aot-process/aot-process.component';
import { ProjectStructureComponent } from './components/project-structure/project-structure.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { AppModuleComponent } from './components/app-module/app-module.component';
import { CreateElementsComponent } from './components/create-elements/create-elements.component';
import { Theorie1Component } from './theorie1.component';



@NgModule({
  declarations: [
    Theorie1Component,
    CommandCreationComponent,
    StartServerComponent,
    AotProcessComponent,
    ProjectStructureComponent,
    ProgrammingComponent,
    AppModuleComponent,
    CreateElementsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Theorie1Component,
    CommandCreationComponent,
    StartServerComponent,
    AotProcessComponent,
    ProjectStructureComponent,
    ProgrammingComponent,
    AppModuleComponent,
    CreateElementsComponent
  ]
})
export class Theorie1Module { }
