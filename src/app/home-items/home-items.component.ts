import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { ProductListComponent } from '../home-items/product-list/product-list.component';
import { ProductComponent } from '../home-items/product-list/product/product.component';

@Component({
  selector: 'app-home-items',
  templateUrl: './home-items.component.html',
  styleUrls: ['./home-items.component.css']
})
export class HomeItemsComponent {
  subscribed: boolean = false;
  newsLetterSubscribe() {
    this.subscribed = !this.subscribed;
  }
  constructor(
    private _productService: ProductService,
    private _cart: CartService
  ) {}
}
