import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrl: './demo12.component.scss'
})
export class Demo12Component {
  constructor(public readonly nav : NavigateService) {}
}

