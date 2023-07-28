// Import necessary modules and dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://localhost:7118/api/Category'; // Replace this with your ASP.NET API URL

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return Promise.reject(error.message || error);
  }

  // Method to fetch all products
  getAllCategories(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError));
  }
}
