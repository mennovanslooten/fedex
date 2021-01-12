import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupInputComponent } from './signup-input.component';

describe('SignupInputComponent', () => {
  let component: SignupInputComponent;
  let fixture: ComponentFixture<SignupInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupInputComponent);
    component = fixture.componentInstance;
    component.field = {
      name: 'firstName',
      label: 'First name',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
