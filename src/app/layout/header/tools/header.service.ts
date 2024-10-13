import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item.models';

export class HeaderService {
  
  constructor() {}

  getDemoMenuItems(): MenuItem[] {
    return [
      {id:"5" , name:'Binding'},
      {id:"6" , name:'Directives'},
      {id:"7" , name:'Pipes'},
      {id:"8" , name:'Cycles de vie'},
      {id:"9" , name:'Input | Output'},
      {id:"10" , name:'Services | Injection'},
      {id:"11" , name:'Formulaires'},
      {id:"12" , name:'Router | Guards | Resolver'},
      {id:"13" , name:'Storages'},
      {id:"14" , name:'Observables'},
      {id:"15" , name:'HttpClient'},
      {id:"16" , name:'Interceptor'},
    ];
    }

  getTheorieMenuItems(): MenuItem[] {
  return [
    {id:"1" , name:'Rappel : intro'},
    {id:"2" , name:'Composants'},
    {id:"3" , name:'Routing'},
    {id:"4" , name:'NavBar'},
    {id:"5" , name:'Binding'},
    {id:"6" , name:'Directives'},
    {id:"7" , name:'Pipes'},
    {id:"8" , name:'Cycles de vie'},
    {id:"9" , name:'Input | Output'},
    {id:"10" , name:'Services | Injection'},
    {id:"11" , name:'Formulaires'},
    {id:"12" , name:'Router | Guards | Resolver'},
    {id:"13" , name:'Storages'},
    {id:"14" , name:'Observables'},
    {id:"15" , name:'HttpClient'},
  ];
  }

  getExoMenuItems(): MenuItem[] {
    return [
      {id:"1" , name:'Composants'},
      {id:"2" , name:'Binding'},
      {id:"3" , name:'Directives'},
      {id:"4" , name:'Pipes'},
      {id:"5" , name:'Cycles de vie'},
      {id:"6" , name:'Input | Output'},
      {id:"9" , name:'Services | Injection'},
      {id:"7" , name:'Seb Formulaire'},
      {id:"8" , name:'Router | Guards | Resolver'},
      {id:"10" , name:'Storage'},
      {id:"11" , name:'Observables'},
      {id:"12" , name:'HttpClient'},
      {id:"13" , name:'Interceptor'},
    ];
    }

}

