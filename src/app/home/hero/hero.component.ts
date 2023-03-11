import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  toShopSection() {
    document.querySelector('.shop-item-section').scrollIntoView({behavior:'smooth'});
  }
}
