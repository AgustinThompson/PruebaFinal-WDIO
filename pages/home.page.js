// home.page.js
import BasePage from "./base.page";

class HomePage extends BasePage {
  // WebElements
  get barraDeBusqueda() {
    return $('#search');
  }

  /**
   * Search for an article.
   * @param {string} article - The article to search for.
   */
  async buscar(article) {
    await this.clearValue(this.barraDeBusqueda);
    await this.sendKeys(this.barraDeBusqueda, article);
    await this.barraDeBusqueda.keys('Enter');
  }

  /**
   * Get the text from the search bar.
   * @returns {string} The text from the search bar.
   */
  async obtenerTextoBusqueda() {
    await this.waitForVisible(this.barraDeBusqueda);
    return this.barraDeBusqueda.getValue();
  }
}

export default new HomePage();
