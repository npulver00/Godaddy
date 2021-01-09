import { GoDaddy } from './pageObjects/placeholder';
import { Builder, Capabilities, until, WebDriver } from "selenium-webdriver";

const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const page = new GoDaddy(driver);

  describe("GoDaddy", ()=>{
    beforeEach(async () => {
      await page.navigate();
    });
    afterAll(async () => {
      await driver.quit();
    });

    test("Adds Items to Cart", async()=>{
      //add item to cart
      await driver.wait(until.elementLocated(page.wordPress));
      await (await driver.findElement(page.wordPress)).click();
      await driver.wait(until.elementLocated(page.addCart));
      await (await driver.findElement(page.addCart)).click();
      await driver.wait(until.elementLocated(page.continueButton));
      await (await driver.findElement(page.continueButton)).click();
      await driver.wait(until.elementLocated(page.nothanksLink));
      await (await driver.findElement(page.nothanksLink)).click();
      
      let cartItemList = await page.getCartList();
      expect(cartItemList).toContain("Basic Managed WordPress Websites");
    });

    test("Removes Items from Cart", async()=>{
      await driver.wait(until.elementLocated(page.webHosting));
      await (await driver.findElement(page.webHosting)).click();
      await driver.wait(until.elementLocated(page.webAdd));
      await (await driver.findElement(page.webAdd)).click();
      await driver.wait(until.elementLocated(page.continueButton));
      await (await driver.findElement(page.continueButton)).click();
      await driver.wait(until.elementLocated(page.nothanksLink));
      await (await driver.findElement(page.nothanksLink)).click();

    
      await driver.wait(until.elementLocated(page.trashButton));
      await (await driver.findElement(page.trashButton)).click();
      await driver.wait(until.elementLocated(page.checkoutItems));
      expect(await (await driver.findElement(page.checkoutItems)).getText()).not.toContain("Economy Linux Hosting with cPanel");
    });

  });