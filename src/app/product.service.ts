import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _womansUrl =
    "https://fakestoreapi.com/products/category/women's clothing?limit=3";
  private _mansUrl =
    "https://fakestoreapi.com/products/category/men's clothing?limit=3";
  private _jewelery =
    'https://fakestoreapi.com/products/category/jewelery?limit=3';
  constructor(private http: HttpClient) {}
  getWomens() {
    return this.http.get(this._womansUrl);
  }
  getMans() {
    return this.http.get(this._mansUrl);
  }
  getJewelery() {
    return this.http.get(this._jewelery);
  }
}
