import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddedProduct } from './added-product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _womansUrl =
    "https://fakestoreapi.com/products/category/women's clothing?limit=3";
  private _womansFullUrl =
    "https://fakestoreapi.com/products/category/women's clothing";
  private _mansUrl =
    "https://fakestoreapi.com/products/category/men's clothing?limit=3";
  private _mansFullUrl =
    "https://fakestoreapi.com/products/category/men's clothing";
  private _jewelery =
    'https://fakestoreapi.com/products/category/jewelery?limit=3';
  private _jeweleryFull = 'https://fakestoreapi.com/products/category/jewelery';
  public singleProductId = 0;
  public receivedArray: any = [];
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

  getWomensFull() {
    return this.http.get(this._womansFullUrl);
  }
  getMansFull() {
    return this.http.get(this._mansFullUrl);
  }
  getJeweleryFull() {
    return this.http.get(this._jeweleryFull);
  }
  setID(id: number) {
    this.singleProductId = id;
  }
  getSingleProduct(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
