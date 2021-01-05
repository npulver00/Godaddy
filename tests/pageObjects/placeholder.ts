//placeholder//

import { By, until, WebDriver } from "selenium-webdriver";



export class GoDaddy{
    driver: WebDriver;
    url: string="https://www.godaddy.com/";
    pageLogo: By = By.className("logo fos");
    WordPress: By = By.id("id-441966f2-c019-4c8a-8f56-d805393adc87");
    addCart: By = By.id("id-wordpress-o365-tier1");
    continueButton: By = By.className("btn btn-purchase continue-button");
    nothanksLink: By = By.className("btn btn-tertiary-inline no-thanks-button");
    trashButton: By = By.className("btn btn-link remove");
    checkoutItems: By = By.className("product-info-no-icon clearfix");

    constructor(driver: WebDriver){
        this.driver = driver;
    }

    async navigate(){
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.pageLogo));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.pageLogo)));
    }

    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return await this.driver.findElement(elementBy).getText()
    }

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }

    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));
        return await this.driver.findElement(elementBy).sendKeys(keys);
    }


    // async getCartList(){
    //     const cartList: Array<string> = [];
    //     let list = await this.driver.findElements(this.checkoutItems);
    //     console.log("List ",list);
    //     for (let i = 0; i < list.length; i++) {
    //         await cartList.push(await list[i].getText());
    // }
    // return list;
    // }
}

