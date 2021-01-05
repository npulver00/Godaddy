import { GoDaddy } from "./pageObjects/placeholder";

const go = new GoDaddy();


describe("GoDaddy Tabs ", () => {

    beforeEach(async () => {
        await go.navigate();
    });
    afterAll(async () => {
        await go.quit();
      });

    it("Be able to go to third tab page", async () => {
        // jest.setTimeout(15000)
        await go.openThirdTab()
        console.log("third tab success")

    })
    it("Be able to go to first tab page", async () => {
        // jest.setTimeout(15000)
        await go.openfirstTab()
        console.log("first tab success")

    })
    it("Be able to go to second page", async () => {
        // jest.setTimeout(15000)
       await go.openSecondTab()
        console.log("Second tab success")

    })




});