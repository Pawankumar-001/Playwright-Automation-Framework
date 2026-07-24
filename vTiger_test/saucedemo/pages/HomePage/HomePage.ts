import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage.ts";

export class HomePageVT extends BasePage {

    readonly clickOnContactLink: Locator;

    readonly createContact: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly title: Locator;
    readonly department: Locator;
    readonly selectLeadSourceOption: Locator


    constructor(page: Page) {
        super(page);
        this.clickOnContactLink = page.locator("//a[text()='Contacts']");
        this.createContact = page.locator("//img[@title='Create Contact...']");
        this.firstName = page.locator("//input[@name='firstname']");
        this.lastName = page.locator("//input[@name='lastname']");
        this.title = page.locator("//input[@id='title']");
        this.department = page.locator("//input[@id='department']");
        this.selectLeadSourceOption = page.locator("//select[@name='leadsource']")

    }

    async takeScreenshot() {
        await this.takeVisiblePageScreenshot('homePage.png');
    }

    async takeHomePageTitle(): Promise<string> {
        return await this.getPageTitle();
    }

    async scrollDownHomePage(x: number, y: number): Promise<void> {
        await this.scrollBy(x, y);
    }

    async scrollToContactLink(x: number, y: number): Promise<void> {
        await this.scrollToElement(x, y);
    }

    async clickOnTheContactLink(): Promise<void> {
        await this.firstElement(this.clickOnContactLink);
        await this.clickElement(this.clickOnContactLink);
    }

    async clickOnAllLinkInContact(): Promise<void> {

    }

    async clickCreateContactButton(): Promise<void> {
        await this.clickElement(this.createContact);
    }

    async enterFirstName(firstNameValue: string): Promise<void> {
        await this.fillText(this.firstName, firstNameValue);
    }

    async printFirstNameValue(): Promise<string> {
        return await this.getInputValue(this.firstName);
    }

    async enterLastName(lastNameValue: string): Promise<void> {
        await this.fillText(this.lastName, lastNameValue);
    }
    async printLastNameValue(): Promise<string> {
        return await this.getInputValue(this.lastName);
    }


    async enterTitleName(titleNameValue: string): Promise<void> {
        await this.fillText(this.title, titleNameValue);
    }

    async printTitleNameValue(): Promise<string> {
        return await this.getInputValue(this.title);
    }


    async enterDepartmentName(enterDepartmentNameValue: string): Promise<void> {
        await this.fillText(this.department, enterDepartmentNameValue);
    }

    async printDepartmenttNameValue(): Promise<string> {
        return await this.getInputValue(this.department);
    }

    async selectValueFromLeadSource(optionValue: string): Promise<void> {
        await this.selectByValue(this.selectLeadSourceOption, optionValue);
    }
    async printLeadSourceOptionValue(): Promise<string> {
        return await this.getInputValue(this.selectLeadSourceOption);
    }





}


