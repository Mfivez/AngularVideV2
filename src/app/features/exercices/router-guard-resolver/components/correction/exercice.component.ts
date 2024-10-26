import { Component } from '@angular/core';
import { NavigateService } from '../../../../theorie/shared/services/navigate.service';
import { CorrectionFakeAuthService } from './tools/fake-auth.service';

@Component({
  selector: 'correction-exercice',
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.scss'
})
export class CorrectionExerciceComponent {

  constructor(public readonly nav: NavigateService, public auth: CorrectionFakeAuthService) {}
}
