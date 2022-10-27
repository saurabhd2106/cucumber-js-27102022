
import { By } from "selenium-webdriver";
import { commonDriver } from "../commonLib/commonDriver.mjs"

let driver;
 class HomePage {

    constructor() {

        driver = commonDriver.getDriver();

    }

    initializeDriver(){

        driver = commonDriver.getDriver();

    }


    signInLink = By.linkText('Sign in');

    async navigateToSignInLink() {

        await driver.findElement(this.signInLink).click();

    }

}

export let homePage = new HomePage();