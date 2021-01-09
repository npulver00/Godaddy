import { urlContains } from "selenium-webdriver/lib/until";
import { godaddy } from "./pageObjects/nbplaceholder";

const go = new godaddy();
//manual testing will be conducted as GoDaddy has blocked access to login portion

/* The blocked out selectors are for my profile (manual testing will be conducted due to issue with blocker*/
//qalogo: By = By.xpath("//span[text()='QA']");
//accountsetting: By = By.xpath("//a[contains(text(), 'Account Settings')]");
//editbutton: By = By.css('[class="btn btn-link btn-sm"]');
//organization: By = By.css('[for="organization"]');
//editorganization: By = By.css('[name="organization"]');
//savebutton: By = By.css('[class="btn btn-primary ux-btn-set-item"]');

describe("edit profile", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });


  



})
