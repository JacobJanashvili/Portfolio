import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
