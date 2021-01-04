import { godaddy } from "./pageObjects/nbplaceholder";

const go = new godaddy();

describe("logo homepage", () => {

    beforeEach(async () => {
        await go.navigate();
      });
    afterAll(async () => {
        await go.quit();
      });
});
//need to fix red line error for rest of code//

// async getElement(elementBy: By): Promise<WebElement> {
//     await this.driver.wait(until.elementLocated(elementBy));
//     let element = await this.driver.findElement(elementBy);
//     await this.driver.wait(until.elementIsVisible(element));
//     return element;
//   }

// async click(elementBy: By): Promise<void> {
//     let element = await this.getElement(elementBy);
//     await this.driver.wait(until.elementIsEnabled(element));
//     return await element.click();
//   }

async openLogo(): Promise<void> {

await this.click(this.dropdownbuild)
  await this.getElement(this.wordpresshosting);
     
await this.driver.wait(
  this.click(this.wordpresshosting));

await this.click(this.logo)
  await this.getElement(this.logo);

await this.driver.wait(
   this.click(this.logo));
    
};

//Tests//

it("Be able to navigate to homepage after clicking logo", async () => {
    jest.setTimeout(5000)
    const generatedomainURL = 'https://www.godaddy.com/';
    const namePage = 'GoDaddy';
    await go.openLogo();
    await go.driver.sleep(500);
    const url = await go.driver.getCurrentUrl();
    const name = await go.driver.getName();
  
  expect(url).toEqual(generatedomainURL);
  expect(name).toEqual(namePage);
  
  });
