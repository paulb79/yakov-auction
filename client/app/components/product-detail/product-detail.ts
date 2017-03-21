import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../../services/product-service';

@Component({
  moduleId: module.id,
  selector: 'product-detail',
  templateUrl: 'product-detail.html'
})

export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    let productID = this.route.snapshot.params['id'];
    this.productService.getProduct(productID)
        .subscribe(product => this.product = product);
  }
}
