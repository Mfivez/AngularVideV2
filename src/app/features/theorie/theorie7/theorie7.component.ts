import { Component } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';

@Component({
  selector: 'app-theorie7',
  templateUrl: './theorie7.component.html',
  styleUrl: './theorie7.component.scss'
})
export class Theorie7Component {
  constructor(public readonly nav : NavigateService) {}

  today: Date = new Date()
  price: number = 1234.56
  score: number = 42.678
  text: string = 'hello world'
  forChange: String = ""
  items: { name: string }[] = [
    { name: 'john doe' },
    { name: 'jane smith'},
    { name: 'alice johnson' }
  ]
  

  imageUrl: String = "assets/pipes/capitalizePipeTs.png"
  imageUrl2: String = "assets/pipes/capPipeResult.png"
  imageUrl3: String = "assets/pipes/impurPipe.png"
  imageUrl4: String = "assets/pipes/customPipe.png"
  imageUrl5: String = "assets/pipes/integratedPipes.png"
  imageUrl6: String = "assets/pipes/integratedPipesJs.png"
}
