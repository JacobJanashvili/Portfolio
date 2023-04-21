import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { LoadingService } from '../loading.service';
@Component({
  selector: 'app-opened-product',
  templateUrl: './opened-product.component.html',
  styleUrls: ['./opened-product.component.css'],
})
export class OpenedProductComponent implements OnInit {
  constructor(
    private _product: ProductService,
    private _cart: CartService,
    private _loading: LoadingService
  ) {}
  loaded=this._loading.loading$
  product_items: any;
  ngOnInit() {
    this.product_items = this._product
      .getSingleProduct(this._product.singleProductId)
      .subscribe((data) => {
        this.product_items = data;
        console.log(this.product_items);
      });
    console.log(this.product_items);
  }
  handleAddToCart(item: any) {
    this._cart.addToCart(item);
  }
}
