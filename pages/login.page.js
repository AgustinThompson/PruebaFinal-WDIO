import BasePage from './base.page';

class LoginPage extends BasePage {
  get emailInput() {
    return $('input#email');
  }

  get passwordInput() {
    return $('input#pass');
  }

  get loginButton() {
    return $('button#send2');
  }

  async open() {
    await super.open('/customer/account/login/');
  }

  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

export default new LoginPage();
