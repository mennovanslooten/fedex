import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormSendingComponent } from './signup-form-sending.component';

describe('SignupFormSendingComponent', () => {
  let component: SignupFormSendingComponent;
  let fixture: ComponentFixture<SignupFormSendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormSendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
