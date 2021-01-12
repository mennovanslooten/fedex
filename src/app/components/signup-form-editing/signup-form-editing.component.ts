import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-form-editing',
  templateUrl: './signup-form-editing.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SignupFormEditingComponent implements OnInit {
  @Output() send: EventEmitter<any> = new EventEmitter();

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

  constructor(private fb: FormBuilder) {}

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
   * Submit handler for the form. Passes form data to SignupService and subscribes to the results.
   */
  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }

    this.send.emit(this.signupForm.value);
  }
}
