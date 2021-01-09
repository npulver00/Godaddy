import { godaddy } from "./pageObjects/nbplaceholder";

const go = new godaddy();

describe("left navbar", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });


  test("Be able to navigate to Generate Domain page", async () => {
    const generatedomainURL = 'https://www.godaddy.com/domains/domain-name-generator';
    const namePage = "Domain Name Generator | Search The Best Domain for Free - GoDaddy";
    await go.opendropdownname();
    await go.driver.sleep(750);
    const url = await go.driver.getCurrentUrl();
    const name = await go.driver.getTitle();

    expect(url).toEqual(generatedomainURL);
    expect(name).toContain(namePage);
  });

  test("Be able to navigate to Word Press page", async () => {
    const generatedomainURL = 'https://www.godaddy.com/hosting/wordpress-hosting';
    const namePage = "WordPress Hosting | Fast and Secure with Award-winning Support - GoDaddy";
    await go.opendropdownbuild();
    await go.driver.sleep(750);
    const url = await go.driver.getCurrentUrl();
    const name = await go.driver.getTitle();

    expect(url).toEqual(generatedomainURL);
    expect(name).toContain(namePage);
  });
})
