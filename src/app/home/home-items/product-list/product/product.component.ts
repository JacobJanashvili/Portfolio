import { Component, OnInit, Input, Pipe } from '@angular/core';
import { CartService } from '../../../../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() data: any;
  constructor(private _cart: CartService) {}
  handleAddToCart(item: any) {
    this._cart.addToCart(item);
  }
}
