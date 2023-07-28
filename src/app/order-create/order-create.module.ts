import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrderCreateComponent } from './order-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderCreateComponent],
  imports: [CommonModule, IonicModule,FormsModule],
  exports: [OrderCreateComponent], // Export if you plan to use this component in other modules
})
export class OrderCreateModule {}
