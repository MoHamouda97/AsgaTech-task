import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, map, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product.type';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
  standalone: true,
  imports: [
    ProductDetailsComponent
  ]
})
export class AllProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  destroy$ = new Subject();

  constructor(private _router: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRouteData();
  }

  getRouteData(): void {
    this._router.data.pipe(
      map(data => data),
      takeUntil(this.destroy$)
    ).subscribe({
      next: ({products}) => {
        this.products = products
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
