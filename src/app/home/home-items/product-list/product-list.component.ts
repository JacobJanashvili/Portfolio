import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  womans_items: any = [];
  mens_items: any = [];
  jewelery: any = [];

  constructor(private _productService: ProductService) {}
  ngOnInit() {
    this.womans_items = this._productService
      .getWomens()
      .subscribe((data) => (this.womans_items = data));
    this.mens_items = this._productService
      .getMans()
      .subscribe((data) => (this.mens_items = data));
    this.jewelery = this._productService
      .getJewelery()
      .subscribe((data) => (this.jewelery = data));
  }
}
