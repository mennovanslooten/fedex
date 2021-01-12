import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupInputComponent } from './signup-input.component';
import { SignupErrorComponent } from '../signup-error/signup-error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

describe('SignupInputComponent', () => {
  let component: SignupInputComponent;
  let fixture: ComponentFixture<SignupInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SignupInputComponent, SignupErrorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupInputComponent);
    component = fixture.componentInstance;
    component.field = {
      name: 'firstName',
      label: 'First name',
    };
    component.formGroup = new FormGroup({
      firstName: new FormControl(),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
