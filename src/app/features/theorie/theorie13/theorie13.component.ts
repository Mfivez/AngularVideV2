import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie13',
  templateUrl: './theorie13.component.html',
  styleUrl: './theorie13.component.scss'
})
export class Theorie13Component {
  constructor(public readonly nav: NavigateService) {}

}
