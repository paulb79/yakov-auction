import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product-service';

@Component({
  moduleId: module.id,
  selector: 'product-description',
  templateUrl: 'product-description.html'
})

export class ProductDescriptionComponent {

  products: Array<Product>;

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }
}
