import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupService } from './services/signup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormSuccessComponent } from './components/signup-form-success/signup-form-success.component';
import { SignupFormFailedComponent } from './components/signup-form-failed/signup-form-failed.component';
import { SignupFormEditingComponent } from './components/signup-form-editing/signup-form-editing.component';
import { SignupFormSendingComponent } from './components/signup-form-sending/signup-form-sending.component';
import { SignupInputComponent } from './components/signup-input/signup-input.component';
import { SignupErrorComponent } from './components/signup-error/signup-error.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SignupFormSuccessComponent,
    SignupFormFailedComponent,
    SignupFormEditingComponent,
    SignupFormSendingComponent,
    SignupInputComponent,
    SignupErrorComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [SignupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
