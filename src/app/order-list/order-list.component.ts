import { Component, Input } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  @Input() orders: any;

  constructor(private orderService: OrderService, private router: Router) {}

  ionViewWillEnter() {}

  viewOrderDetail(orderId: number) {
    this.router.navigate(['order-detail', orderId]);
  }

  createOrder() {
    this.router.navigate(['order-create']);
  }

  editOrder(orderId: number) {
    this.router.navigate(['order-edit', orderId]);
  }

  deleteOrder(orderId: number) {
    this.orderService.deleteOrder(orderId).subscribe(
      () => {
        // Product deleted successfully, update the list
        // this.fetchProducts();
      },
      (error) => {
        console.error('Error deleting order:', error);
      }
    );
  }
}
