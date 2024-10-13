import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-attributs',
  templateUrl: './directives-attributs.component.html',
  styleUrl: './directives-attributs.component.scss'
})
export class DirectivesAttributsComponent {

  currentStyle: any;

  italic: boolean = false;
  bold: boolean = false;
  size: boolean = false;

  isActive: boolean = false;

  constructor () { }

  ngOnInit (): void {
  }

  setCurrentStyle () {
    this.currentStyle = {
      'font-style': this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold' : 'normal',
      'font-size': this.size ? '24px' : '12px',
    };
  }

  switchItalic () {
    this.italic = !this.italic;
    this.setCurrentStyle();
  }

  switchBold () {
    this.bold = !this.bold;
    this.setCurrentStyle();
  }

  switchSize () {
    this.size = !this.size;
    this.setCurrentStyle();
  }

  switchClass () {
    this.isActive = !this.isActive;
  }
}
