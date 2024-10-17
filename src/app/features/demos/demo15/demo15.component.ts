import { Component } from '@angular/core';
import { ProductService } from './tools/services/product.service';
import { Product } from './tools/models/product.model';
import { finalize, mergeMap } from 'rxjs';
import { Router } from '@angular/router';
import { NavigateService } from '../../theorie/shared/services/navigate.service';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html',
  styleUrl: './demo15.component.scss'
})
export class Demo15Component {
  products: Product[] = [];
  paginatedProducts: Product[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  pageSize: number = 5;

  constructor (private _productService: ProductService, private router: Router, public readonly nav: NavigateService) { }

    ngOnInit (): void {
      this.loadProducts();
      }

    loadProducts(): void {
      this._productService.get().subscribe(data => {
        this.products = data.filter(product => product.name && product.price != null); 
        this.totalPages = Math.ceil(this.products.length / this.pageSize); 
        this.updatePaginatedProducts();
      });
    }

    updatePaginatedProducts(): void {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.paginatedProducts = this.products.slice(startIndex, endIndex);
    }

    nextPage(): void {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.updatePaginatedProducts();
      }
    }

    previousPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updatePaginatedProducts();
      }
    }

    delete(id: number): void {
      this._productService.delete(id).subscribe(() => {
        this.loadProducts();
      });
    }

    toggleAddMode(): void {
      this.router.navigate(['/demos/15/add']);
    }
  
    openEditForm(product: Product): void {
      this.router.navigate(['/demos/15/edit', product.id]);
    }

}
