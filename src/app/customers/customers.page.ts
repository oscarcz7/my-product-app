import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: 'customers.page.html',
  styleUrls: ['customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customers: Customer | undefined;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.fetchCustomers();
  }
  fetchCustomers() {
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data;
        console.log(this.customers);
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }
}
