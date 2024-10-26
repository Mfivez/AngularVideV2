import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'correction-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class CorrectionAddItemComponent {
  newItem: string = '';
  @Output() itemAdded = new EventEmitter<string>();

  addItem() {
    if (this.newItem.trim()) {
      this.itemAdded.emit(this.newItem);
      this.newItem = '';
    }
  }
}
