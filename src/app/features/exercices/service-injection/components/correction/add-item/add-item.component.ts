import { Component } from '@angular/core';
import { CorrectionShoppingListService } from '../tools/shopping.service';

@Component({
  selector: 'correction-add',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class CorrectionAddComponent {
  newItemName: string = ''

  constructor(private shoppingListService: CorrectionShoppingListService) {}

  addItem() {
    if (this.newItemName.trim()) {

      this.shoppingListService.addItem({
        name:this.newItemName, qte:1
      })

      this.newItemName = ''
    }
  }
}
