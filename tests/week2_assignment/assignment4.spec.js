
/*
Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name  */
import {test,chromium,expect} from "@playwright/test"

test("Assignment-4 Edit Individual",async()=>{
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
              await page.waitForTimeout(3000);
              const lastName="test2";
              await page.locator("//input[@name='Individual-search-input']").fill(lastName)
              await page.keyboard.press('Enter');
              const table=page.locator("table[class='slds-table forceRecordLayout slds-table--header-fixed slds-table--edit slds-table--bordered resizable-cols slds-table--resizable-cols uiVirtualDataTable']");
              const column=table.locator("thead tr th");
              //console.log(await column.count());
              const rows=table.locator("tbody tr");
              //console.log(await rows.count())
              const matchedrow=rows.filter({
                has:page.locator("th span a"),
                hasText:"test2"
             })
             await matchedrow.locator("td[class='slds-cell-edit cellContainer'] span div").click()
             await page.locator("//a[@title='Edit']").click();
             await page.locator("(//a[contains(text(),'None')])[1]").click();
             await page.locator("//a[text()='Ms.']").click();
             await page.locator("//input[@placeholder='First Name']").fill("kte3");
             await page.locator("//button[@title='Save']//span[contains(@class,'label bBody')][normalize-space()='Save']").click();
             await page.waitForTimeout(3000);
 })