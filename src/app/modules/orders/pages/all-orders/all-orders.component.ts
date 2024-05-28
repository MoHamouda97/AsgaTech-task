import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { Order } from '../../types/order.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AllOrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  destroy$ = new Subject();

  constructor(
    private _router: ActivatedRoute,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.getRouteData();
  }

  getRouteData(): void {
    this._router.data.pipe(
      map(data => data),
      takeUntil(this.destroy$)
    ).subscribe({
      next: ({orders}) => {
        this.orders = orders;
      }
    })
  }

  viewDetails(orderId: number) {
    this._route.navigate([`app/orders/${orderId}`])
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
