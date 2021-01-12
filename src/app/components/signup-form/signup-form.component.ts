import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SignupService, SignupData } from 'src/app/services/signup.service';

/**
 * This component contains the signup form state machine:
 * EDITING --> SENDING --> [FAILED | SUCCESS]
 *     ^ .                     |
 *     +-----------------------+
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

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {}

  /**
   * Submit handler for the form. Passes form data to SignupService and subscribes to the results.
   */
  onSubmit(signupData: SignupData) {
    this.status$.next(this.STATUS.SENDING);

    this.signupService
      .send(signupData)
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

  onRetry() {
    this.status$.next(this.STATUS.EDITING);
  }
}
