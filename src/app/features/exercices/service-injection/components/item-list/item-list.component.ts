import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingListService } from '../../tools/shopping.service';
import { shoppingItem } from '../../tools/shopping-item.model';

@Component({
  selector: 'app-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ListComponent {
  @Input() items: shoppingItem[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  removeItem(index: number) {
    this.shoppingListService.removeItem(index);
  }

  changeQuantity(index: number, change: number) {
    if (this.items[index]) {
      this.items[index].qte += change;

      if (this.items[index].qte == 0) {
        this.removeItem(index)
      }
    }
  }
}
