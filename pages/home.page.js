import BasePage from './base.page';

class HomePage extends BasePage {

    // Web Elements
    get searchInput() { return $('//input[@id="search"]') }

    /**
     * Search for an article by entering the text in the search field and pressing Enter.
     * @param {string} article - The article to search for.
     * @returns {Promise} - Promise representing the search action.
     */
    async searchArticle(article) {
        addStep(`Search for article: ${article}`);
        await this.clearValue(this.searchInput);
        await this.sendKeys(this.searchInput, article);
        await this.searchInput.keys('Enter');
    }

    /**
     * Get the text of the search input field.
     * @returns {Promise<string>} - Promise representing the text of the search input field.
     */
    async getSearchInputText() {
        addStep('Get text from the search input field');
        return await this.searchInput.getValue();
    }
}
export default new HomePage();
