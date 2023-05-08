// home.page.js

import BasePage from './base.page';
import urls from '../data/urls.json';

class HomePage extends BasePage {
  get menLink() {
    return $('//a[@class="level0 has-children"][normalize-space()="Men"]');
  }

  get pantsDenimLink() {
    return $(`//a[@href="${urls.pantsDenimUrl}"]`);
  }

  get searchInput() {
    return $('//input[@type="search"]');
  }

  get searchButton() {
    return $('//button[@title="Search"]');
  }


  async open() {
    await browser.url(urls.homeUrl);
  }

  async hoverMen() {
    addStep('Hover over Men section');
    await this.waitForVisible(this.menLink);
    await this.menLink.moveTo();
  }

  async clickPantsDenim() {
    addStep('Click on Pants & Denim link');
    await this.waitForVisible(this.pantsDenimLink);
    await this.clickElement(this.pantsDenimLink);
  }

  async searchArticle(article) {
    await this.searchInput.setValue(article);
    await this.searchButton.click();
  }

  async getSearchInputText() {
    return await this.searchInput.getValue();
  }
}

export default new HomePage();
