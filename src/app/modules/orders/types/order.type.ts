import { User } from "../../../shared/types/user.type"
import { Product } from "../../products/types/product.type"

export type Order = {
    OrderDate: Date,
    OrderId: number,
    PaymentType: string,
    Products: {ProductId: number, Quantity: number, Product: Product | null}[],
    UserId: string,
    TotalPrice: number,
    User: User
}