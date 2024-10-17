import { Component } from '@angular/core';
import { NavigateService } from '../../../../theorie/shared/services/navigate.service';
import { FakeAuthService } from '../../tools/fake-auth.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.scss'
})
export class ExerciceComponent {

  constructor(public readonly nav: NavigateService, public auth: FakeAuthService) {}
}
