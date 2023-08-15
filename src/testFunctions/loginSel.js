import { Builder, By, Key, until } from 'selenium-webdriver';

async function runSelenium() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.example.com');
    // 在此执行其他Selenium操作
  } finally {
    await driver.quit();
  }
}

export default {
  // ...
  mounted() {
    runSelenium();
  },
};