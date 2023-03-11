import { Component, ViewChild, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.css'],
})
export class CartProductListComponent implements OnInit {
  cart: any[] = [];
  constructor(private _cart: CartService) {}
  ngOnInit() {
    this.cart = this._cart.getCart();
  }
}
