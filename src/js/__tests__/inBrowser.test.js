import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('CardNumber Widget', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: true, // show gui
      slowMo: 100,
      devtools: false, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('CardNumber Widget', () => {
    test('should add .valid class for valid cardNumber', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[data-widget="cardNumber-form-widget"]');
      const input = await form.$('[data-id="cardNumber-input"]');
      await input.type('4729433671224215');
      const submit = await form.$('[data-id="cardNumber-submit"]');
      submit.click();
      await page.waitForSelector('[data-id="cardNumber-input"].valid');
    });
    test('should add .valid class for invalid cardNumber', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[data-widget="cardNumber-form-widget"]');
      const input = await form.$('[data-id="cardNumber-input"]');
      await input.type('11729433671224215');
      const submit = await form.$('[data-id="cardNumber-submit"]');
      submit.click();
      await page.waitForSelector('[data-id="cardNumber-input"].invalid');
    });
  });
});
