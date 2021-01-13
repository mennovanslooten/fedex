import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-error',
  templateUrl: './signup-error.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SignupErrorComponent implements OnInit {
  @Input() field: any;
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  /**
   *
   * @param control The AbstractControl to be checked
   * This function returns whether or not the control that is passed has user-caused errors.
   */
  isInvalid(control: AbstractControl): boolean {
    return control && control.errors && (control.dirty || control.touched);
  }

  /**
   *
   * @param key The type of error
   * @param value Contextual details of the error
   * This function takes angular form error data andreturns a string with a user=friendly error message.
   */
  getErrorMessage(key: string, value: any): string {
    const messages: { [index: string]: any } = {
      required: 'This field is required.',
      email: 'Please enter a valid email address.',
      minlength: `Minimum ${value.requiredLength} characters.`,
      pattern: 'Must contain upper and lowercase characters.',
      passwordIncludesFirstName: 'Password can not include first name.',
      passwordIncludesLastName: 'Password can not include last name.',
      emailInvalidTLD:
        'This email seems to be missing a top level domain like .com, .nl or .net.',
    };

    return messages[key] || `Unknown validation error ${key}`;
  }

  /**
   * This method returns user-friendly error messages for the current form field or group.
   */
  getErrors(): string[] {
    const control: AbstractControl = this.field
      ? this.formGroup.get(this.field.name)
      : this.formGroup;

    if (!this.isInvalid(control)) {
      return [];
    }

    // console.log(control.errors);

    return Object.entries(control.errors).map(([key, value]) =>
      this.getErrorMessage(key, value)
    );
  }
}
