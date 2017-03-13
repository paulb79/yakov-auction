import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product-service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.html'
})

export class HomeComponent {
  products: Array<Product> = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
