import { urlContains } from "selenium-webdriver/lib/until";
import { godaddy } from "./pageObjects/nbplaceholder";

const go = new godaddy();
//manual testing will be conducted as GoDaddy has blocked access to login portion

describe("edit profile", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });

  it("", async () => {
    jest.setTimeout(15000)
   //go.openDropdown()
   //go.selectSignIn()


  })


})



