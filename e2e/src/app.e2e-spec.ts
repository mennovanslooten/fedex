import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should start with the form ', async () => {
    await page.navigateTo();
    expect(await element(by.css('form')).isPresent()).toBe(true);
  });

  it('should end with the success message if submitted correctly ', async () => {
    await page.navigateTo();
    await element(by.name('firstName')).sendKeys('First');
    await element(by.name('lastName')).sendKeys('Last');
    await element(by.name('email')).sendKeys('first@last.com');
    await element(by.name('password')).sendKeys('AbCdEfGh');
    await element(by.css('[type="submit"]')).click();
    expect(await element(by.css('[data-status="SUCCESS"]')).isPresent()).toBe(
      true
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
