import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NewCustomerPageRoutingModule } from './new-customer-routing.module';
import { CustomerCreateModule } from '../customer-create/customer-create.module';
import { NewCustomerPage } from './new-customer.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCustomerPageRoutingModule,
    CustomerCreateModule
  ],
  declarations: [NewCustomerPage]
})
export class NewCustomerPageModule {}
