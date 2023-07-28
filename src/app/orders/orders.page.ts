import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders: Order | undefined;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }
  fetchCustomers() {
    this.orderService.getAllOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log(this.orders);
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
}
