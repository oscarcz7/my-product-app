import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OrdersPage } from './orders.page';

import { OrdersPageRoutingModule } from './orders-routing.module';
import { OrderListModule } from '../order-list/order-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    OrderListModule
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
