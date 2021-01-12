import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupService } from './services/signup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormFieldComponent } from './components/signup-form-field/signup-form-field.component';
import { SignupFormSuccessComponent } from './components/signup-form-success/signup-form-success.component';
import { SignupFormFailedComponent } from './components/signup-form-failed/signup-form-failed.component';
import { SignupFormEditingComponent } from './components/signup-form-editing/signup-form-editing.component';
import { SignupFormSendingComponent } from './components/signup-form-sending/signup-form-sending.component';
import { SignupFormfieldComponent } from './components/signup-formfield/signup-formfield.component';

@NgModule({
  declarations: [AppComponent, SignupFormComponent, SignupFormFieldComponent, SignupFormSuccessComponent, SignupFormFailedComponent, SignupFormEditingComponent, SignupFormSendingComponent, SignupFormfieldComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [SignupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
