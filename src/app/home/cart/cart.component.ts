import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _cart: CartService) {}
  cart: any = [];
  ngOnInit(): void {
    this.cart=this._cart.getCart()
  }
}
