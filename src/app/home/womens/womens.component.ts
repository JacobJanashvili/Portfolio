import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/cart.service';
import { LoadingService } from 'src/app/loading.service';
@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css'],
})
export class WomensComponent implements OnInit {
  womans_items: any = [];
  constructor(
    private _productService: ProductService,
    private _cart: CartService,
    private _loading: LoadingService
  ) {}
    loaded=this._loading.loading$
  ngOnInit() {
    this.womans_items = this._productService
      .getWomensFull()
      .subscribe((data) => (this.womans_items = data));
  }
  handleAddToCart(item: any) {
    this._cart.addToCart(item);
  }
  addId(item: number) {
    this._productService.setID(item);
  }
}
