import { NgModule } from '@angular/core';
import { ProductsRouteRoutingModule } from './products-route-routing.module';
import { PRODUCT_PAGES } from './pages/product-pages';
import { ProductsService } from './services/products.service';
import { PRODUCT_RESOLVERS } from './resolvers/product-resolvers';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRouteRoutingModule,
    ...PRODUCT_PAGES,
  ],
  providers: [
    ProductsService,
    ...PRODUCT_RESOLVERS
  ]
})
export class ProductsModule { }
