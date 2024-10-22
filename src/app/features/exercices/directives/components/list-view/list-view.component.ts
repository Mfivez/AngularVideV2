import { Component } from '@angular/core';
import { produit } from '../../tools/produit.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {
  productList: produit[] = [
    {nom:"patate", photo:"assetsExo/Binding/patate.jpg", prix:12, prixPromo:10, enPromo:false, qttRestante:2},
    {nom:"pomme", photo:"assetsExo/Binding/pomme.jpg", prix:12, prixPromo:10, enPromo:false, qttRestante:0},
    {nom:"poire", photo:"assetsExo/Binding/poire.jpg", prix:12, prixPromo:10, enPromo:true, qttRestante:5}
  ]

}
