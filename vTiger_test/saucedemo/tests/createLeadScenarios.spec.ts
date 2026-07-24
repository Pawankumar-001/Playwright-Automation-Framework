import { Browser, BrowserContext, chromium, Locator, Page, test } from "@playwright/test"

// const browser:Browser=await chromium.launch({headless:false});
// const context:BrowserContext =await browser.newContext();
// const page:Page =await context.newPage();
// await page.goto("");
// await page.waitForTimeout(2000);
//  let dismissButton:Locator=page.locator("");
// if(await dismissButton.isVisible()){
//     await dismissButton.click();
// }
// await page.locator("//a[text()='Gift Cards']").click();



test('Amazon page open', async ({ page }) => {
    await page.goto("https://www.amazon.com/");
    await page.waitForTimeout(5000);
    let dismissButton: Locator = page.locator("//input[@data-action-type='DISMISS']");
    if (await dismissButton.isVisible()) {
        await dismissButton.click();
    }
    let searchBoxValue=await page.locator("//input[@id='twotabsearchtextbox']")
    await searchBoxValue.fill("television");
    await searchBoxValue.press('Enter');
    await page.waitForTimeout(5000);
    await page.locator("//div[@id='s-skipLinkTargetForMainSearchResults']/following-sibling::span[@class='rush-component s-latency-cf-section']//span[contains(text(),'Hisense 32-Inch Class A4 Series FHD 1080p Smart Fire TV (32A4NF, 2025 Model) - DTS Virtual: X')]").click();
    

   // await page.locator("//span[contains(text(),'Samsung 55')]").click();
   
    // let newPage: Page[]=await page.context().pages()
     //let newTab:Page=newPage[1]
     let tvName=await page.locator("//span[@id='productTitle']").textContent();
     console.log("TV name- ",tvName);
     let tvPrice=await page.locator("//div[@id='corePrice_feature_div']//span[@class='a-price aok-align-center apex-pricetopay-value']//span[@class='a-price-whole']").textContent();
     console.log("TV price- ",tvPrice)

     


}
)






















// import {  Page, test } from '@playwright/test';
// import { LoginPageVT } from '../pages/LoginPage.ts';
// import { leadsPage } from '../pages/LeadsPage/LeadsPage.ts';
// //import { HomePage } from '../pages/HomePage/HomePage.ts';

// // cancel lead information without save
// //async function cancelInformationWithOutSave(page:Page) {
// //await page.locator("//input[@value='  Save  ']").nth(1).click();
// //}


// test("TC_001", async({page})=>{
//    let lp:LoginPageVT = new LoginPageVT(page);
//      await lp.Login();
//     // let hp:HomePage=new HomePage(page);
//     //  await hp.clickOnLeadsLink(page);
//     let ldp:leadsPage=new leadsPage(page);
//      await ldp.clickOnplusButton(page);
//      await ldp.fillLeadInformation(page);
//      await ldp.clickOnSaveButton(page);

// }
// )




