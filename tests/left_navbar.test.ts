import { godaddy } from "./pageObjects/nbplaceholder";

const go = new godaddy();

describe("left navbar", () => {

  beforeEach(async () => {
      await go.navigate();
  });
  afterAll(async () => {
      await go.quit();
    });
});
//need to fix red line error for rest of code//

// async getElement(elementBy: By): Promise<WebElement> {
//   await this.driver.wait(until.elementLocated(elementBy));
//   let element = await this.driver.findElement(elementBy);
//   await this.driver.wait(until.elementIsVisible(element));
//   return element;
// }

// async click(elementBy: By): Promise<void> {
//   let element = await this.getElement(elementBy);
//   await this.driver.wait(until.elementIsEnabled(element));
//   return await element.click();
// }
async openGenerateDomain(): Promise<void> {

await this.click(this.dropdownname)
  await this.getElement(this.generatedomain);
  
await this.driver.wait(
  this.click(this.generatedomain));

async openWordPressHosting(): Promise<void> {
  
await this.click(this.dropdownbuild)
  await this.getElement(this.wordpresshosting);
       
await this.driver.wait(
  this.click(this.wordpresshosting));

});

//Tests//

it("Be able to navigate to Generate Domain page", async () => {
  jest.setTimeout(5000)
  const generatedomainURL = 'https://www.godaddy.com/domains/domain-name-generator';
  const namePage = 'Domain Names / Search for Domain Names';
  await go.openGenerateDomain();
  await go.driver.sleep(500);
  const url = await go.driver.getCurrentUrl();
  const name = await go.driver.getName();

expect(url).toEqual(generatedomainURL);
expect(name).toEqual(namePage);

});

it("Be able to navigate to Word Press page", async () => {
  jest.setTimeout(5000)
  const generatedomainURL = 'https://www.godaddy.com/hosting/wordpress-hosting';
  const namePage = 'Websites & Stores / WordPress Hosting';
  await go.openWordPressHosting();
  await go.driver.sleep(500);
  const url = await go.driver.getCurrentUrl();
  const name = await go.driver.getName();

expect(url).toEqual(generatedomainURL);
expect(name).toEqual(namePage);

});

