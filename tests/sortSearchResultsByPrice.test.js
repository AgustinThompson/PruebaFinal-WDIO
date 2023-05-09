import PantsDenimPage from '../pages/pantsDenim.page';
import HomePage from '../pages/home.page';

describe('Product Sorting', () => {
  before(async () => {
    await HomePage.open();
  });

  after(async () => {
    await browser.reloadSession();
  });

  it('Should sort products by price in descending order [CP004]', async () => {
    browser.call(() => {
      allure.addStep('Hover over Men section');
    });
    await HomePage.hoverMen();

    browser.call(() => {
      allure.addStep('Click on Pants & Denim link');
    });
    await HomePage.clickPantsDenim();

    browser.call(() => {
      allure.addStep('Get prices of the first two products before sorting');
    });
    const firstProductPrice = parseFloat(await PantsDenimPage.getProductPriceByIndex(1));
    const secondProductPrice = parseFloat(await PantsDenimPage.getProductPriceByIndex(2));

    browser.call(() => {
      allure.addStep('Select "Price (High to Low)" from the sorting dropdown');
    });
    await PantsDenimPage.selectSortBy();

    browser.call(() => {
      allure.addStep('Get prices of the first two products after sorting');
    });
    const sortedFirstProductPrice = parseFloat(await PantsDenimPage.getProductPriceByIndex(1));
    const sortedSecondProductPrice = parseFloat(await PantsDenimPage.getProductPriceByIndex(2));

    browser.call(() => {
      allure.addStep('Check if the first product price is greater than or equal to the second product price');
    });
    expect(sortedFirstProductPrice).to.be.at.least(sortedSecondProductPrice, `The first product price (${sortedFirstProductPrice}) should be greater than or equal to the second product price (${sortedSecondProductPrice}) after sorting by price in descending order.`);
    
    console.log(`The first product price (${sortedFirstProductPrice}) is greater than or equal to the second product price (${sortedSecondProductPrice}) after sorting by price in descending order.`);
  });
});
