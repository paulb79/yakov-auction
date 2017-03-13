import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/application/application';
import { HomeComponent } from './components/home/home';
import { CarouselComponent } from './components/carousel/carousel';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';
import { ProductItemComponent } from './components/product-item/product-item';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { ProductDescriptionComponent } from './components/product-description/product-description';
import { SellerInfoComponent } from './components/seller-info/seller-info';
import { SearchComponent } from './components/search/search';
import { StarsComponent } from './components/stars/stars';

import { ProductService } from './services/product-service';

import { AppRoutingModule } from './app.router';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductDescriptionComponent,
    SellerInfoComponent,
    SearchComponent,
    StarsComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
