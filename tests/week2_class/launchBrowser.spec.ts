import {test,chromium} from "@playwright/test"

test('Launching browser',async({})=>{
    const browser=await chromium.launch({headless:false,channel:"chrome"}); //chrome,msedge,
    const browsercontext=await browser.newContext();
    const page=await browsercontext.newPage();
    page.goto("https://www.google.com")
    await page.waitForTimeout(3000);
})