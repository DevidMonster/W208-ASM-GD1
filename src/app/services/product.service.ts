import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getData(): Observable<IProduct[]> {
    return this.http.get<any>(this.apiUrl)
  }
}
