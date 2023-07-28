import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderPage } from './new-order.page';

const routes: Routes = [
  {
    path: '',
    component: NewOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewOrderPageRoutingModule {}
