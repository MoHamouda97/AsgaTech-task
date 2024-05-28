import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { OrdersService } from "../services/orders.service";
import { Order } from "../types/order.type";

export const OrderDetailsResolver: ResolveFn<Order[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const id = route.params['id'];
    const _ordersService: OrdersService = inject(OrdersService);

    return _ordersService.getOrderById(id);
}