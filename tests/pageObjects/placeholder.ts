//placeholder//

import { By, until, WebDriver } from "selenium-webdriver";



export class GoDaddy{
    driver: WebDriver;
    url: string="https://www.godaddy.com/";
    pageLogo: By = By.className("logo fos");
    wordPress: By = By.id("id-441966f2-c019-4c8a-8f56-d805393adc87");
    webHosting: By = By.id("id-ae9d95ef-d516-4648-99bf-4278af91cf81");
    addCart: By = By.id("id-wordpress-o365-tier1");
    webAdd: By = By.id("id-cpanel-o365-tier1")
    continueButton: By = By.className("btn btn-purchase continue-button");
    nothanksLink: By = By.className("btn btn-tertiary-inline no-thanks-button");
    trashButton: By = By.className("btn btn-link remove");
    //trashButton: By = By.id("svg-container-trash");
    checkoutItems: By = By.className("product-info-no-icon clearfix");
    checkoutPage: By = By.className("icon icon-cart-v2");

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

    async addToCart(){

    }


    // async getCartList(){
    //     const cartList: Array<string> = [];
    //     await this.driver.wait(until.elementsLocated(this.checkoutItems));
    //     let list = await this.driver.findElements(this.checkoutItems);
    //     console.log("List ",list);
    //     for (let i = 0; i < list.length; i++) {
    //         await cartList.push(await list[i].getText());
    //         //cartList.push(await (await list[i].getText()).toLowerCase());
    // }
    // return list;
    // }
}

