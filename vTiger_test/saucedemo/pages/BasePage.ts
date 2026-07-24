import { test, expect, Page, Locator, FrameLocator, BrowserContext } from "@playwright/test";


export class BasePage {

      page: Page;

      constructor(page: Page) {
            this.page = page;
      }

      //===================================Generic Methods==========================================

      //=============Input field methods=====================
      /**
       * It is used to enter text in input field
       * @param element 
       * @param value 
       */
      async fillText(element: Locator, value: string): Promise<void> {
            await element.fill(value);
      }

      /**
      * It is used to type text in input field
      * @param element 
      * @param value 
      */
      async typeText(element: Locator, value: string): Promise<void> {
            await element.type(value);

      }

      /**
      * this method is use to clear the textbox or text area.
      * @param element 
      */
      async clearText(element: Locator): Promise<void> {
            await element.clear();
      }


      /**
       * this method is use to Focuses the matching element and presses a combination of the keys
       * @param element 
       * @param value 
       */
      async pressOnElement(element: Locator, value: string): Promise<void> {
            await element.press(value);
      }


      /**
     * this method is use to Focuses the matching element and press sequentially  of the keys
     * @param element 
     * @param value 
     */
      async typeSequentially(element: Locator, value: string): Promise<void> {
            await element.pressSequentially(value);
      }

      //===================Action field methods===============
      /**
       * this method is used to click on element
       * @param element 
       */
      async clickElement(element: Locator): Promise<void> {
            await element.click();
      }

      /**
       * this method is used to forcefully click on element
       * @param element 
       */

      async clickForcelly(element: Locator): Promise<void> {
            await element.click({ force: true });
      }

      /**
       * this method is use to double click on element
       * @param element 
       */
      async doubleClick(element: Locator): Promise<void> {
            await element.dblclick();
      }


      /**
      * this methodis use to right click on element
      * @param element 
      */
      async rightClick(element: Locator): Promise<void> {
            await element.click({ button: 'right' });
      }



      /**
       * It is use to mouse hover on element
       * @param element 
       */
      async mouseHover(element: Locator) {
            await element.hover();
      }



      /**
       * this method is use to check the checkBox and enable the radio button 
       * @param element 
       */
      async checkCheckbox(element: Locator) {
            await element.check();
      }


      /**
       * this method is use to uncheck the checkBox and disable the radio button 
       * @param element 
       */
      async uncheckCheckbox(element: Locator) {
            await element.uncheck();
      }

      //================select dropdown methods================================


      /**
       * this method is use to select dropdown option by value
       * @param element 
       * @param value 
       */
      async selectByValue(element: Locator, value: string): Promise<Array<string>> {
            return await element.selectOption(value);
      }

      /**
       * this method is use to select dropdown option by label
       * @param element 
       * @param value 
       */
      async selectBylabel(element: Locator, value: string): Promise<Array<string>> {
            return await element.selectOption(value);
      }

      /**
      * this method is use to select dropdown option by index
      * @param element 
      * @param value 
      */
      async selectByIndex(element: Locator, value: string): Promise<Array<string>> {
            return await element.selectOption(value);
      }

      //===========================screenshot methods====================================

      /**
       * this method is use to take screenshot of the visible page
       * @param element 
       */
      async takeVisiblePageScreenshot(location: string): Promise<void> {
            await this.page.screenshot({ path: location, fullPage: false });
      }

      /**
      * this method is use to take screenshot of the full page
      * @param element 
      */
      async takeFullPageScreenshot(location: string): Promise<void> {
            await this.page.screenshot({ path: location, fullPage: true });
      }

      /**
       * this method is use to take screenshot of the specific element
       * @param element 
       */
      async takeElementScreenshot(element: Locator, location: string): Promise<void> {
            await element.screenshot({ path: location });
      }

      //==================Element State methods==================================

      /**
       * this method is use to check element is visible 
       * @param element
       */
      async verifyElementVisible(element: Locator): Promise<boolean> {
            return await element.isVisible();
      }


      /**
       * this method is use to check element is hidden
       * @param element 
       */
      async verifyElementHidden(element: Locator): Promise<boolean> {
            return await element.isHidden();
      }


      /**
       * this method is use to check element is Enable
       * @param element 
       */
      async verifyElementEnable(element: Locator): Promise<boolean> {
            return await element.isEnabled();
      }


      /**
       * this method is use to check element is disabled
       * @param element 
       */
      async verifyElementDisabled(element: Locator): Promise<boolean> {
            return await element.isDisabled();
      }


