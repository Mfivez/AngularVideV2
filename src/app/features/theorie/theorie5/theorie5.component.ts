import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie5',
  templateUrl: './theorie5.component.html',
  styleUrl: './theorie5.component.scss'
})
export class Theorie5Component {
  title: String = "Bienvenue sur Angular !"
  imageUrl: String = "assets/binding/image.png"
  alt: String = "Texte alternatif en pour l'exemple de Property Binding."
  username: String = ""

  handleClick() { alert("Tu as cliqué sur le bouton !")}

  constructor(public nav: NavigateService) {}
}
