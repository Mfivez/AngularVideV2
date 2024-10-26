import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'correction-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class CorrectionItemListComponent {
  @Input() items: string[] = [];
  @Output() itemRemoved = new EventEmitter<number>();

  removeItem(index: number) {
    this.itemRemoved.emit(index);
  }
}
