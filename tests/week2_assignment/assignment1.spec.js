/*
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created */


import {test,chromium,expect} from "@playwright/test"


test("Assignment-1:create lead in salesforce",async()=>{
   // test.setTimeout(15000);

             const browser=   await chromium.launch();
             const browserContext=await browser.newContext();
             const page=await browserContext.newPage();
    
             await page.goto("https://login.salesforce.com/");
             console.log (page.url());
             await page.locator(" //input[@id='username']").fill("kalpravibkm@stockative.com");
             await page.locator("//input[@id='password']").fill("pwB@kama01");
             await page.locator("//input[@id='Login']").click();
             
             await page.locator("//div[@class='slds-icon-waffle']").click();
             await page.locator("//button[@aria-label='View All Applications']").click();
             await page.locator("//p[(text()='Sales')]").click();
             await page.locator("//a[@class='slds-context-bar__label-action dndItem']/span[text()='Leads']").click();
             await page.locator("//button[text()='New']").click();
             await page.locator("//label[text()='Salutation']").click();
             await page.locator("//span[text()='Ms.']").click();
             const lastname="test1";
             await page.locator("input[name='lastName']").fill(lastname);
             await page.locator("input[name='Company']").fill("info");
             await page.locator("//button[@name='SaveEdit']").click();
            const name=await page.locator("//lightning-formatted-name[@slot='primaryField']").textContent();
            console.log(name);
            expect(name).toContain(lastname);
            await page.waitForTimeout(3000);



})


