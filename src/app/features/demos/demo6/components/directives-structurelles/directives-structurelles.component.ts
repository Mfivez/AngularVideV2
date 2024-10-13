import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-structurelles',
  templateUrl: './directives-structurelles.component.html',
  styleUrl: './directives-structurelles.component.scss'
})
export class DirectivesStructurellesComponent {

  isToggled: boolean = false;
  liste: string[] = ["pomme", "poire", "cerise", "pêche", "prune", "orange"];
  inputValue: string = "";

  toggle (): void {
    this.isToggled = !this.isToggled;
  }

}
