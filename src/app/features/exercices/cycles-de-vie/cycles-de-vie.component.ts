import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-cycles-de-vie',
  templateUrl: './cycles-de-vie.component.html',
  styleUrl: './cycles-de-vie.component.scss'
})
export class CyclesDeVieComponent {
  constructor(public readonly nav: NavigateService) {}
}
