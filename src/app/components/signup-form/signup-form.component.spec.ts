import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ControlContainer,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

import { SignupFormComponent } from './signup-form.component';

class MockSignupService {
  send() {}
}

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async () => {
    const signupService = new MockSignupService();
    const formBuilder: FormBuilder = new FormBuilder();

    await TestBed.configureTestingModule({
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: SignupService, useValue: signupService },
        ControlContainer,
      ],
      imports: [ReactiveFormsModule],
      declarations: [SignupFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate password does not contain firstName (case insensitive)', () => {
    const password = 'xxxxAbCxxxx';
    const firstName = 'aBc';
    const error = component.getPasswordErrors(password, firstName, '');
    expect(error).toEqual({ passwordIncludesFirstName: true });
  });

  it('should validate password does not contain lastName (case insensitive)', () => {
    const password = 'xxxxAbCxxxx';
    const lastName = 'aBc';
    const error = component.getPasswordErrors(password, '', lastName);
    expect(error).toEqual({ passwordIncludesLastName: true });
  });
});
