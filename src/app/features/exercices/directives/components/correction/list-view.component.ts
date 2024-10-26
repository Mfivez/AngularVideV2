import { Component } from '@angular/core';
import { produit } from '../correction/tools/produit.model';

@Component({
  selector: 'correction-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class CorrectionListViewComponent {
  productList: produit[] = [
    {nom:"patate", photo:"assetsExo/Binding/patate.jpg", prix:12, prixPromo:10, enPromo:false, qttRestante:2},
    {nom:"pomme", photo:"assetsExo/Binding/pomme.jpg", prix:12, prixPromo:10, enPromo:false, qttRestante:0},
    {nom:"poire", photo:"assetsExo/Binding/poire.jpg", prix:12, prixPromo:10, enPromo:true, qttRestante:5}
  ]

}
