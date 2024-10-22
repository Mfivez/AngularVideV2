import { Component } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { LocalService } from './local.service';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie10',
  templateUrl: './theorie10.component.html',
  styleUrl: './theorie10.component.scss',
  providers: [LocalService]
})
export class Theorie10Component {
  dataServiceUrl: string = 'assets/services/dataService.png'
  componentJsUrl: string = 'assets/services/componentJs.png'
  localServiceUrl: string = 'assets/services/localService.png'  
  serviceConstructorUrl: string = 'assets/services/serviceConstructor.png'
  inject: string = 'assets/services/inject.png'

  data: string

  constructor(public readonly nav: NavigateService, private myService: DataService, private localService: LocalService) {
    this.data = this.myService.getData()
    this.localService.sayHello()
  }
}
