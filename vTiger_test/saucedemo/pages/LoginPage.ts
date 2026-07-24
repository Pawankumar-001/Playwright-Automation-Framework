



import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.ts";
import { HomePageVT } from "./HomePage/HomePage.ts";
import { testData } from "./testData.ts";


export class LoginPageVT extends BasePage {

  readonly username: Locator;
  readonly password: Locator;

  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator("//input[@name='user_name']");
    this.password = page.locator("//input[@name='user_password']");
    this.submitButton = page.locator("//input[@id='submitButton']");
  }

  //login with valid credentials 
  async Login() {
    // enter the application URL
    await this.page.goto("http://localhost:8888/");
    // fill the valid username and print there value
    let usernameData : string=testData.TC001.username
    await this.fillText(this.username, "usernameData");
    const usernameValue = await this.username.inputValue();
    console.log("Username-", usernameValue);
    // fill the password and print there value
    let passwordData : string=testData.TC001.password
    await this.fillText(this.password, passwordData);
    const passwordValue = await this.password.inputValue();
    console.log("Password- ", passwordValue);
    // click on login button
    await this.clickElement(this.submitButton);
    console.log("Login successfull");
     // taking the screeshot of opened home page dashboard
    //await this.page.screenshot({ path: 'homePage.png' });
    //console.log("screenshot captured");
  }

  async enterUrl() {
    await this.hitUrl("http://localhost:8888/")
  }

  async enterUsername(usernameValue: string) {
    await this.fillText(this.username, usernameValue);
  }

  async enterPassword(passwordValue: string) {
    await this.fillText(this.password, passwordValue);
  }

  async printEnteredUsernameValue(): Promise<string> {
    return await this.getInputValue(this.username);
  }

  async printEnteredPasswordValue(): Promise<string> {
    return await this.getInputValue(this.password);
  }

  async clickOnLoginButton(): Promise<void> {
    await this.clickElement(this.submitButton)
  }
}




