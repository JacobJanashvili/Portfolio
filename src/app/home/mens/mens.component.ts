import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css'],
})
export class MensComponent implements OnInit {
  mens_items: any = [];
  constructor(
    private _productService: ProductService,
    private _cart: CartService
  ) {}
  ngOnInit() {
    this.mens_items = this._productService
      .getMansFull()
      .subscribe((data) => (this.mens_items = data));
  }
  handleAddToCart(item: any) {
    this._cart.addToCart(item);
  }
  addId(item: number) {
    this._productService.setID(item)
  }
}
