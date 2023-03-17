const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

const testCase = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://google.com");

  await driver.findElement(By.name("q")).sendKeys("Hello, world", Key.RETURN);

  setInterval(() => driver.quit(), 9000);
};

testCase();
