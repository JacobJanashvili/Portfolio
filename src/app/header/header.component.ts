import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  burgerMenuIsClosed: boolean = true;
  Scrolled=false
  toggleBurgerMenu() {
    this.burgerMenuIsClosed = !this.burgerMenuIsClosed;
  }
  @HostListener("window:scroll",[])
  onWindowScroll(){
    this.Scrolled=window.scrollY>=80;
  }
}
