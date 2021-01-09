import { Builder, By, Capabilities, until, WebDriver } from "selenium-webdriver"
// import { GoDaddy } from './pageObjects/placeholderII';

const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

// const searchDomain = new GoDaddy(driver);

// describe('Godaddy site', () => {
//     beforeEach(async () => {
//         // jest.setTimeout(20000);
//         await searchDomain.navigate();
//     });
//     afterAll(async () => {
//         await (await driver).quit();
//     });

//     it('it should search domain name and add product to cart', async () => {
//         await (await driver).wait(until.elementLocated(searchDomain.searchBar));
//         await (await driver).findElement(searchDomain.searchBar).sendKeys('hyrte.com');
    
//         await (await driver).wait(until.elementLocated(searchDomain.searchButton));
//         await (await (await driver).findElement(searchDomain.searchButton)).click();
    
//         await (await driver).wait(until.elementLocated(searchDomain.domainCheck1));
//         // expect(await(await (await driver).findElement(searchDomain.domainCheck)).getText()).toBe('Your domain is available!');
//         expect(await(await (await driver).findElement(searchDomain.domainCheck1)).getText()).toBe('hyrte.com is available');

//         console.log(await(await driver.findElement(searchDomain.domainCheck1)).getText());

//         await (await driver).wait(until.elementLocated(searchDomain.addToCart));
//         await (await (await driver).findElement(searchDomain.addToCart)).click();

//         await (await driver).wait(until.elementLocated(searchDomain.continueToCart));
//         await (await (await driver).findElement(searchDomain.continueToCart)).click();

//     });
// });
