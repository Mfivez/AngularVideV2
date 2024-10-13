import { Component } from '@angular/core';
import { SessionStorageService } from '../../tools/session-storage.service';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrl: './session-storage.component.scss'
})
export class SessionStorageComponent {
  usernameSession: string = "";
  savedUsernameSession: string = "";

  constructor (private sessionStorageService: SessionStorageService) { }

  saveSession () {
    this.sessionStorageService.setItem('usernameSession', this.usernameSession);
  }

  loadSession () {
    this.savedUsernameSession = this.sessionStorageService.getItem('usernameSession');
  }

  removeSession () {
    this.sessionStorageService.removeItem('usernameSession');
  }

  clearSession () {
    this.sessionStorageService.clear();
  }
}
