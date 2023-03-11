import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './home/hero/hero.component';
import { HomeItemsComponent } from './home/home-items/home-items.component';
import { FooterComponent } from './home/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductListComponent } from './home/home-items/product-list/product-list.component';
import { ProductComponent } from './home/home-items/product-list/product/product.component';
import { CartComponent } from './home/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CartProductListComponent } from './home/cart-product-list/cart-product-list.component';
import { CartProductComponent } from './home/cart-product/cart-product.component';
import { WomensComponent } from './home/womens/womens.component';
import { MensComponent } from './home/mens/mens.component';
import { JeweleryComponent } from './home/jewelery/jewelery.component';
import { OpenedProductComponent } from './opened-product/opened-product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HomeItemsComponent,
    FooterComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    WomensComponent,
    CartProductComponent,
    CartProductListComponent,
    MensComponent,
    JeweleryComponent,
    OpenedProductComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
