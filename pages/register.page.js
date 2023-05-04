import BasePage from "./base.page";

class RegisterPage extends BasePage {
  // WebElements
  get firstName() { return $(`#firstname`); }
  get lastName() { return $(`#lastname`); }
  get email() { return $(`#email_address`); }
  get password() { return $(`#password`); }
  get confirmPassword() { return $(`#confirmation`); }
  get signUpCheckbox() { return $(`#is_subscribed`); }
  get backBtn() { return $(`a[class="back-link"]`); }
  get registerBtn() { return $(`button[title="Register"] span span`); }

  /**
   * Fill the registration form
   * @param {string} firstName - User's first name
   * @param {string} lastName - User's last name
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @param {string} confirmPassword - User's password confirmation
   */
  async registerForm(firstName, lastName, email, password, confirmPassword) {
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.confirmPassword.setValue(confirmPassword);
    await this.signUpCheckbox.click();
    await this.registerBtn.click();
  }
}

export default new RegisterPage();
