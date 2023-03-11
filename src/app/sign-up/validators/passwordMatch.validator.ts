import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class passwordMatch {
  static mustMatch(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordCtrl = control.get(password);
      const confirmPasswordCtrl = control.get(confirmPassword);

      return passwordCtrl &&
        confirmPasswordCtrl &&
        passwordCtrl.value !== confirmPasswordCtrl.value
        ? { mismatch: true }
        : null;
    };
    
  }
}