      /**
       * this method is use to check element is editable
       * @param element 
       */
      async verifyElementEditable(element: Locator): Promise<boolean> {
            return await element.isEditable();
      }



      /**
       * this method is use to check element is checked
       * @param element 
       */
      async verifyElementChecked(element: Locator) {
            await element.isChecked();
      }

      //========================count method================================

      /**
       * this method is use to bring element count
       * @param element
       */
      async countElement(element: Locator) {
            await element.count();
      }


      /**
       * this method is use to give index to element.
       * @param element 
       * @param value 
       */
      async nthElement(element: Locator, value: number): Promise<void> {
            await element.nth(value);
      }



      /**
       * this method is use to choose first element
       * @param element 
       */
      async firstElement(element: Locator): Promise<void> {
            await element.first();
      }


      /**
       * this method is use to choose last element
       * @param element 
       */
      async lastElement(element: Locator): Promise<void> {
            await element.last();
      }


      /**
       * this method is use to take all locator in array
       * @param element 
       * @returns 
       */
      async allElement(element: Locator): Promise<Locator[]> {
            return await element.all();
      }

      //======================text retrieval methods==============================

      // textContent method 
      async getTextContent(element: Locator): Promise<string | null> {
            return await element.textContent();
      }


      /**
       * It is used to get inner text of an visible element
       * @param element 
       * @returns 
       */
      async getInnerText(element: Locator): Promise<string> {
            return await element.innerText();
      }


      /**
       * It is used to get current value from input field by attribute value
       * @param element 
       * @param value 
       * @returns 
       */
      async getAttributeValue(element: Locator, value: string): Promise<string | null> {
            return await element.getAttribute(value);
      }

      /**
       * this method is use to get all innertext of the elements
       * @param element 
       * @returns 
       */
      async getAllInnerText(element: Locator): Promise<string[]> {
            return await element.allInnerTexts()
      }


      async getAllTexts(locator : Locator):Promise<string[]>{
            return await locator.allTextContents();
      }

      /**
       * this method is use to get page title.
       * @returns 
       */
      async getPageTitle(): Promise<string> {
            return await this.page.title();
      }

      /**
       * this method is use to get current text box value
       * @param page 
       */
      async getInputValue(element: Locator): Promise<string> {
            return await element.inputValue();
      }

      /**
       * this method is use to scroll the pege
       * @param page 
       */
      async pageScroll(page: Page): Promise<void> {
            await page.mouse.wheel(0, 2000);
      }

      //==============================framelocator method===========================
      /**
       * this method is use to switch frames 
       * @param element 
       * @param value 
       * @returns 
       */
      async switchOnIframe(element: Locator, value: string): Promise<FrameLocator> {
            return await element.frameLocator(value);
      }

      //======================URL method=================================

      /**
       * this method is use to hit Url
       * @param Url 
       */
      async hitUrl(Url: string): Promise<void> {
            await this.page.goto(Url);
      }

      async getCurrentUrl() : Promise<string> {
            return this.page.url();
      }

      async getNewWindowUrl() : Promise<string> {
          let url:string =await this.getCurrentUrl();
          return url;
      }






      //====================scroll method=======================

      /**
       * this method is use to go upside of the page by scroll
       */
      async scrollUp(): Promise<void> {
            await this.page.mouse.up()
      }

      /**
       * this method is user to go downside of the page by scroll
       */
      async scrolldown(): Promise<void> {
            await this.page.mouse.down()
      }

      /**
       * this method is user to go specific element of page
       * @param deltaX 
       * @param deltaY 
       */
      async scrollToElement(deltaX: number, deltaY: number): Promise<void> {
            await this.page.mouse.wheel(deltaX, deltaY);
      }

      /**
       * this method is use to scroll the page by given amount
       * @param x 
       * @param y 
       */
      async scrollBy(x: number, y: number): Promise<void> {
            await this.page.evaluate(
                  ({ x, y }) => window.scrollBy(x, y),
                  { x, y }
            )
      }
      //====================window handle============================

      async switchToNewTab(context: BrowserContext): Promise<Page> {
            const newPage = await context.waitForEvent('page');
            await newPage.waitForLoadState();
            return newPage;
      }

      async switchToTabByIndex(index: number): Promise<Page> {
            const pages: Page[] = this.page.context().pages();
            let page: Page = pages[index];
            return page;
      }






















}