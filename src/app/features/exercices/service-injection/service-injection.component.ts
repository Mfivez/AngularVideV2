import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-service-injection',
  templateUrl: './service-injection.component.html',
  styleUrl: './service-injection.component.scss'
})
export class ServiceInjectionComponent {
  constructor(public readonly nav: NavigateService) {}
}
