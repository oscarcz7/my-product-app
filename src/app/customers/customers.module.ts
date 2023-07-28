import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomersPage } from './customers.page';

import { CustomersPageRoutingModule } from './customers-routing.module';

import { CustomerListModule } from '../customer-list/customer-list.module'; // Import the ProductListModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersPageRoutingModule,
    CustomerListModule
  ],
  declarations: [CustomersPage]
})
export class CustomersPageModule {}
