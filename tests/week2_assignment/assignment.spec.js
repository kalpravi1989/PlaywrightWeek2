import {test,chromium,expect} from "@playwright/test"


test("login into salesforce",async()=>{
   

             const browser=   await chromium.launch();
             const browserContext=await browser.newContext();
             const page=await browserContext.newPage();
    
             await page.goto("https://login.salesforce.com/");
             console.log (page.url());
             await page.locator(" //input[@id='username']").fill("vidyar@testleaf.com");
             await page.locator("//input[@id='password']").fill("Testleaf@1234");
             await page.locator("//input[@id='Login']").click();
             await page.waitForTimeout(3000);
             console.log(await page.title());



})
test("login into salesforce using fixtures",async({page})=>{
  

            
    
             await page.goto("https://login.salesforce.com/");
             console.log (page.url());
             await page.locator(" //input[@id='username']").fill("vidyar@testleaf.com");
             await page.locator("//input[@id='password']").fill("Testleaf@1234");
             await page.locator("//input[@id='Login']").click();
             await page.waitForTimeout(3000);
             console.log(await page.title());



})