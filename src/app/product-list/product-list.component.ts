import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: any;

  constructor(private productService: ProductService, private router: Router) {}

  ionViewWillEnter() {}

  viewProductDetail(productId: number) {
    this.router.navigate(['product-detail', productId]);
  }

  createProduct() {
    this.router.navigate(['product-create']);
  }

  editProduct(productId: number) {
    this.router.navigate(['product-edit', productId]);
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        // Product deleted successfully, update the list
        // this.fetchProducts();
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}
