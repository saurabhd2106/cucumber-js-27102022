import {Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep} from "@cucumber/cucumber"
import {commonDriver} from "../../commonLib/commonDriver.mjs"
import {signinPage} from "../../pages/signinPage.mjs"
import {homePage} from "../../pages/homepage.mjs"
import { articlePage } from "../../pages/articlePage.mjs"


BeforeAll(function() {

    console.log("First method to execute")
})


AfterAll(function() {
    console.log("Last method to execute")
})

Before(async function() {
    console.log("This executes before every test scenario")

    await commonDriver.openBrowser();

    homePage.initializeDriver()
    signinPage.initializeDriver()
    articlePage.initializeDriver()

    await commonDriver.navigateToUrl("http://localhost");
 

    await  homePage.navigateToSignInLink();

   
})

After( async function() {
    console.log("This executes after every test scenario")

    await commonDriver.closeBrowser();
})

BeforeStep(function(){
        console.log("This executes before every test step")
    
})

AfterStep(function(){
    console.log("This executes after every test step")

})