import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormSuccessComponent } from './signup-form-success.component';

describe('SignupFormSuccessComponent', () => {
  let component: SignupFormSuccessComponent;
  let fixture: ComponentFixture<SignupFormSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
