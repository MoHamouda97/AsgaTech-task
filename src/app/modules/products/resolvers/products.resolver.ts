import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductsService } from "../services/products.service";
import { Product } from "../types/product.type";

@Injectable()
export class ProductsResolver  {

    constructor(private _productsService: ProductsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Product[]> {
        return this._productsService.getProducts();
    }
}