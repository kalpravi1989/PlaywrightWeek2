import {test,chromium} from "@playwright/test"

test('Launching browser',async({page})=>{
 await page.goto("https://platform.testleaf.com");

});