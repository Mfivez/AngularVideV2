import { Component } from '@angular/core';

@Component({
  selector: 'app-integrated-pipes',
  templateUrl: './integrated-pipes.component.html',
  styleUrl: './integrated-pipes.component.scss'
})
export class IntegratedPipesComponent {
  maVariable1: string = "hello world !"
  maVariable2: number = 150.369852147
  maVariable3: Date = new Date()
  maVariable4: any = { nom: 'Thibaut', prenom: 'Ribeiro', sexe: 'GigaChad' }
  maVariable5: number = 0.121
  maVariable6: number = 12.24

}
