import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CustomerCreateComponent } from './customer-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerCreateComponent],
  imports: [CommonModule, IonicModule,FormsModule],
  exports: [CustomerCreateComponent], // Export if you plan to use this component in other modules
})
export class CustomerCreateModule {}
