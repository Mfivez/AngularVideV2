import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie2',
  templateUrl: './theorie2.component.html',
  styleUrl: './theorie2.component.scss'
})
export class Theorie2Component {

  constructor (public nav: NavigateService) {}

}
