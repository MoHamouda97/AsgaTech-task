import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ProductsService } from "../services/products.service";
import { Product } from "../types/product.type";

export const ProductsResolver: ResolveFn<Product[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const _productsService: ProductsService = inject(ProductsService);
    return _productsService.getProducts();
}