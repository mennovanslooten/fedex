import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SignupService, SignupData } from 'src/app/services/signup.service';

/**
 * This component contains the signup form, including a simple state machine for its states:
 * EDITING --> SENDING --> [FAILED | SUCCESS]
 *     ^ .                     |
 *     +-----------------------+
 *
 * The form is built using Angular reactive forms (https://angular.io/guide/reactive-forms)
 */
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SignupFormComponent implements OnInit {
  public STATUS = {
    FAILED: 0,
    SUCCESS: 1,
    SENDING: 2,
    EDITING: 3,
  };

  public status$: BehaviorSubject<number> = new BehaviorSubject(
    this.STATUS.EDITING
  );

  public signupForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/[a-z]/),
          Validators.pattern(/[A-Z]/),
        ],
      ],
    },
    { validators: [this.passwordValidator.bind(this)] }
  );

  public signupFields = [
    {
      name: 'firstName',
      label: 'First name',
    },
    {
      name: 'lastName',
      label: 'Last name',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
    },
  ];

  constructor(private fb: FormBuilder, private signupService: SignupService) {}

  ngOnInit(): void {}

  /**
   *
   * @param control The signup form data
   * This method checks if the password field satisfies the following conditions:
   * - It does not contain the value of the firstName field
   * - It does not contain the value of the lastName field
   */
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const firstName = control.get('firstName')?.value;
    const lastName = control.get('lastName')?.value;
    return this.getPasswordErrors(password, firstName, lastName);
  }

  /**
   * This method returns a single ValidationError if the password contains either the first or last name.
   * The check is case-insensitive.
   */
  getPasswordErrors(
    password: string,
    firstName: string,
    lastName: string
  ): ValidationErrors | null {
    password = password.toLowerCase();
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    if (password && firstName && password.includes(firstName)) {
      return {
        passwordIncludesFirstName: true,
      };
    }

    if (password && lastName && password.includes(lastName)) {
      return {
        passwordIncludesLastName: true,
      };
    }

    return null;
  }

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
   * @param controlName The name of the AbstractControl to be checked
   * This function returns an array of (user-caused) error messages for a control.
   */
  getErrorsForControlName(controlName: string): string[] {
    const formControl = this.signupForm.get(controlName);
    return this.getErrorsForControl(formControl);
  }

  /**
   *
   * @param control The AbstractControl to be checked
   * This function returns an array of (user-caused) error messages for a control.
   */
  getErrorsForControl(control: AbstractControl): string[] {
    if (!this.isInvalid(control)) {
      return [];
    }

    return Object.entries(control.errors).map(([key, value]) =>
      this.getErrorMessage(key, value)
    );
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
    };

    return messages[key] || `Unknown validation error ${key}`;
  }

  /**
   * Submit handler for the form. Passes form data to SignupService and subscribes to the results.
   */
  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }

    this.status$.next(this.STATUS.SENDING);
    this.signupForm.disable();

    this.signupService
      .send(this.signupForm.value)
      .pipe(delay(1000))
      .subscribe({
        next: this.handleSignupSuccess.bind(this),
        error: this.handleSignupError.bind(this),
      });
  }

  handleSignupSuccess() {
    this.status$.next(this.STATUS.SUCCESS);
  }

  handleSignupError() {
    this.status$.next(this.STATUS.FAILED);
  }

  retry() {
    this.status$.next(this.STATUS.EDITING);
  }
}
