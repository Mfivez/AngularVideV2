import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
  constructor(public readonly nav: NavigateService) {}
}
