import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  constructor(public readonly nav: NavigateService) {}
}
