import { godaddy } from "./pageObjects/nbplaceholder";

const go = new godaddy();

describe("logo homepage", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });


  test("Be able to navigate to homepage after clicking logo", async () => {
    const generatedomainURL = 'https://www.godaddy.com/';
    const namePage = 'GoDaddy';
    await go.clicklogo();
    await go.driver.sleep(750);
    const url = await go.driver.getCurrentUrl();
    const name = await go.driver.getTitle();

    expect(url).toEqual(generatedomainURL);
    expect(name).toContain(namePage);
  });

})
