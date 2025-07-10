import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  api1 = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProductList() {
    const url = 'https://dummyjson.com/products';
    return this.http.get(url);
  }

  async getData() {
    let response = await fetch(this.api1);
    return response.json();
  }
}
