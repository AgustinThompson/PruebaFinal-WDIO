// mydashboard.page.js
import BasePage from './base.page';

class MyDashboardPage extends BasePage {
  get welcomeMessage() { return $('$(`p[class="hello"] strong`)"]'); }
  get navigationLinks() { return $$('//ul[@class="nav items"]/li/a'); }
  get accountInformationSection() { return $('//div[@class="box box-information"]'); }
  get addressesSection() { return $('//div[@class="box box-addresses"]'); }
  get ordersSection() { return $('//div[@class="box box-orders"]'); }

  async getWelcomeMessageText() {
    return await this.welcomeMessage.getText();
  }

  async getNavigationLinkTexts() {
    const linkTexts = [];
    const links = await this.navigationLinks;
    for (const link of links) {
      linkTexts.push(await link.getText());
    }
    return linkTexts;
  }

  async isAccountInformationSectionDisplayed() {
    return await this.accountInformationSection.isDisplayed();
  }

  async isAddressesSectionDisplayed() {
    return await this.addressesSection.isDisplayed();
  }

  async isOrdersSectionDisplayed() {
    return await this.ordersSection.isDisplayed();
  }
}

export default new MyDashboardPage();
