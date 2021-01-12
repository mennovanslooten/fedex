import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup-form-failed',
  templateUrl: './signup-form-failed.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SignupFormFailedComponent implements OnInit {
  @Output() retry: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleRetry() {
    this.retry.emit();
  }
}
