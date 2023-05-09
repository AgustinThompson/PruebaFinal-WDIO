import HomePage from '../pages/home.page';
import SearchPage from '../pages/search.page';
import { expect } from 'chai';
import * as articlesData from '../data/articles.json';
import allure from '@wdio/allure-reporter';

const articles = articlesData.articles;

describe('Article Search CP003', () => {
  before(async () => {
    await HomePage.open('/');
  });

  afterEach(async () => {
  });

  articles.forEach(article => {
    it(`Should search and find the article: ${article}`, async () => {
      await performSearch(article);
      await validateSearchResults(article);
    });
  });

  async function performSearch(article) {
    const articleInUpperCase = article.toUpperCase();
    await HomePage.searchArticle(articleInUpperCase);

    allure.addStep(`Performed search for the article: ${article}`);
  }

  async function validateSearchResults(article) {
    const articleInUpperCase = article.toUpperCase();
    expect(await HomePage.getSearchInputText()).to.include(articleInUpperCase);
    expect(await SearchPage.getFirstSearchResultText()).to.include(articleInUpperCase);

    allure.addStep(`Validated search results for the article: ${article}`);
  }
});
