import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../tools/models/product.model';
import { ProductService } from '../../tools/services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  editForm: FormGroup;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      name: [''],
      price: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.productId = id;
        this._productService.getById(id).subscribe(product => {
          this.editForm.patchValue(product);
        });
      }
    });
  }

  updateProduct(): void {
    if (this.editForm.valid && this.productId !== null) {
      const updatedProduct: Product = this.editForm.value;
      this._productService.update(this.productId, updatedProduct).subscribe(() => {
        console.log('Produit mis à jour');
        this.editForm.reset();
        this.router.navigate(['/demos/15']);
      });
    }
  }

  cancelUpdate(): void {
    this.productId = null;
    this.editForm.reset();
    this.router.navigate(['/demos/15']);
  }
}