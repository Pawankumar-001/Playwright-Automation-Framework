
import { Locator, Page, test } from '@playwright/test';
import { LoginPageVT } from '../pages/LoginPage.ts';
import { HomePageVT } from '../pages/HomePage/HomePage.ts';
import { contactPageVT } from '../pages/ContactPage/ContactPage.ts';
import { testData } from '../pages/testData.ts';
import { createNewContactPage } from '../pages/ContactPage/CreatingNewContact.ts';





test("TC_001", async ({ page }) => {
   let loginPage: LoginPageVT = new LoginPageVT(page);
   await loginPage.enterUrl();
   let usernameData: string = testData.TC001.username
   await loginPage.enterUsername(usernameData);
   const usernameValue: string = await loginPage.printEnteredUsernameValue();
   console.log("Username value-", usernameValue);
   let passwordData: string = testData.TC001.password
   await loginPage.enterPassword(passwordData);
   await loginPage.printEnteredPasswordValue();
   const passwordValue: string = await loginPage.printEnteredPasswordValue();
   console.log("Password value-", passwordValue);
   await loginPage.clickOnLoginButton();

   let homePage: HomePageVT = new HomePageVT(page);
   await homePage.takeScreenshot();
   let homePageTitle: string = await homePage.takeHomePageTitle();
   console.log("Home pagr title--", homePageTitle);
   await homePage.scrollDownHomePage(0, 2000);
   await homePage.scrollToContactLink(0, 2000);
   await homePage.clickOnTheContactLink();

   let contactPage: contactPageVT = new contactPageVT(page);
   await page.waitForTimeout(5000);
   await contactPage.clickCreateContactButton();

   let createNewContact:createNewContactPage=new createNewContactPage(page);
   let firstname: string=testData.TC001.firstname;
   await createNewContact.enterFirstName(firstname);
   let firstNamevalue: string = await createNewContact.printFirstNameValue();
   console.log("First name - ", firstNamevalue);
   let lastName: string=testData.TC001.lastname
   await createNewContact.enterLastName("Carter");
   let lastNameValue: string = await createNewContact.printLastNameValue();
   console.log("Last name - ", lastNameValue);
   let titleName: string=testData.TC001.titleName;
   await createNewContact.enterTitleName(titleName);
   let titleValue: string = await createNewContact.printTitleNameValue();
   console.log("Title name - ", titleValue);
   let departmentName: string=testData.TC001.department;
   await createNewContact.enterDepartmentName(departmentName);
   let deprtmentValue: string = await createNewContact.printDepartmenttNameValue();
   console.log("Department name - ", deprtmentValue);
   await createNewContact.selectValueFromLeadSource("Partner");
   let optionValue = await createNewContact.printLeadSourceOptionValue();
   let allOptionLSDD = await createNewContact.printAllOptionInLeadSourceDD();
   let orgwindow = await createNewContact.clickOrganizationLookupIcon();
   await page.waitForTimeout(10000);
   
   let newWindow: Page = await createNewContact.switchToTabByIndex(1);
   let organizationPage: createNewContactPage = new createNewContactPage(newWindow);
   await page.waitForTimeout(10000);
   let newWindowURL = await organizationPage.getNewWindowUrl();
   console.log("new page url - ", newWindowURL);
    console.log("happy hacking")










}



)