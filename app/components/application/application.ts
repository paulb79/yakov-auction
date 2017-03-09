import { Component, ViewEncapsulation } from '@angular/core';
import { Product, ProductService } from '../../services/product-service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'application.html',
  styleUrls: [ 'application.css' ],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  products: Array<Product> = [];

  constructor(
    private productService: ProductService
  ) {
    this.products = this.productService.getProducts();
  }
}
