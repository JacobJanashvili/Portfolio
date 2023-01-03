import { Component } from '@angular/core';
import SwiperCore from 'swiper';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  burgerMenuIsClosed: boolean = true;
  toggleBurgerMenu() {
    this.burgerMenuIsClosed = !this.burgerMenuIsClosed;
  }
}
