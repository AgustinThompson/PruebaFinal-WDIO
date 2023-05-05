import BasePage from './base.page';

class WelcomePage extends BasePage {
  get accountLocator() {
    return $('//span[@class="label"][normalize-space()="Account"]');
  }

  get logoutLocator() {
    return $('//a[normalize-space()="Log Out"]');
  }

  async clickAccountLocator() {
    await this.accountLocator.click();
  }

  async clickLogoutLocator() {
    await this.logoutLocator.waitForClickable();
    await this.logoutLocator.click();
  }

  async getWelcomeMessageText() {
    await this.waitForVisible($('h1'));
    return await $('h1').getText();
  }
}

export default new WelcomePage();
