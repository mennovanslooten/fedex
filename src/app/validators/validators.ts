import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

/**
 *
 * @param control The signup form data
 * This method checks if the password field satisfies the following conditions:
 * - It does not contain the value of the firstName field (case-insensitive)
 * - It does not contain the value of the lastName field (case-insensitive)
 */
export function passwordValidator(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.get('password')?.value;
  const firstName = control.get('firstName')?.value;
  const lastName = control.get('lastName')?.value;

  if (lowerCaseIncludes(password, firstName)) {
    return {
      passwordIncludesFirstName: true,
    };
  }

  if (lowerCaseIncludes(password, lastName)) {
    return {
      passwordIncludesLastName: true,
    };
  }

  return null;
}

/**
 *
 * @param including The string we are testing
 * @param included The forbidden substring
 * This function accepts 2 strings and returns true if neither string is empty and the first contains the last (case-insensitive)
 */
function lowerCaseIncludes(
  including: string = '',
  included: string = ''
): boolean {
  return (
    including &&
    included &&
    including.toLowerCase().includes(included.toLowerCase())
  );
}

/**
 *
 * @param control The email control
 * This method validates the email address against the standard Angular required and email validators.
 * If those do not produce any errors, the value is checked with a regular expression for a 2+ letter TLD.
 */
export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const standardError =
    Validators.required(control) || Validators.email(control);

  if (standardError) {
    return standardError;
  }

  const email = control.value as string;
  const rx = /@.+\.\w{2,}$/;

  if (!rx.test(email)) {
    return {
      emailInvalidTLD: true,
    };
  }

  return null;
}
