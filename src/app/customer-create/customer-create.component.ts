import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss'],
})
export class CustomerCreateComponent {
  newCustomer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    street: '',
    zipCode: '',
  };

  constructor(private customerService: CustomerService, private router: Router) {}

  createCustomer() {
    this.customerService.createCustomer(this.newCustomer).subscribe(
      (customer) => {
        console.log('Customer created successfully:', customer);
        // Redirect to the customer detail page after creation
        this.router.navigate(['/customers']);
      },
      (error) => {
        console.error('Error creating customer:', error);
      }
    );
  }
}
