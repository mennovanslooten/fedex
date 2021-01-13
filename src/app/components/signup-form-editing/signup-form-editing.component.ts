import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator, emailValidator } from '../../validators/validators';

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
      email: ['', [emailValidator]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/[a-z]/), // Must contain lowercase characters
          Validators.pattern(/[A-Z]/), // Must contain uppercase characters
        ],
      ],
    },
    { validators: [passwordValidator] }
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

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }

    this.send.emit(this.signupForm.value);
  }
}
