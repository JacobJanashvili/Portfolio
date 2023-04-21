import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { CartService } from '../../cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-items',
  templateUrl: './home-items.component.html',
  styleUrls: ['./home-items.component.css'],
})
export class HomeItemsComponent {
  subscribed: boolean = false;
  emailForm: FormGroup;
  submitted:boolean=false

  newsLetterSubscribe() {
    this.submitted=true
    if(this.emailForm.valid){
      this.subscribed=!this.subscribed
      this.emailForm.markAsUntouched

    }
  }
  constructor(
    private _productService: ProductService,
    private _cart: CartService
  ) {
    this.emailForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
    });
  }
}
