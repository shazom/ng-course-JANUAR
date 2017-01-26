
import {AbstractControl, ValidatorFn, Validator} from "@angular/forms";

export class CustomValidators  {

  static noSpace(control:AbstractControl) {
    if(control.value.indexOf(' ') >= 0) {
      return {
        hasSpace: true
      }
    }
    return null;
  }

  static noNir(control:AbstractControl) {
    if(control.value.indexOf('nir') != -1) {
      return {
        hasNir: true
      }
    }
    return null;
  }

}