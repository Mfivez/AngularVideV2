import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item.models';

export class HeaderService {
  
  constructor() {}

  getDemoMenuItems(): MenuItem[] {
    return this.getMappedMenu([
      "Binding", "Directives", "Pipes", "Cycles de vie",
      "Input | Output", "Services | Injection", "Formulaire", "Router | Guards | Resolver", "Storages",
      "Observables", "HttpClient", "Interceptor"
    ], 5)
    }

  getTheorieMenuItems(): MenuItem[] {
    return this.getMappedMenu([
      "Rappel : Intro", "Composants", "Routing", "NavBar", "Binding", "Directives", "Pipes", "Cycles de vie",
      "Input | Output", "Services | Injection", "Formulaire", "Router | Guards | Resolver", "Storages",
      "Observables", "HttpClient"
    ])
  }

  getExoMenuItems(): MenuItem[] {
    return this.getMappedMenu([
      "Composants", "Routing", "Binding", "Directives", "Pipes", "Cycles de vie",
      "Input | Output", "Services | Injection", "Formulaire", "Router | Guards | Resolver", "Storages",
      "Observables", "HttpClient", "Interceptor"
    ])
    }
  
  getMappedMenu(list: string[],startingId:number=1): MenuItem[] {
    return list.map((value, index) => {
      return { id: (startingId + index).toString(), name: value };
    });
  }

}

