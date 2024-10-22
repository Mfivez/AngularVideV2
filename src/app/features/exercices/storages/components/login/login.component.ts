import { Component } from '@angular/core';
import { StorageService } from '../../tools/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  pseudo: string = '';

  constructor(private readonly storageService: StorageService, private readonly router: Router) {}

  login(): void {
    if (this.pseudo) {
      this.storageService.setUserPseudo(this.pseudo);
      this.storageService.setWelcomeMessage(`Bienvenue ${this.pseudo}!`);
      this.router.navigate(['/exos/11']);
    }
  }
}