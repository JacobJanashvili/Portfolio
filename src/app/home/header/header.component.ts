import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cart: any[] = [];
  data: any[] = [];
  constructor(
    private _cart: CartService,
    private _product: ProductService
  ) {}
  ngOnInit() {
    this.cart = this._cart.getCart();
  }
  burgerMenuIsClosed: boolean = true;
  Scrolled = false;
  toggleBurgerMenu() {
    this.burgerMenuIsClosed = !this.burgerMenuIsClosed;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.Scrolled = window.scrollY >= 80;
  }
 
}
