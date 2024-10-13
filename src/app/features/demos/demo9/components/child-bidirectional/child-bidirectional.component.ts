import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-bidirectional',
  templateUrl: './child-bidirectional.component.html',
  styleUrl: './child-bidirectional.component.scss'
})
export class ChildBidirectionalComponent {
  @Input() message?: string;
  @Output() messageChange = new EventEmitter<string>();

  envoyerMessage() {
    this.messageChange.emit(this.message);
  } 
}