const { Builder, By, until } = require('selenium-webdriver');

(async function loginTest() {
   driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.saucedemo.com/');

    await driver.findElement(By.id('user-name')).sendKeys('locked_out_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');

    await driver.findElement(By.id('login-button')).click();

     errorElement = await driver.wait(
      until.elementLocated(By.css('[data-test="error"]')),
      5000 
    );

     errorMessage = await errorElement.getText();
    const expectedMessage = "Epic sadface: Sorry, this user has been locked out.";

    if (errorMessage === expectedMessage) {
      console.log('Test Passed: Correct error message displayed.');
    } else {
      console.log(`Test Failed: Unexpected error message - '${errorMessage}'`);
    }
  } catch (error) {
    console.error('Test encountered an error:', error);
  } finally {
    await driver.quit();
  }
})();
