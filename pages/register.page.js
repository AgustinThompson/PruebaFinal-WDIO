import BasePage from "./base.page";

class RegisterPage extends BasePage {

 //WebElements
 get firstName(){ return $(`#firstname`); }; 
 get lastName() { return $(`#lastname`); };
 get email () { return $(`#email_address`); };
 get telephone() { return $('#input-telephone'); };
 get password() {return $(`#password`); };
 get confirmPassword() {return $(`#confirmation`); };  
 get signUpCheckbox() {return $(`#is_subscribed`); };

 get backBtn() {return $(`a[class="back-link"]`)};
 get registerBtn() {return $(`button[title="Register"] span span`)};

/**
* Fills the register form
* @param {String} firstName user name 
* @param {String} lastName user last-name
* @param {String} email user email
* @param {String} telephone user telephone
* @param {String} password user password
* @param {String} confirmPassword user password confirm
*/

async registerForm(firstName,lastName,email,telephone,password,confirmPassword) {
 await this.firstNameField.setValue(firstName);
 await this.lastName.setValue(lastName);
 await this.email.setValue(email);
 await this.telephone.setValue(telephone);
 await this.password.setValue(password);
 await this.confirmPassword.setValue(confirmPassword);
 await this.signUpCheckbox.click();
 await this.registerBtn.click();
}
      

}

export default new RegisterPage();





