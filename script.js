const { Builder, By, Key, until } = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    await driver.wait(until.titleIs('Selenium - Google Search'), 100000);  // 10 seconds
    // Keep browser open for 60 seconds
    await new Promise(resolve => setTimeout(resolve, 60000));
  } finally {
    await driver.quit();
  }
})();

