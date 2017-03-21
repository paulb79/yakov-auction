import { Component, Input } from '@angular/core';
import { StarsComponent } from '../stars/stars';
import { Product } from '../../services/product-service';

@Component({
  moduleId: module.id,
  selector: 'product-item',
  templateUrl: 'product-item.html'
})

export class ProductItemComponent {
  @Input() product: Product;

  constructor() {

  }

  getProductDetails() : Number {
    return this.product.id;
  }


}
