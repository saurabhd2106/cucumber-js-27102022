import { Builder } from "selenium-webdriver"

let driver;

class CommonDriver {

    async openBrowser() {

        driver = await new Builder().forBrowser('chrome').build();


        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.manage().setTimeouts({ pageLoad: 20000 })

    }

    async navigateToUrl(url) {
        await driver.get(url)
    }

    getDriver() {
        return driver;
    }

    async closeBrowser() {
        await driver.quit();
    }

}

export const commonDriver = new CommonDriver();