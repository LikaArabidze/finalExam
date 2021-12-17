import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { mustMatch } from '../utils/validators.fn';

@Directive({
  selector: '[mustMatch]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true },
  ],
})
export class MustMatchDirective implements Validator {
  @Input('mustMatch') mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors | null {
    return mustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }
}
