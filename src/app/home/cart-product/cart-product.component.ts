import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
  @Input() cart: any = new Set();
  constructor(private _cart: CartService) {}
  ngOnInit() {}
  removeItem(id: number) {
    let index = this.cart.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
