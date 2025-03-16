class AmazonHomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = this.page.locator('#twotabsearchtextbox');
    this.searchButton = this.page.locator('#nav-search-submit-button');
    this.productResults = this.page.locator('.s-main-slot');
  }

  async navigate() {
    await this.page.goto('');
  }

  async searchForProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }

  async verifyProductResults() {
    await this.productResults.waitFor({ state: 'visible' });
    const results = await this.productResults.count();
    if (results === 0) {
      throw new Error('No products found.');
    }
  }
}

module.exports = AmazonHomePage;
