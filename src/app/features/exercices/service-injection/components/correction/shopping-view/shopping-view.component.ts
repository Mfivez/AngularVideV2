import { Component } from '@angular/core';
import { CorrectionShoppingListService } from '../tools/shopping.service';
import { CorrectionShoppingItem } from '../tools/shopping-item.model';

@Component({
  selector: 'correction-shopping',
  templateUrl: './shopping-view.component.html',
  styleUrl: './shopping-view.component.scss'
})
export class CorrectionShoppingComponent {
  items: CorrectionShoppingItem[] = [];

  constructor(private shoppingListService: CorrectionShoppingListService) {
    this.items = this.shoppingListService.getItems();
  }

  addItem(item: CorrectionShoppingItem) {
    this.items = this.shoppingListService.addItem(item);
  }

  removeItem(index: number) {
    this.items = this.shoppingListService.removeItem(index);
  }
}
