import { Component } from '@angular/core';

@Component({
  selector: 'correction-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrl: './shopping-view.component.scss'
})
export class CorrectionShoppingViewComponent {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
