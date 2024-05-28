import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrdersRouteRoutingModule } from './orders-route-routing.module';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    OrdersRouteRoutingModule,
  ]
})
export class OrdersModule { }
