import { Component } from '@angular/core';
import { ShoppingListService } from '../../tools/shopping.service';
import { shoppingItem } from '../../tools/shopping-item.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping-view.component.html',
  styleUrl: './shopping-view.component.scss'
})
export class ShoppingComponent {
  items: shoppingItem[] = [];

  constructor(private shoppingListService: ShoppingListService) {
    this.items = this.shoppingListService.getItems();
  }

  addItem(item: shoppingItem) {
    this.items = this.shoppingListService.addItem(item);
  }

  removeItem(index: number) {
    this.items = this.shoppingListService.removeItem(index);
  }
}
