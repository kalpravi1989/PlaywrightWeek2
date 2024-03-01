/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name */

import {test,chromium,expect} from "@playwright/test"

test("Assignment-3 Create Individual",async()=>{
    // test.setTimeout(15000);
 
              const browser=   await chromium.launch();
              const browserContext=await browser.newContext();
              const page=await browserContext.newPage();
     
              await page.goto("https://login.salesforce.com/");
              await page.locator(" //input[@id='username']").fill("kalpravibkm@stockative.com");
              await page.locator("//input[@id='password']").fill("pwB@kama01");
              await page.locator("//input[@id='Login']").click();
              await page.locator("//div[@class='slds-icon-waffle']").click();
              await page.locator("//button[@aria-label='View All Applications']").click();
              await page.locator("//p[text()='Individuals']").click();
              await page.waitForTimeout(3000)
              await page.locator("//span[contains(text(),'Recently Viewed')]/ancestor::one-app-nav-bar-menu-button").click();
              await page.locator("//span[text()='New Individual']").click();
              const lastname="test1";
              await page.locator("(//a[contains(text(),'None')])[1]").click();
              await page.locator("//a[text()='Mr.']").click();
              await page.locator("//input[@placeholder='Last Name']").fill(lastname);
              await page.locator("//button[@title='Save']").click();
              const name=await page.locator("//div[text()='Individual']/following-sibling::div/span[@class='uiOutputText']").textContent();
              expect(name).toContain(lastname);
 
 
 })