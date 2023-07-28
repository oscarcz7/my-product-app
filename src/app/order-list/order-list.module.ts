import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrderListComponent } from './order-list.component';

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, IonicModule],
  exports: [OrderListComponent], // Export if you plan to use this component in other modules
})
export class OrderListModule {}
