import BasePage from './base.page';

class SearchPage extends BasePage {
   // Web Elements
   get firstSearchResult() { return $("//h2[@class='product-name']//a[1]") }

   /**
    * Click on the first search result.
    * @returns {Promise} - Promise representing the click action.
    */
   async clickFirstSearchResult() {
       return super.clickElement(this.firstSearchResult);
   }

   /**
    * Get the text of the first search result.
    * @returns {Promise<string>} - Promise representing the text of the first search result.
    */
   async getFirstSearchResultText() {
       return this.firstSearchResult.getText();
   }
}

export default new SearchPage();
