import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductsPage } from './products.page';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductListModule } from '../product-list/product-list.module'; // Import the ProductListModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    ProductListModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
