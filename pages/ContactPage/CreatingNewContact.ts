import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage.ts"




export class createNewContactPage extends BasePage {

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly title: Locator;
    readonly department: Locator;
    readonly selectLeadSourceOption: Locator;
    readonly allLeadSourceOption: Locator;
    readonly organizationLookupIcon: Locator;


    constructor(page: Page) {
        super(page)
        this.firstName = page.locator("//input[@name='firstname']");
        this.lastName = page.locator("//input[@name='lastname']");
        this.title = page.locator("//input[@id='title']");
        this.department = page.locator("//input[@id='department']");
        this.selectLeadSourceOption = page.locator("//select[@name='leadsource']");
        this.allLeadSourceOption = page.locator("//select[@name='leadsource']//option");
        this.organizationLookupIcon = page.locator("//img[@title='Select']");
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
    async printAllOptionInLeadSourceDD() {
        let allOption: string[] = await this.getAllTexts(this.allLeadSourceOption);
        for (let abcd of allOption) {
            console.log(abcd)
        }
    }

    async clickOrganizationLookupIcon(): Promise<void> {
        await this.clickElement(this.organizationLookupIcon.first());
    }
    
    async switchToNewWindow(index: number): Promise<Page> {
        let organizationWindow: Page = await this.switchToTabByIndex(index);
        return organizationWindow;
    }


}