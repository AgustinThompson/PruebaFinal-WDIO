import BasePage from "./base.page";

class SearchPage extends BasePage {
  get firstSearchResult() {
    return $("//h2[@class='product-name']//a[1]");
  }

  async getFirstSearchResultText() {
    await this.waitForVisible(this.firstSearchResult);
    return this.firstSearchResult.getText();
  }
}

export default new SearchPage();

