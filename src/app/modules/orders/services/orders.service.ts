import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, catchError, concatMap, map, of, tap } from 'rxjs';
import { Order } from '../types/order.type';
import { ProductsService } from '../../products/services/products.service';
import { UsersService } from '../../../shared/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: Order[] = [];

  constructor(
    private _http: HttpClient,
    private _productsService: ProductsService,
    private _usersService: UsersService
  ) { }

  getOrders(): Observable<Order[]> {
    if (this.orders.length) return of(this.orders);

    return this._http.get<Order[]>(`${environment.api}orders.json`).pipe(
      catchError(() => of([]))
    )
  }

  combinOrderWithData(): Observable<Order[]> {
    return this.getOrders().pipe(
      concatMap((orders) => this.combineOrdersWithProduct(orders)),
      concatMap((orders) => this.combineOrdersWithUser(orders))
    )
  }

  combineOrdersWithProduct(orders: Order[]): Observable<Order[]> {
    return this._productsService.getProducts().pipe(
      map((products) => {
        return orders.map((order) => {
          return {
            ...order,
            Products: order.Products.map((product) => {
              return {
                ...product,
                Product: products.find((pro) => pro.ProductId === product.ProductId) || null
              }
            })                
          }
        })
      }),
      map((orders) => {
        return orders.map((order) => {
          return {
            ...order,
            TotalPrice: order.Products.reduce((prev, next) => prev + ((next.Product?.ProductPrice || 0) * next.Quantity) ,0)
          }
        })
      })
    )
  }

  combineOrdersWithUser(orders: Order[]): Observable<Order[]>  {
    return this._usersService.getUsers().pipe(
      map((users) => {
        return orders.map((order) => {
          return {
            ...order,
            User: users.find((user) => user.Id === order.UserId)
          }
        }) as Order[]
      }),
      tap((orders: Order[]) => {
        this.orders = orders
      }),
    )
  }

  getOrderById(orderId: number): Observable<any> {
    if (this.orders.length) return of(this.orders.find((order) => order.OrderId == orderId));

    return this.combinOrderWithData().pipe(
      map((order) => order.find((o) => o.OrderId == orderId) as any)
    )
  }
}
