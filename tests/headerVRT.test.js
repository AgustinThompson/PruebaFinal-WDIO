import HomePage from '../pages/home.page';
import { assert } from 'chai';
import allure from '@wdio/allure-reporter';

describe('Visual Regression Test', () => {
  before(async () => {
    await HomePage.open();
    allure.addFeature('CP005 - Visual Regression Test');
    allure.addDescription('This test checks the color of the header bar');
  });

  it('should check the color of the header bar - [CP005]', async () => {
    const headerBarElement = await $(`div.header-language-background`);
    allure.addStep('Capture current state of header bar');
    const result = await browser.checkElement(headerBarElement, 'headerBar');
    allure.addStep('Compare current state with baseline');
    try {
      assert.strictEqual(result, 0);
      console.log('The color of the header bar matches with the baseline!');
      allure.addStep('The color of the header bar matches with the baseline');
    } catch (error) {
      console.error('The color of the header bar does not match with the baseline!');
      allure.addStep('The color of the header bar does not match with the baseline');
      throw error;  
    }
  });
});
