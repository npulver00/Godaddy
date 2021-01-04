import {WebDriver, By, until, Builder, Capabilities, WebElement} from 'selenium-webdriver'
import { elementLocated } from "selenium-webdriver/lib/until";
const chromedriver = require("chromedriver");

export class godaddy {
   driver: WebDriver;
   homepage: string = "https://www.godaddy.com/";
   dropdownname: By = By.xpath("//a[text()='Name & Protect']");
   dropdownbuild: By = By.xpath("//a[text()='Build & Grow']");
   generatedomain: By = By.xpath("//a[text()='Generate Domain & Business Names']");
   wordpresshosting: By = By.xpath("//a[text()='WordPress Hosting']");
   
   /* The blocked out selectors are for my profile (manual testing will be conducted due to issue with blocker*/
   //qalogo: By = By.xpath("//span[text()='QA']");
   //accountsetting: By = By.xpath("//a[contains(text(), 'Account Settings')]");
   //editbutton: By = By.css('[class="btn btn-link btn-sm"]');
   //organization: By = By.css('[for="organization"]');
   //editorganization: By = By.css('[name="organization"]');
   //savebutton: By = By.css('[class="btn btn-primary ux-btn-set-item"]');
   
   logo: By = By.css("#id-b1c657aa-b81f-4909-86bb-e349818d2dfb");

  constructor(driver?: WebDriver) {
      if (driver) this.driver = driver;
      else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()

  }
  async navigate(): Promise <void> {
      return this.driver.get(this.homepage);
   }

   async quit(): Promise<void> {
    return this.driver.quit();
  }

async getElement(elementBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(elementBy));
    let element = await this.driver.findElement(elementBy);
    await this.driver.wait(until.elementIsVisible(element));
    return element;
  }


async click(elementBy: By): Promise<void> {
    let element = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(element));
    return await element.click();
  }

// async opendropdownname(): Promise<void> {

// await this.click(this.dropdownname)
//     await this.getElement(this.generatedomain);

// await this.driver.wait(
//     this.click(this.generatedomain));

// await this.click(this.dropdownbuild)
//   await this.getElement(this.wordpresshosting);
     
// await this.driver.wait(
//   this.click(this.wordpresshosting));

// await this.click(this.logo)
//   await this.getElement(this.logo);

// await this.driver.wait(
//    this.click(this.logo));
    
// };
// };

}