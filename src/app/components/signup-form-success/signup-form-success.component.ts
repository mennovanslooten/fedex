import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form-success',
  templateUrl: './signup-form-success.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class SignupFormSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
