import HomePage from '../pages/home.page';
import SearchPage from '../pages/search.page';
import { expect } from 'chai';
import allure from '@wdio/allure-reporter';
import urls from '../data/urls.json';

const articles = articlesData.articles;
const homeUrl = urls.homeUrl;

describe('Product Search and Filtering', () => {
  before(async () => {
    await HomePage.open(homeUrl);
  });

  afterEach(async () => {
    // Add any necessary teardown logic
  });

  it('Should search, filter, and sort products', async () => {
    const searchTerm = 'shirt';
    const filterSize = 'M';
    const sortBy = 'Price: Low to High';

    // Search for products
    await HomePage.searchProduct(searchTerm);
    allure.addStep(`Performed product search for term: ${searchTerm}`);

    // Filter by size
    await SearchPage.filterBySize(filterSize);
    allure.addStep(`Filtered products by size: ${filterSize}`);

    // Sort products
    await SearchPage.sortByPriceLowToHigh();
    allure.addStep(`Sorted products by price: Low to High`);

    // Validate search results
    const searchResults = await SearchPage.getSearchResults();
    expect(searchResults).to.have.length.above(0);
    allure.addStep(`Validated search results. Total products found: ${searchResults.length}`);
  });
});
