import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NewOrderPageRoutingModule } from './new-order-routing.module';
import { OrderCreateModule } from '../order-create/order-create.module';
import { NewOrderPage } from './new-order.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOrderPageRoutingModule,
    OrderCreateModule
  ],
  declarations: [NewOrderPage]
})
export class NewOrderPageModule {}
