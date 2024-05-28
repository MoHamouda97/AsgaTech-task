import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrdersComponent } from './pages/all-orders/all-orders.component';
import { OrdersResolver } from './resolvers/orders.resolver'
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderDetailsResolver } from './resolvers/order-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: AllOrdersComponent,
    resolve: {
      orders: OrdersResolver
    }
  },
  {
    path: ':id',
    component: OrderDetailsComponent,
    resolve: {
      orderDetails: OrderDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRouteRoutingModule { }
