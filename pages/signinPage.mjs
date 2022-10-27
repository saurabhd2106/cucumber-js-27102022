import { By } from "selenium-webdriver";
import { commonDriver } from "../commonLib/commonDriver.mjs"

let driver = commonDriver.getDriver();

class SignInPage {

    // 1 - All the page objects (Elements)

    emailFeild = By.xpath("//input[@type='email']");
    passwordFeild = By.xpath("//input[@type='password']");
    singInButton = By.xpath("//button[@type='submit']");

    initializeDriver(){

        driver = commonDriver.getDriver();

    }


    // 2 - All possible logic on this page

    async loginToApplication(useremail, userpassword) {

        await driver.findElement(this.emailFeild).sendKeys(useremail);
        await driver.findElement(this.passwordFeild).sendKeys(userpassword);
        await driver.findElement(this.singInButton).click();

    }

}

export const signinPage = new SignInPage();