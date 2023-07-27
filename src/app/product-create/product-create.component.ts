import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  newProduct: Product = {
    id: 0,
    productName: '',
    unitPrice: 0,
    categoryName: '',
    unitInStock: 0,
    categoryId: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  createProduct() {
    this.productService.createProduct(this.newProduct).subscribe(
      (product) => {
        console.log('Product created successfully:', product);
        // Redirect to the product detail page after creation
        this.router.navigate(['/product-detail', product.id]);
      },
      (error) => {
        console.error('Error creating product:', error);
      }
    );
  }
}
