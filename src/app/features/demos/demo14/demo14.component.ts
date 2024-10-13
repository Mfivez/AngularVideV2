import { Component } from '@angular/core';
import { AuthService } from './tools/services/auth.service';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrl: './demo14.component.scss'
})
export class Demo14Component {
  constructor(public readonly nav: NavigateService) {}
}
