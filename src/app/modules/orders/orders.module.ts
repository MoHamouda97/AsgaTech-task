import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { OrdersRouteRoutingModule } from './orders-route-routing.module';
import { ORDER_PAGES } from './pages/order-pages';
import { ORDERS_SERVICES } from './services/orders-service';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    OrdersRouteRoutingModule,
    ...ORDER_PAGES
  ],
  providers: [
    ...ORDERS_SERVICES,
  ]
})
export class OrdersModule { }
