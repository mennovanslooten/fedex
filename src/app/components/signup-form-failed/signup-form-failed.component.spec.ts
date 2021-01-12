import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormFailedComponent } from './signup-form-failed.component';

describe('SignupFormFailedComponent', () => {
  let component: SignupFormFailedComponent;
  let fixture: ComponentFixture<SignupFormFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
