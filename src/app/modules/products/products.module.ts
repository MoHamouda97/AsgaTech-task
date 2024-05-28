import { NgModule } from '@angular/core';
import { ProductsRouteRoutingModule } from './products-route-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRouteRoutingModule
  ],
  providers: []
})
export class ProductsModule { }
