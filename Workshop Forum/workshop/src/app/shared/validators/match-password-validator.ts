import { FormGroup, ValidatorFn } from '@angular/forms';
export function matchPasswordsValidator(
  passwordControlOne: string,
  passwordControlTwo: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const passOne = group.get(passwordControlOne);
    const passTwo = group.get(passwordControlTwo);

    return passOne?.value === passTwo?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}
