import { Locator, Page } from "@playwright/test";

export class leadsPage {

    page:Page;
    //click on plus button method
    readonly plusButton:Locator;
    //fill in mandatory fiels method
    readonly lastname:Locator;
    readonly company:Locator;
    //fill lead information all field method
    readonly pronoun:Locator;
    readonly firstname:Locator;
    readonly sirname:Locator;
    readonly  mobilenumber:Locator;
    readonly companyname:Locator;
    readonly radiobutton:Locator;
    readonly countryname:Locator;
    //click on save button method
    readonly SaveButton:Locator;


 constructor(page:Page){
    this.page=page
    this.plusButton=page.locator("//img[@title='Create Lead...']");
    this.lastname=page.locator("//input[@name='lastname']");
    this.company=page.locator("//input[@name='company']");
    this.pronoun=page.locator("//select[@name='salutationtype']");
    this.firstname=page.locator("//input[@name='firstname']");
    this.sirname=page.locator("//input[@name='lastname']");
    this.mobilenumber=page.locator("//input[@id='phone']");
    this.companyname=page.locator("//input[@name='company']");
    this.radiobutton=page.locator("//input[@value='U']");
    this.countryname=page.locator("//input[@id='country']");
    this.SaveButton=page.locator("//input[@value='  Save  ']");
    }


    //click on plus button
async  clickOnplusButton(page:Page) {
    await this.plusButton.click();    
}


//fill lead information of mandatory fields
 async fillMandatoryField(page:Page){
    //mandatory field last name
     await this.lastname.fill("kumar");
     //mandatory field company
     await this.company.fill("EVA");
}


//fill lead information all field 
 async  fillLeadInformation(page:Page){
    // fill title
   await this.pronoun.selectOption("Mr.");
    //fill first name
    await this.firstname.fill("nivi");
    // fill last name
    await this.sirname.fill("vishwakarma");
    //fill phone number
    await this.mobilenumber.fill("98765465435");
    //fill company *
    await this.companyname.fill("EVA");
    //click on button
    await this.radiobutton.click();
    //fill country
    await this.countryname.fill("India");
}



// click on save button
 async clickOnSaveButton(page:Page){
   await this.SaveButton.first().click();
}

}