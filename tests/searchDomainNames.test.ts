import { Builder, By, Capabilities } from "selenium-webdriver"

const chromedriver = require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

test("it should run search operation", async () => {
    await (await driver).get('https://godaddy.com');
    const searchBar: By = By.css('input[name="domainToCheck"]');
    // const searchButton: By = By.css('.searchText');
    const searchButton: By = By.css('button.btn.btn-search.bg-teal-550');
    await (await driver).findElement(searchBar).sendKeys('hyrte.com');
    await (await (await driver).findElement(searchButton)).click();
    const domainCheck: By = By.css('div.ms0.mb-0.mb-lg-3');
    expect(await(await (await driver).findElement(domainCheck)).getText()).toBe('Your domain is available!');

    const addToCart: By = By.css('button.btn.btn-primary.teal-button.cart-button');
    await (await (await driver).findElement(addToCart)).click();
    const continueToCart: By = By.css('button.btn.btn-primary.d-flex.align-items-center.teal-button.cart-button');
    await (await (await driver).findElement(continueToCart)).click();
    const resultItem: By = By.css('h3.font-primary-bold');
    expect(await(await (await driver).findElement(resultItem)).getText()).toBe('Full Domain Privacy & Protection');
    // const addText: By = By.css
    // const searchButton: By = By.css[]
});