import { GoDaddy } from './pageObjects/placeholder';
//Justin//
import { Builder, Capabilities, until, WebDriver } from "selenium-webdriver";

const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const page = new GoDaddy(driver);

  describe("GoDaddy", ()=>{
    jest.setTimeout(15000);
    beforeEach(async () => {
      await page.navigate();
    });
    afterAll(async () => {
      await driver.quit();
    });

    test("Add Items to Cart", async()=>{
      await driver.wait(until.elementLocated(page.WordPress));
      await (await driver.findElement(page.WordPress)).click();
      await driver.wait(until.elementLocated(page.addCart));
      await (await driver.findElement(page.addCart)).click();
      await driver.wait(until.elementLocated(page.continueButton));
      await (await driver.findElement(page.continueButton)).click();
      await driver.wait(until.elementLocated(page.nothanksLink));
      await (await driver.findElement(page.nothanksLink)).click();
      //await driver.wait(until.elementLocated(page.addCart));
      // let cartList = await page.getCartList();
      // console.log("Cart ",cartList);
      // expect(cartList).toContain("Basic Managed WordPress Website");

      await driver.wait(until.elementLocated(page.checkoutItems))
      expect(await (await driver.findElement(page.checkoutItems)).getText()).toContain("Basic Managed WordPress Websites");
      
      

    });


  });