import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @param signupData The data from the signup form
   * This method takes the relevant properties from the form data and POSTs them to a remote service.
   * It returns the request observable.
   */
  send({ firstName, lastName, email }: SignupData): Observable<SignupData> {
    const requestData: SignupData = { firstName, lastName, email };
    return this.http.post<SignupData>(
      'https://demo-api.now.sh/users',
      requestData
    );
  }
}
