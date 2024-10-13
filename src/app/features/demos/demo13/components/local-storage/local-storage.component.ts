import { Component } from '@angular/core';
import { LocalStorageService } from '../../tools/local-storage.service';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrl: './local-storage.component.scss'
})
export class LocalStorageComponent {

    constructor (private localStorageService: LocalStorageService) { }

    usernameLocal: string = "";
    savedUsernameLocal: string = "";
  
    saveLocal () {
      this.localStorageService.setItem('usernameLocal', this.usernameLocal);
    }
  
    loadLocal () {
      this.savedUsernameLocal = this.localStorageService.getItem('usernameLocal');
    }
  
    removeLocal () {
      this.localStorageService.removeItem('usernameLocal');
    }
  
    clearLocal () {
      this.localStorageService.clear();
    }

}
