import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StockPageRoutingModule } from './stock-routing.module';
import { ProductCreateModule } from '../product-create/product-create.module';
import { StockPage } from './stock.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockPageRoutingModule,
    ProductCreateModule
  ],
  declarations: [StockPage]
})
export class StockPageModule {}
