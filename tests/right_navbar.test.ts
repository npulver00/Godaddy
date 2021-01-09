//Justin//
import { GoDaddy } from './pageObjects/placeholder';
//Justin//
import { Builder, Capabilities, until, WebDriver } from "selenium-webdriver";

const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const page = new GoDaddy(driver);

  describe("GoDaddy", ()=>{
    // jest.setTimeout(15000);
    beforeEach(async () => {
      await page.navigate();
    });
    afterAll(async () => {
      await driver.quit();
    });


    test("Help Center Page", async()=>{
        await driver.wait(until.elementLocated(page.helpCenterLink));
        await (await driver.findElement(page.helpCenterLink)).click();
  
        await driver.wait(until.elementLocated(page.helpCenterPage));
        expect(await (await (await driver.findElement(page.helpCenterPage)).getText()).toLowerCase()).toContain("help center");
        
      })


});