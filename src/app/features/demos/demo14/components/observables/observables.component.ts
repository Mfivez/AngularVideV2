import { Component } from '@angular/core';
import { AuthService } from '../../tools/services/auth.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent {
  isConnected: boolean = false;

  constructor (private _AuthService: AuthService) { }

  ngOnInit (): void {
    this._AuthService.statusSubject$.subscribe({
      next: (data: boolean) => this.isConnected = data
    });
  }

  login () {
    this._AuthService.login();
  }

  logout () {
    this._AuthService.logout();
  }
}
