import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { SignupErrorComponent } from '../signup-error/signup-error.component';
import { SignupInputComponent } from '../signup-input/signup-input.component';

import { SignupFormEditingComponent } from './signup-form-editing.component';

describe('SignupFormEditingComponent', () => {
  let component: SignupFormEditingComponent;
  let fixture: ComponentFixture<SignupFormEditingComponent>;

  beforeEach(async () => {
    const formBuilder: FormBuilder = new FormBuilder();
    await TestBed.configureTestingModule({
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
      imports: [ReactiveFormsModule],
      declarations: [
        SignupFormEditingComponent,
        SignupInputComponent,
        SignupErrorComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormEditingComponent);
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

  it('should validate email address for TLD', () => {
    const email = 'me@me';
    const error = component.emailValidator(new FormControl(email));
    expect(error).toEqual({ emailInvalidTLD: true });
  });
});
