const PAGE_TIMEOUT = 10000;

export default class BasePage {
  /**
   * Open a page.
   * @param {string} path - The path to open.
   */
  async open(path) {
    await browser.url(`${path}`);
  }

  /**
   * Wait for an element to be clickable and click it.
   * @param {WebdriverIO.Element} element - The element to click.
   */
  async clickElement(element) {
    await element.waitForClickable({ timeout: PAGE_TIMEOUT });
    await element.click();
  }

  /**
   * Clear the value of a text input field.
   * @param {WebdriverIO.Element} element - The text input field element.
   */
  async clearValue(element) {
    await element.waitForClickable({ timeout: PAGE_TIMEOUT });
    await element.clearValue();
  }

  /**
   * Send keys to an input field.
   * @param {WebdriverIO.Element} element - The input field element.
   * @param {string} text - The text to send.
   */
  async sendKeys(element, text) {
    await element.waitForClickable({ timeout: PAGE_TIMEOUT });
    await element.click();
    await element.keys(text);
  }

  /**
   * Wait for an element to be visible.
   * @param {WebdriverIO.Element} element - The element to wait for.
   */
  async waitForVisible(element) {
    await element.waitForDisplayed({ timeout: PAGE_TIMEOUT });
  }

  /**
   * Wait for an element to be displayed.
   * @param {WebdriverIO.Element} element - The element to wait for.
   */
  async waitForElementDisplayed(element) {
    await element.waitForDisplayed({ timeout: PAGE_TIMEOUT });
  }
}
