import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject = new Subject();
  constructor() {}
  addToCart(item: any) {
    console.log(item);
    this.subject.next(item);
  }
  getCart(){
    return this.subject.asObservable()
  }
}
