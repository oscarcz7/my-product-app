import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products: Product | undefined;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
