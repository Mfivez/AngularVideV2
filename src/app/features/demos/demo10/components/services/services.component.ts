import { Component } from '@angular/core';
import { ApiService } from '../../tools/api.service';
import { FakeAuthService } from '../../tools/fake-auth.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  providers: [FakeAuthService]
})
export class ServicesComponent {
  isConnected: boolean = false;

  username: string = '';
  password: string = '';

  message!: string;

  constructor (private _fakeAuthService: FakeAuthService) { }

  ngOnInit (): void {
    this.isConnected = this._fakeAuthService.isLoggedIn();
  }

  logIn (): void {
    this._fakeAuthService.connect(this.username, this.password);
    if (this.isConnected === this._fakeAuthService.isLoggedIn())
      this.message = "Identifiant ou mot de passe incorrect.";
    else {
      this.isConnected = this._fakeAuthService.isLoggedIn();
      this.message = '';
      this.username = '';
      this.password = '';
    }
  }

  logOut (): void {
    this._fakeAuthService.disconnect();
    this.isConnected = this._fakeAuthService.isLoggedIn();;
  }
}
