import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie12',
  templateUrl: './theorie12.component.html',
  styleUrl: './theorie12.component.scss'
})
export class Theorie12Component {
  constructor(public readonly nav : NavigateService) {}

}
