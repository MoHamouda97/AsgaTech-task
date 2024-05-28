import { Route } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const routes: Route[] = [
    {
        path: 'app',
        component: LayoutComponent,
        children: [
            {
                path: 'products',
                loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'orders',
                loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'app/products'
    }
] 