import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, IonicModule],
  exports: [ProductListComponent], // Export if you plan to use this component in other modules
})
export class ProductListModule {}
