import {commonDriver} from "../commonLib/commonDriver.mjs"

class ArticlePage {

    initializeDriver(){

        driver = commonDriver.getDriver();

    }

}

export const articlePage = new ArticlePage();