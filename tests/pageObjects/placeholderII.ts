import { By, WebDriver } from "selenium-webdriver"

export class GoDaddy {
    // Search Domain
    searchBar: By = By.css('input[name="domainToCheck"]');
    searchButton: By = By.className('searchText');
    domainCheck: By = By.css('div.ms0.mb-0.mb-lg-3');
    domainCheck1: By = By.css('.exact-body-result .domain-name-text');
    addToCart: By = By.css('div.mb-0.mb-sm-3.mb-md-0');
    contToCartSidePanel: By = By.className('hc-cart-continue-text');
    continueToCart: By = By.css('button.btn.btn-primary.d-flex.align-items-center.teal-button.cart-button');

    // Footer Section
    aboutGodaddy: By = By.css('li.closed:nth-of-type(1) > div.heading-toggle');
    aboutUs: By = By.css('a[href="https://aboutus.godaddy.net/about-us/overview/default.aspx"]');
    newsroom: By = By.css('a[href="https://newsroom.godaddy.net/newsroom/overview/default.aspx"]');
  
    driver: WebDriver;

    url: string = 'https://www.godaddy.com';

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigate(): Promise <void> {
        return await this.driver.get(this.url);
    }
}