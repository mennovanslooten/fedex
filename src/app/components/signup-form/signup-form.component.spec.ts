import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { SignupFormEditingComponent } from '../signup-form-editing/signup-form-editing.component';
import { SignupFormFailedComponent } from '../signup-form-failed/signup-form-failed.component';
import { SignupFormSendingComponent } from '../signup-form-sending/signup-form-sending.component';
import { SignupFormSuccessComponent } from '../signup-form-success/signup-form-success.component';
import { SignupFormComponent } from './signup-form.component';

class MockSignupService {
  send() {}
}

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async () => {
    const signupService = new MockSignupService();

    await TestBed.configureTestingModule({
      providers: [{ provide: SignupService, useValue: signupService }],
      imports: [ReactiveFormsModule],
      declarations: [
        SignupFormComponent,
        SignupFormEditingComponent,
        SignupFormFailedComponent,
        SignupFormSuccessComponent,
        SignupFormSendingComponent,
      ],
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
});
