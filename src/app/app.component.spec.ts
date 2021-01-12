import { TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [FormBuilder],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [AppComponent, SignupFormComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
