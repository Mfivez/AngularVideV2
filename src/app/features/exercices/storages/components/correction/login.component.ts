import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CorrectionStorageService } from './tools/storage.service';

@Component({
  selector: 'correction-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class CorrectionLoginComponent {
  pseudo: string = '';

  constructor(private readonly storageService: CorrectionStorageService, private readonly router: Router) {}

  login(): void {
    if (this.pseudo) {
      this.storageService.setUserPseudo(this.pseudo);
      this.storageService.setWelcomeMessage(`Bienvenue ${this.pseudo}!`);
      this.router.navigate(['/exos/11']);
    }
  }
}