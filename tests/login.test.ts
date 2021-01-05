import { GoDaddy } from "./pageObjects/placeHolderNP";

const go = new GoDaddy();

import {
  Builder,
  By,
  Capabilities,
  until,
  WebDriver,
  WebElement,

} from "selenium-webdriver";
import { elementLocated } from "selenium-webdriver/lib/until";
const chromedriver = require("chromedriver");

export class login {
  username: By = By.css("[type='username']");
  constructor(){}

  async user(): Promise<void>{
    const user = this.username
    console.log("user", user)
  }
}





describe("GoDaddy Login/Logout", () => {

    beforeEach(async () => {
        await go.navigate();
      });
    // afterAll(async () => {
    //     await go.quit();
    //   });

      it("Be able to login", async () => {
        const signURL =  "https://sso.godaddy.com/?realm=idp&path=%2fproducts&app=account"
        const username = "P1Group2 ";
    
        //   const password = "QAP1Group2!";
        // jest.setTimeout(15000)
       await go.openDropdown();
       await go.selectSignIn();
       await go.inputUserName("P1Group2");
       await go.inputPassword("QAP1Group2!");
       await go.clickFinalSignIn();
       const url =  await go.driver.getCurrentUrl();
       

       expect(username).toBeTruthy();
       expect(url).toEqual(signURL);



      })

  

})