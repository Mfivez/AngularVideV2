import { Injectable } from '@angular/core';
import { shoppingItem } from './shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
    private items: shoppingItem[] = [] 

  addItem(item: shoppingItem): shoppingItem[] {
    this.items.push(item)
    return this.getItems()
  }

  removeItem(index: number): shoppingItem[] {
    this.items.splice(index, 1)
    return this.getItems()
  }

  getItems(): shoppingItem[] {
    return this.items;
  }
}