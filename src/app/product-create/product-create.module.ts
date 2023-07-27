import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductCreateComponent } from './product-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductCreateComponent],
  imports: [CommonModule, IonicModule,FormsModule],
  exports: [ProductCreateComponent], // Export if you plan to use this component in other modules
})
export class ProductCreateModule {}
