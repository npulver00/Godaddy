import { GoDaddy } from "./pageObjects/placeholderNP";

const go = new GoDaddy();


describe("GoDaddy Tabs ", () => {

    beforeEach(async () => {
        await go.navigate();
    });
    afterAll(async () => {
        await go.quit();
      });

    it("Be able to go to 'Domains' Button page", async () => {
        const domainURL = 'https://www.godaddy.com/domains/domain-name-search';
        const titlePage = 'Domain Name Search | Check Available Domains - GoDaddy';
        await go.openDomainsButton();
        /* Sleep allows the page to load to beable to get the correct url & title*/
        await go.driver.sleep(500);
        const urlDomain =  await go.driver.getCurrentUrl();
        const titleDomain =  await go.driver.getTitle();
   
       expect(urlDomain).toEqual(domainURL);
       expect(titleDomain).toEqual(titlePage);
   
    });
    it("Be able to go to 'Websites' Button page", async () => {
          
        const websiteURL = 'https://www.godaddy.com/websites/website-builder';
        const titlePage = 'Website Builder | Create Your Own Website in Minutes GoDaddy';
        await go.openWebsiteButton();
        /* Sleep allows the page to load to beable to get the correct url & title*/
        await go.driver.sleep(500);
        const urlWebsites =  await go.driver.getCurrentUrl();
        const titleWebsites =  await go.driver.getTitle();
   
       expect(urlWebsites).toEqual(websiteURL);
       expect(titleWebsites).toEqual(titlePage);
      
    });
  
    it("Be able to go to 'SLL Security ' Button page", async () => {
        const sllURL = 'https://www.godaddy.com/web-security/ssl-certificate';
        const titlePage = 'SSL Certificate | Secure Your Data & Transactions - GoDaddy';
        await go.openSecurityButton();
        /* Sleep allows the page to load to beable to get the correct url & title*/
        await go.driver.sleep(500);
        const urlSLL =  await go.driver.getCurrentUrl();
        const titleSLL =  await go.driver.getTitle();
   
       expect(urlSLL).toEqual(sllURL);
       expect(titleSLL).toEqual(titlePage);
    });

    it("Be able to go to 'email' Button page", async () => {
        const emailURL = 'https://www.godaddy.com/email/professional-business-email';
        const titlePage = 'Professional Business Email | Get a Business Email Account Today - GoDaddy';
        await go.openEmailButton();
        /* Sleep allows the page to load to beable to get the correct url & title*/
        await go.driver.sleep(500);
        const urlEmail =  await go.driver.getCurrentUrl();
        const titleEmail =  await go.driver.getTitle();
   
       expect(urlEmail).toContain(emailURL);
       expect(titleEmail).toContain(titlePage);
    });
});