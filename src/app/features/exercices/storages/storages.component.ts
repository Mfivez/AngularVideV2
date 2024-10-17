import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';
import { StorageService } from './tools/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrl: './storages.component.scss'
})
export class StoragesComponent{
  pseudo: string | null = null;
  welcomeMessage: string | null = null;

  constructor(public readonly nav: NavigateService, private readonly storage: StorageService, private readonly router: Router) {} 

  ngOnInit(): void {
    this.pseudo = this.storage.getUserPseudo()
    this.welcomeMessage = this.storage.getWelcomeMessage()

    if (this.welcomeMessage) {
      this.storage.removeWelcomeMessage()
    }
  }

  logout(): void {
    this.storage.removeUserPseudo();
    this.storage.removeWelcomeMessage();
    this.router.navigate(['exos/10/login'])
  }

}