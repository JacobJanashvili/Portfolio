import {
  Component,
  OnInit,
  Input,
  Pipe,
  Output,
  EventEmitter,
} from '@angular/core';
import { CartService } from '../../../../cart.service';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  itemClicked:boolean=false
  @Input() data: any;
  constructor(private _cart: CartService,private _product:ProductService) {}
  handleAddToCart(item: any) {
    this._cart.addToCart(item);
    this.itemClicked=true
  }
  addId(item: number) {
    this._product.setID(item)
  }
}
