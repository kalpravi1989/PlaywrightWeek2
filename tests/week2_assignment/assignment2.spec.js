/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update */
import {test,chromium,expect} from "@playwright/test"

test("Assignment-2:Edit lead on testleaf",async()=>{
    // test.setTimeout(15000);
 
              const browser=   await chromium.launch();
              const browserContext=await browser.newContext();
              const page=await browserContext.newPage();
     
              await page.goto("http://leaftaps.com/opentaps/control/main");
             const credentials= page.locator("[class='inputLogin']");
             await credentials.nth(0).fill("demoSalesManager");
             await credentials.nth(1).fill("crmsfa");
             await page.click(".decorativeSubmit");
             await page.click("//a[contains(text(),'CRM/SFA')]");
             await page.waitForTimeout(3000);
             await page.click("//a[contains(text(),'Leads')]");
             await page.click("//a[contains(text(),'Create Lead')]");
             await page.locator("#createLeadForm_companyName").fill("info");
             await page.locator("//input[@id='createLeadForm_firstName']").fill("Testbk");
             await page.locator("//input[@id='createLeadForm_lastName']").fill("R");
             await page.locator("//input[@name='submitButton']").click();
             await page.locator("//a[text()='Edit']").click();
             await page.locator('#updateLeadForm_companyName').fill('testInfo');
             await page.locator("//input[@name='submitButton']").click();
             await page.waitForTimeout(3000);
            
     
     
     })
 