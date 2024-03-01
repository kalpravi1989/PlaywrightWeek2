import {test,chromium,expect} from "@playwright/test"


test("Learning CSS and Xpath Locators",async()=>{
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
            await page.locator("//input[@id='createLeadForm_firstName']").fill("Testk1");
            await page.locator("//input[@id='createLeadForm_lastName']").fill("R");
            await page.locator("//input[@name='submitButton']").click();
            await page.waitForTimeout(3000);
            console.log(await page.title());
            expect(await page.title()).toContain(" ");
    
    
    })