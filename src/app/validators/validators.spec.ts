import { FormControl, FormGroup } from '@angular/forms';
import { passwordValidator, emailValidator } from './validators';

describe('Validators', () => {
  it('should validate password does not contain firstName (case insensitive)', () => {
    const form = new FormGroup({
      password: new FormControl('xxxxAbCxxxx'),
      firstName: new FormControl('aBc'),
    });
    const error = passwordValidator(form);
    expect(error).toEqual({ passwordIncludesFirstName: true });
  });

  it('should validate password does not contain lastName (case insensitive)', () => {
    const form = new FormGroup({
      password: new FormControl('xxxxAbCxxxx'),
      lastName: new FormControl('aBc'),
    });
    const error = passwordValidator(form);
    expect(error).toEqual({ passwordIncludesLastName: true });
  });

  it('should validate email address for TLD', () => {
    const email = 'me@me';
    const error = emailValidator(new FormControl(email));
    expect(error).toEqual({ emailInvalidTLD: true });
  });
});
