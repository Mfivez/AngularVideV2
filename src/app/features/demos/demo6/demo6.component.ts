import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.scss'
})
export class Demo6Component {
  constructor (public readonly nav : NavigateService) {}
  

}
