import { GoDaddy } from "./pageObjects/placeholder";

const go = new GoDaddy();


describe("GoDaddy Login/Logout", () => {

    beforeEach(async () => {
        await go.navigate();
      });
    // afterAll(async () => {
    //     await go.quit();
    //   });

      it("Be able to login", async () => {
        //   const username = "P1Group2 ";
        //   const password = "QAP1Group2!";
        // jest.setTimeout(15000)
       await go.openDropdown();
       await go.selectSignIn();
       await go.inputUserName("P1Group2");
       await go.inputPassword("QAP1Group2!");
       await go.clickFinalSignIn();

    //  make asserations for url and user

      })

  

})