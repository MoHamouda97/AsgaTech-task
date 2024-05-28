import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { Order } from '../../types/order.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  orderDetails!: Order;
  destroy$ = new Subject();

  constructor(
    private _router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRouteData();
  }

  getRouteData(): void {
    this._router.data.pipe(
      map(data => data),
      takeUntil(this.destroy$)
    ).subscribe({
      next: ({orderDetails}) => {
        this.orderDetails = orderDetails;
        console.log(this.orderDetails)
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
