import { Injectable } from '@angular/core';
import { CorrectionShoppingItem } from './shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class CorrectionShoppingListService {
    private items: CorrectionShoppingItem[] = [] 

  addItem(item: CorrectionShoppingItem): CorrectionShoppingItem[] {
    this.items.push(item)
    return this.getItems()
  }

  removeItem(index: number): CorrectionShoppingItem[] {
    this.items.splice(index, 1)
    return this.getItems()
  }

  getItems(): CorrectionShoppingItem[] {
    return this.items;
  }
}