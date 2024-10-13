import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  imageUrl1: string = "assets/observables/observable.png"
  imageUrl2: string = "assets/observables/observer.png"
  imageUrl3: string = "assets/observables/exemple1.png"
  imageUrl4: string = "assets/observables/exemple2.png"
  imageUrl5: string = "assets/observables/exemple3.png"
  imageUrl6: string = "assets/observables/exemple4.png"
}
