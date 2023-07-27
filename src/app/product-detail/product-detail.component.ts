import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = +params['id'];
      this.loadProduct(productId);
    });
  }

  loadProduct(productId: number) {
    this.productService.getProductById(productId).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error('Error loading product:', error);
      }
    );
  }
}
