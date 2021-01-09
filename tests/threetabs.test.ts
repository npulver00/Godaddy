import { GoDaddy } from "./pageObjects/placeholderNP";

const go = new GoDaddy();


describe("GoDaddy Tabs ", () => {

    beforeEach(async () => {
        await go.navigate();
    });
    afterAll(async () => {
        await go.quit();
      });
    it("Be able to go to first tab page: Personal & Business", async () => {
        const firstURL = "https://www.godaddy.com/?xphp=default";
        await go.openfirstTab();
        await go.driver.sleep(500);
        const url =  await go.driver.getCurrentUrl();
        expect(url).toEqual(firstURL);
    });
    it("Be able to go to second page: Designers & Developers", async () => {
        const secondURL = "https://www.godaddy.com/partners/designers-developers?xphp=pro";
        await go.openSecondTab();
        await go.driver.sleep(500);
        const url =  await go.driver.getCurrentUrl();
        expect(url).toEqual(secondURL);
    });
    it("Be able to go to third tab page: Domain Investors", async () => {
        const thirdURL = "https://www.godaddy.com/partners/domain-investors?xphp=domainer";
        await go.openThirdTab();
        await go.driver.sleep(500);
        const url =  await go.driver.getCurrentUrl();
        expect(url).toEqual(thirdURL);    
    });
});