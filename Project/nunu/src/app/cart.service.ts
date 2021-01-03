import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {

    private cart: any[]
    constructor() {
        this.cart = []
    }

    public getCart() {
        return this.cart
    }

    public clearCart(): void {
        this.cart = []
    }
}
