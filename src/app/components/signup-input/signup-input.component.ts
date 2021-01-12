import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-input',
  templateUrl: './signup-input.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SignupInputComponent implements OnInit {
  @Input() field: any;
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
