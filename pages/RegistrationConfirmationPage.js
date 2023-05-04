import BasePage from "./base.page";

class RegistrationConfirmationPage extends BasePage {
  // WebElements
  get successMessageLocator() {
    return $(`li[class="success-msg"] ul li`);
  }

  /**
   * Wait for the success message to be displayed.
   */
  async waitForSuccessMessage() {
    await this.successMessageLocator.waitForDisplayed();
  }

  /**
   * Get the text of the success message.
   * @returns {string} The success message text.
   */
  async getSuccessMessageText() {
    return await this.successMessageLocator.getText();
  }
}

export default new RegistrationConfirmationPage();

