import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss'],
})
export class OrderCreateComponent {
  newOrder: Order = {
    id: '',
    OrderDate: '',
    Total: '',
    CustomerId: '',
    FirstName: '',
    LastName: '',
    Phone: '',
    Street: '',
    ZipCode: '',
  };
  customers: Customer[] = [];

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.loadCustomers(); // Load order customers when the page is about to be displayed
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe(
      (customers) => {
        this.customers = customers; // Assign the fetched order customers to the array
      },
      (error) => {
        console.error('Error loading order customers:', error);
      }
    );
  }
  createCustomer() {
    this.orderService.createOrder(this.newOrder).subscribe(
      (order) => {
        console.log('Order created successfully:', order);
        // Redirect to the order detail page after creation
        this.router.navigate(['/orders']);
      },
      (error) => {
        console.error('Error creating order:', error);
      }
    );
  }
}
