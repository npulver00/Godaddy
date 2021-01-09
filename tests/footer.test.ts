import { Builder, By, Capabilities, until, WebDriver } from "selenium-webdriver"
import { GoDaddy } from './pageObjects/placeholderII';

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const goDaddyFooter = new GoDaddy(driver);

test('it should navigate to \'about us\' page', async () => {
    // We can load pages with 'driver.get()'
    await driver.get('https://www.godaddy.com/');

    await driver.wait(until.elementLocated(goDaddyFooter.aboutGodaddy));
    expect(await(await (await driver).findElement(goDaddyFooter.aboutGodaddy)).getText()).toBe('About GoDaddy');
    
    let aboutUs = await driver.wait(until.elementLocated(By.css('a[href="https://aboutus.godaddy.net/about-us/overview/default.aspx"]')));
    await aboutUs.click();
    await (await driver).sleep(5000);

    const newsroomUrl = 'https://aboutus.godaddy.net/about-us/overview/default.aspx';
    const currentUrl =  await driver.getCurrentUrl();
    expect(currentUrl).toBe(newsroomUrl);

    await (await driver).quit();
});

test('it should navigate to \'Newsroom\' page', async () => {
    await driver.get('https://www.godaddy.com/');
    
    let newsroom = await driver.wait(until.elementLocated(By.css('a[href="https://newsroom.godaddy.net/newsroom/overview/default.aspx"]')));
    await newsroom.click();

    await (await driver).sleep(5000);

    const newsroomUrl = 'https://newsroom.godaddy.net/newsroom/overview/default.aspx';
    const currentUrl =  await driver.getCurrentUrl();
    expect(currentUrl).toBe(newsroomUrl);

    await (await driver).quit();
});