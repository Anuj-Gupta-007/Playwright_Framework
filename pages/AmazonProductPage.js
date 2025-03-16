class AmazonProductPage {
  constructor(page) {
    this.page = page;
    this.productTitle = this.page.locator("//span[@id='productTitle']");
    this.productPrice = this.page.locator("//span[@id='tp_price_block_total_price_ww']/span[@class='a-offscreen']");
  }

  async verifyProductTitle() {
    const title = await this.productTitle.textContent();
    console.log("Product Name is: "+title.trim());
    if (!title) {
      throw new Error('Product title is missing.');
    }
  }

  async verifyProductPrice() {
    const price = await this.productPrice.textContent();
    console.log("Price of the product is: "+price);
    if (!price) {
      throw new Error('Product price is missing.');
    }
  }
}

module.exports = AmazonProductPage;
