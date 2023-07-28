// Import necessary modules and dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://localhost:7118/api/Customers'; // Replace this with your ASP.NET API URL

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return Promise.reject(error.message || error);
  }

  // Method to fetch all products
  getAllCustomers(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to fetch a single product by ID
  getCustomerById(productId: number): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to create a new product
  createCustomer(productData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<any>(this.apiUrl, productData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to update an existing product
  updateCustomer(productId: number, productData: any): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put<any>(url, productData, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to delete a product by ID
  deleteCustomer(productId: number): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;

    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
