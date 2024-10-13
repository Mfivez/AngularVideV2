import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie9',
  templateUrl: './theorie9.component.html',
  styleUrl: './theorie9.component.scss'
})
export class Theorie9Component {
  constructor(public readonly nav: NavigateService) {}


  messageDuParent = 'Bonjour depuis le parent !'; // Input Exemple
  /********************************************************************/
  recevoirMessage(message: string) { // Output Exemple
    console.log('Message reçu du composant enfant :', message); 
  }
  /********************************************************************/
  messageRecu: string = 'Bonjour de Parent !'
  /********************************************************************/
  inputChildUrl: String = 'assets/inputOutput/inputChild.png'
  inputChildHtmlUrl: String = 'assets/inputOutput/inputChildHtml.png'
  inputParentUrl: String = 'assets/inputOutput/inputParent.png'
  inputParentHtmlUrl: String = 'assets/inputOutput/inputParentHtml.png'

  outputChildUrl: String = 'assets/inputOutput/outputChild.png'
  outputChildHtmlUrl: String = 'assets/inputOutput/outputChildHtml.png'
  outputParentUrl: String = 'assets/inputOutput/outputParent.png'
  outputParentHtmlUrl: String = 'assets/inputOutput/outputParentHtml.png'

  bidirectionalChildUrl: String = 'assets/inputOutput/bidirectionalChild.png'
  bidirectionalChildHtmlUrl: String = 'assets/inputOutput/bidirectionalChildHtml.png'
  bidirectionalParentUrl: String = 'assets/inputOutput/bidirectionalParent.png'
  bidirectionalParentHtmlUrl: String = 'assets/inputOutput/bidirectionalParentHtml.png'
  bidirectionalImportUrl: String = 'assets/inputOutput/bidirectionalImport.png'
}
