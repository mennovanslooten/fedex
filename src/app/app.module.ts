import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupService } from './services/signup.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SignupFormComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [SignupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
