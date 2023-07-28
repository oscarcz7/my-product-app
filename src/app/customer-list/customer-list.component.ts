import { Component, Input } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  @Input() customers: any;

  constructor(private customerService: CustomerService, private router: Router) {}

  ionViewWillEnter() {}

  viewCustomerDetail(customerId: number) {
    this.router.navigate(['customer-detail', customerId]);
  }

  createCustomer() {
    this.router.navigate(['customer-create']);
  }

  editCustomer(customerId: number) {
    this.router.navigate(['customer-edit', customerId]);
  }

  deleteCustomer(customerId: number) {
    this.customerService.deleteCustomer(customerId).subscribe(
      () => {
        // Product deleted successfully, update the list
        // this.fetchProducts();
      },
      (error) => {
        console.error('Error deleting customer:', error);
      }
    );
  }
}
