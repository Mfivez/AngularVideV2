import { Component } from '@angular/core';
import { AuthService } from '../../../../../demos/demo14/tools/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'correction-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class CorrectionLoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login();
    this.router.navigate(['/exos/10']);
  }
}
