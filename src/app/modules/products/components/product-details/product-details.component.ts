import { Component, Input } from '@angular/core';
import { Product } from '../../types/product.type';
import { CommonModule } from '@angular/common';
import { AddQuantityComponent } from '../add-quantity/add-quantity.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    AddQuantityComponent
  ]
})
export class ProductDetailsComponent {
  @Input() product!: Product;
}
