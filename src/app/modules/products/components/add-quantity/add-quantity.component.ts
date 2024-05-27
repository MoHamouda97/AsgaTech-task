import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../types/product.type';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrl: './add-quantity.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class AddQuantityComponent implements OnInit {
  @Input() product!: Product;
  @Output() quantityAdded: EventEmitter<boolean> = new EventEmitter();

  form!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.form = this._fb.group({
      quantity: [this.product.AvailablePieces, [Validators.required]]
    })
  }

  updateQuantity() {
    const {quantity} = this.form.getRawValue();

    this._productsService.updateProductQuantity(this.product.ProductId, quantity);

    this.quantityAdded.emit()
  }
}
