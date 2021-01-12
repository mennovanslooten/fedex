import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SignupService, SignupData } from './signup.service';

describe('SignupService', () => {
  let service: SignupService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(SignupService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send the correct request with correct data', () => {
    const testData: SignupData = {
      firstName: 'First',
      lastName: 'Last',
      email: 'first@last.com',
    };

    const formData = {
      ...testData,
      password: 'PassWord',
    };

    service.send(formData).subscribe();

    // Request should be sent to right API
    const req = httpTestingController.expectOne(
      'https://demo-api.now.sh/users'
    );

    // Request should be sent without password
    expect(req.request.body).toEqual(testData);

    // Should be POSTed
    expect(req.request.method).toEqual('POST');

    req.flush(null);
    httpTestingController.verify();
  });
});
