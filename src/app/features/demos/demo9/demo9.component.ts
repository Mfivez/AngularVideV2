import { Component } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrl: './demo9.component.scss'
})
export class Demo9Component {
  constructor(public readonly nav : NavigateService) {}
  
  messageDuParent = 'Bonjour depuis le parent !'; // Input Exemple
  /********************************************************************/
  recevoirMessage(message: string) { // Output Exemple
    console.log('Message reçu du composant enfant :', message); 
  }
  /********************************************************************/
  messageRecu: string = 'Bonjour de Parent !' // Bidirectional Exemple
  /********************************************************************/


  
}
