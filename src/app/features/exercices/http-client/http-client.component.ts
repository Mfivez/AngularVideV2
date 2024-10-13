import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.scss'
})
export class HttpClientComponent {
  constructor(public readonly nav: NavigateService) {}
}
