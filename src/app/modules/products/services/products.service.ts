import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, catchError, of, tap } from 'rxjs';
import { Product } from '../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    if (this.products.length) return of(this.products);

    return this._http.get<Product[]>(`${environment.api}porducts.json`).pipe(
      tap((products) => {
        this.products = products
      }),
      catchError(() => of([]))
    )
  }

  updateProductQuantity(id: number, newQuantity: number) {
    const index = this.products.findIndex((p) => p.ProductId === id);
    this.products[index].AvailablePieces = newQuantity;
  }
}
