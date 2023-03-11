import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './home/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MensComponent } from './home/mens/mens.component';
import { JeweleryComponent } from './home/jewelery/jewelery.component';
import { WomensComponent } from './home/womens/womens.component';
import { OpenedProductComponent } from './opened-product/opened-product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';
const ROUTES: Route[] = [
  {
    path: '',
    component: SignUpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'womens',
    component: WomensComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'mens',
    component: MensComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'jewelery',
    component: JeweleryComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'product',
    component: OpenedProductComponent,
    canActivate: [IsAuthenticatedGuard],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
