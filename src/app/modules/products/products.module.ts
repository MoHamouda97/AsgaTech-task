import { NgModule } from '@angular/core';
import { ProductsRouteRoutingModule } from './products-route-routing.module';
import { PRODUCT_PAGES } from './pages/product-pages';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRouteRoutingModule,
    ...PRODUCT_PAGES,
  ],
  providers: []
})
export class ProductsModule { }
