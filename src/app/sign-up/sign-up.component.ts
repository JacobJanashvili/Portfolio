import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatch } from './validators/passwordMatch.validator';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  submitted = false;
  surveyForm: FormGroup;
  constructor(private router: Router, private _auth: AuthService) {
    this.surveyForm = new FormGroup(
      {
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
        }),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
      },
      [passwordMatch.mustMatch('password', 'confirmPassword')]
    );
  }
  ngOnInit(): void {}
  onSubmit() {
    this.submitted = true;
    if (this.surveyForm.valid) {
      this.router.navigate(['/home']);
      this._auth.authenicateUser();
    }
  }
}
