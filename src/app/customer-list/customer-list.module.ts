import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CustomerListComponent } from './customer-list.component';

@NgModule({
  declarations: [CustomerListComponent],
  imports: [CommonModule, IonicModule],
  exports: [CustomerListComponent], // Export if you plan to use this component in other modules
})
export class CustomerListModule {}
