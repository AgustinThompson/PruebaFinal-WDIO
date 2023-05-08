import BasePage from './base.page';

class PantsDenimPage extends BasePage {
  get productPriceLocator() {
    return $$('//div[@class="category-products"]//span[@class="price"]');
  }

  async getProductPriceByIndex(index) {
    const productPriceElements = await this.productPriceLocator;
    const productPriceText = await productPriceElements[index - 1].getText();
    return productPriceText.replace('$', '').trim();
  }

  async selectSortBy() {
    const sortByElement = await $(`(//select[@title='Sort By'])[1]`);
    await sortByElement.waitForClickable({ timeout: 5000 });
    await sortByElement.selectByVisibleText('Price');
    const priceDescendingElement = await $(`(//a[@title='Set Descending Direction'])[1]`);
    await priceDescendingElement.waitForClickable({ timeout: 5000 });
    await priceDescendingElement.click();
    await browser.pause(2000);
  }
}

export default new PantsDenimPage();
