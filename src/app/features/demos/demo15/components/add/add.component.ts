import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../tools/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../tools/models/product.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  form: FormGroup
  @Output() productAdded = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder, 
    private productService: ProductService, 
    private router: Router
  ) {
    this.form = this.fb.group({
      name: [''],
      price: ['']
    });
  }

  onSubmit(): void {
    const newProduct: Product = this.form.value

    this.productService.add(newProduct).subscribe(() => {
      this.productAdded.emit()
      this.form.reset();
    })
  }

  goBack(): void {
    this.router.navigate(['/demos/15']);
  }

}
