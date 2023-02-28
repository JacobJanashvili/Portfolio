import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './home/cart/cart.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
