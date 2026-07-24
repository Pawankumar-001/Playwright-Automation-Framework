import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage.ts";


export class contactPageVT extends BasePage {

    createContacBT: Locator;

    constructor(page: Page) {
        super(page);
        this.createContacBT = page.locator("//img[@src='themes/softed/images/btnL3Add.gif']");
    }


    // async clickOnAllLinkInContact(): Promise<void> {

    // }

    async clickCreateContactButton(): Promise<void> {
        await this.clickElement(this.createContacBT);
    }


}










