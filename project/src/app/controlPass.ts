import {AbstractControl, ValidatorFn, FormGroup, ValidationErrors} from '@angular/forms'; 

export const  controlPass: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const passConfirm = control.get('confirmPassword');
    return password.value != passConfirm.value ? { 'controlPass': {
        reason: 'NoMatch',
        value: control.value
    }} : null;
  };