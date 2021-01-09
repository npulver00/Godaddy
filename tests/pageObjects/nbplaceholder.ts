import { WebDriver, By, until, Builder, Capabilities, WebElement } from 'selenium-webdriver'
import { elementLocated } from "selenium-webdriver/lib/until";
const chromedriver = require("chromedriver");

export class godaddy {
  driver: WebDriver;
  homepage: string = "https://www.godaddy.com/";
  dropdownname: By = By.xpath("//a[text()='Name & Protect']");
  dropdownbuild: By = By.xpath("//a[text()='Build & Grow']");
  generatedomain: By = By.xpath("//a[text()='Generate Domain & Business Names']");
  wordpresshosting: By = By.xpath("//a[text()='WordPress Hosting']");
  domainsHomePage: By = By.xpath("//span[text()='Domains']");
  logo: By = By.xpath('//a[@aria-label="GoDaddy"]');
  //logo: By = By.css("#id-b1c657aa-b81f-4909-86bb-e349818d2dfb");
  //logo: By = By.className(".path-tm-desktop");


  constructor(driver?: WebDriver) {
    if (driver) this.driver = driver;
    else
      this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()

  }
  async navigate(url?: string): Promise<void> {
    if (url) this.driver.get(url)
    else return this.driver.get(this.homepage);
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
    let element = await this.driver.wait(until.elementLocated(elementBy));
    return await element.click();
  }

  /* Name & Protect*/
  async opendropdownname(): Promise<void> {

    await this.click(this.dropdownname)
    await this.getElement(this.generatedomain);

    await this.driver.wait(
      this.click(this.generatedomain));
  }
  /* Build & Grow */
  async opendropdownbuild(): Promise<void> {

    await this.click(this.dropdownbuild)
    await this.getElement(this.wordpresshosting);

    await this.driver.wait(
      this.click(this.wordpresshosting));
  }
  /*logo*/
  async clicklogo(): Promise<void> {
    await this.navigate('https://www.godaddy.com/domains/domain-name-search')
    return await this.click(this.logo)
  }

}

