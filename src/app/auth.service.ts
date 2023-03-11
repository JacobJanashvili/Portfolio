import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isSignedUp: any = false;
  authenicateUser(){
    this.isSignedUp=true
  }
}
