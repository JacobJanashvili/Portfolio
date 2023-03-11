import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css'],
})
export class JeweleryComponent implements OnInit {
  jewelery: any = [];
  constructor(
    private _productService: ProductService,
    private _cart: CartService
  ) {}
  ngOnInit() {
    this.jewelery = this._productService
      .getJeweleryFull()
      .subscribe((data) => (this.jewelery = data));
  }
  handleAddToCart(item: any) {
    this._cart.addToCart(item);
  }
  addId(item: number) {
    this._productService.setID(item);
  }
}
