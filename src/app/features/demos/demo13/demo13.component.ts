import { Component } from '@angular/core';
import { LocalStorageService } from './tools/local-storage.service';
import { SessionStorageService } from './tools/session-storage.service';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html',
  styleUrl: './demo13.component.scss'
})
export class Demo13Component {
  constructor(public readonly nav : NavigateService) {}

}
