import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  value:number=0
  @ViewChild('plus') plus: any;
  @ViewChild('minus') minus: any;
  constructor() {}
}
