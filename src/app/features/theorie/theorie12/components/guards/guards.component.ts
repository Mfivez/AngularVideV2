import { Component } from '@angular/core';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrl: './guards.component.scss'
})
export class GuardsComponent {
  imageUrl: String = "assets/guards/authGuard.png"
  imageUrl2: String = "assets/guards/canActivate.png"

}
