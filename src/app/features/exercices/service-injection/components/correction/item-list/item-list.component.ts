import { Component, Input } from '@angular/core';
import { CorrectionShoppingListService } from '../tools/shopping.service';
import { CorrectionShoppingItem } from '../tools/shopping-item.model';

@Component({
  selector: 'correction-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class CorrectionListComponent {
  @Input() items: CorrectionShoppingItem[] = [];

  constructor(private shoppingListService: CorrectionShoppingListService) {}

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
