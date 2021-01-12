import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupErrorComponent } from './signup-error.component';

describe('SignupErrorComponent', () => {
  let component: SignupErrorComponent;
  let fixture: ComponentFixture<SignupErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SignupErrorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupErrorComponent);
    component = fixture.componentInstance;
    component.field = {
      name: 'firstName',
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
