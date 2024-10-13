import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrl: './child-output.component.scss'
})
export class ChildOutputComponent {
  @Output() messageEnvoye = new EventEmitter<string>();

  envoyerMessage() {
    this.messageEnvoye.emit('Message envoyé par l\'enfant !'); 
  }
}
