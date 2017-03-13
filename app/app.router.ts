import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { ProductItemComponent } from './components/product-item/product-item';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { ProductDescriptionComponent } from './components/product-description/product-description';
import { SellerInfoComponent } from './components/seller-info/seller-info';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'product/:id', component: ProductDetailComponent,
      children: [
        { path : '', component: ProductDescriptionComponent },
        { path : 'seller/:id', component: SellerInfoComponent }
      ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
