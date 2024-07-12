import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked email;
  @tracked password;
  @tracked emailError;
  @tracked passwordError;
  @tracked errorMessage;

  validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    return passwordPattern.test(password);
  }

  @action
  async login(event) {
    event.preventDefault();
    this.errorMessage = '';
    if (!this.email && !this.password) {
      this.errorMessage = 'Enter e-mail and Password';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    } else if (!this.email) {
      this.emailError = 'Enter an Email';
      setTimeout(() => {
        this.emailError = '';
      }, 3000);
    } else if (!this.password) {
      this.passwordError = 'Enter a password';
      setTimeout(() => {
        this.passwordError = '';
      }, 3000);
    } else if (!this.validateEmail(this.email)) {
      this.emailError = 'Ivalid Email format';
    }
  }
}
