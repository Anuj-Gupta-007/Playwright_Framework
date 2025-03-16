const { test, expect } = require('@playwright/test');
const AmazonHomePage = require('../pages/AmazonHomePage');
const AmazonProductPage = require('../pages/AmazonProductPage');
const { readTestData } = require('../utils/utils');

test('Amazon search functionality', async ({ page, context }) => {
  // Read test data from the JSON file
  const testData = await readTestData('testdata/testData.json');
  const homePage = new AmazonHomePage(page);
  

  // Navigate to Amazon homepage
  await homePage.navigate();

  // Search for the product
  await homePage.searchForProduct(testData.productName);

  // Verify that products are displayed
  await homePage.verifyProductResults();


  // Open the first product result (for simplicity)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for the new tab
    page.locator("//div[@data-cy='title-recipe']/a").first().click() // Click on the first product link
  ]);

  // Verify product title and price
  const productPage = new AmazonProductPage(newPage);
  await productPage.verifyProductTitle();
  await productPage.verifyProductPrice();
});
