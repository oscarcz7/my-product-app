import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/Category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  // @Input() categories: any;
  newProduct: Product = {
    id: '',
    productName: '',
    unitPrice: 0,
    categoryName: '',
    unitInStock: 0,
    categoryId: '',
  };
  productCategories: Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.loadProductCategories(); // Load product categories when the page is about to be displayed
  }

  loadProductCategories() {
    console.log("Loading");
    this.categoryService.getAllCategories().subscribe(
      (categories) => {
        this.productCategories = categories; // Assign the fetched product categories to the array
      },
      (error) => {
        console.error('Error loading product categories:', error);
      }
    );
  }
  createProduct() {
    this.productService.createProduct(this.newProduct).subscribe(
      (product) => {
        console.log('Product created successfully:', product);
        // Redirect to the product detail page after creation
        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error creating product:', error);
      }
    );
  }
}
