import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
});
