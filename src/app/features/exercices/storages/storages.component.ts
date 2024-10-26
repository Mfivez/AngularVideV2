import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';
import { Router } from '@angular/router';
import { CorrectionStorageService } from './components/correction/tools/storage.service';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrl: './storages.component.scss'
})
export class StoragesComponent{
  pseudo: string | null = null;
  welcomeMessage: string | null = null;

  constructor(public readonly nav: NavigateService, private readonly storage: CorrectionStorageService, private readonly router: Router) {} 

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