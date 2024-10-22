import { Component, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../../tools/shopping.service';
import { shoppingItem } from '../../tools/shopping-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddComponent {
  newItemName: string = ''

  constructor(private shoppingListService: ShoppingListService) {}

  addItem() {
    if (this.newItemName.trim()) {

      this.shoppingListService.addItem({
        name:this.newItemName, qte:1
      })

      this.newItemName = ''
    }
  }
}
