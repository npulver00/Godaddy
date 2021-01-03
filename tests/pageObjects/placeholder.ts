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


export class GoDaddy {
    driver: WebDriver;
    // dropdown: By = By.xpath("//a[contains(@class, 'tray-toggle')]")
    firstTab: By = By.xpath("//span[text()='Personal & Business']");
    secondTab: By = By.xpath("//span[text()='Designers & Developers']");
    thirdTab: By = By.xpath("//span[text()='Domain Investors']");


//  meetOurMakers: By = By.xpath("//a[contains(@href,'https://www.godaddy.com/make-a-different-future') and @id='id-fac1bc0a-10df-4e4c-bc44-3a1d78449a58']");

 domainsButtonHomePage: By = By.xpath("//span[text()='Domains']");
 websitesButtonHomePage: By = By.xpath("//span[text()='Websites']");
 sllSecurityButtonHomePage: By = By.xpath("//span[text()='SSL Security']");
 professEmailButtonHomePage: By = By.xpath("//span[text()='Professional Email']");
 godaddyLogo: By = By.css("#id-b1c657aa-b81f-4909-86bb-e349818d2dfb")

// meetOurMakers: By = By.css("#id-fac1bc0a-10df-4e4c-bc44-3a1d78449a58");


    dropdown: By = By.xpath("//span[text()='Sign In']");
    signIn: By = By.xpath("//a[text()='Sign In']");
    username: By = By.css("[type='username']");
    password: By = By.css("[type='password']");
    finalSignIn: By = By.css("[id='submitBtn']")

    homePage: string = "https://www.godaddy.com/";
    strUrl: any;

    constructor(driver?: WebDriver) {
        if (driver) this.driver = driver;
        else
            this.driver = new Builder()
                .withCapabilities(Capabilities.chrome())
                .build();
    }

    /**
     * Navigates to the URL 
     * @param url string
     */
    async navigate(): Promise<void> {
        return this.driver.get(this.homePage);

    }
    async quit(): Promise<void> {
        return this.driver.quit();
    }
// For the Login Start
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    }

    async click(elementBy: By): Promise<void> {
        let element = await this.getElement(elementBy);
        await this.driver.wait(until.elementIsEnabled(element));
        return await element.click();
    }

    async openDropdown(): Promise<void> {
        await this.click(this.dropdown)
    }

    async selectSignIn(): Promise<void> {
        await this.click(this.signIn)
    }

    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await this.driver.wait(until.elementIsEnabled(input));
        await input.clear();
        return input.sendKeys(keys);
    }

    async inputUserName(username: string): Promise<void> {
        let input = await this.getElement(this.username);
        await this.driver.wait(until.elementIsEnabled(input));
        return input.sendKeys(username)
    }

    async inputPassword(password: string): Promise<void> {
        let input = await this.getElement(this.password);
        await this.driver.wait(until.elementIsEnabled(input));
        return input.sendKeys(password);
    }

    async clickFinalSignIn(): Promise<void> {
        return await this.click(this.finalSignIn)
    }
    // For the Login end 

    //three Tabs Start


    async openThirdTab() {
       return new Promise<void>((resolve, reject) => {
           
            if (!this.thirdTab) {
                throw new Error('The Third tab does not exist, failed')
            } 
    
            setTimeout( () => {
                resolve(this.click(this.thirdTab));
            }, 1500);
        });
    }
    async openfirstTab() {
        return new Promise<void>((resolve, reject) => {
            
             if (!this.firstTab) {
                 throw new Error('The first tab does not exist, failed')
             } 
     
             setTimeout( () => {
                 resolve(this.click(this.firstTab));
             }, 1500);
         });
     }
     async openSecondTab() {
        return new Promise<void>((resolve, reject) => {
            
             if (!this.secondTab) {
                 throw new Error('The Second tab does not exist, failed')
             } 
     
             setTimeout( () => {
                 resolve(this.click(this.secondTab));
             }, 1500);
         });
     }


       //three Tabs end


    //    Begin homePage
      
    async openDomainsButton(): Promise<void> {
        await this.click(this.domainsButtonHomePage);    
     };
     async openWebsiteButton(): Promise<void> {
        await this.click(this.websitesButtonHomePage);
     };
     async openSecurityButton(): Promise<void> {
        await this.click(this.sllSecurityButtonHomePage);
     };
     async openEmailButton(): Promise<void> {
          await this.click(this.professEmailButtonHomePage);
     };


}
