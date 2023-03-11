import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any[]=[];
  constructor() {}
  addToCart(item: any) {
    let index=this.cart.findIndex(e=>e.id==item.id)
    if(index==-1){
      this.cart.push(item)
    }
  }
  getCart() {
    return this.cart
  }
}
