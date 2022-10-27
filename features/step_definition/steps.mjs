import { Given, When, Then } from "@cucumber/cucumber"
import { signinPage } from "../../pages/signinPage.mjs";


Given('Saurabh is a writer and has access to the conduit application', async function () {

   
   
});


When('Saurabh uses the credentials as {string} and {string}', async function (useremail, userpassword) {

   await signinPage.loginToApplication(useremail, userpassword)

   
});

When ('Saurabh uses the credentials as', async function(datatable) {

    let data = datatable.raw();

    let useremail = data[0][0];

    let userpassword = data[1][0];

    await signinPage.loginToApplication(useremail, userpassword)

})


When ('Saurabh uses the credentials as map', async function(datatable) {


    let useremail;

    let userpassword;

    datatable.transpose().hashes().map(function(value) {
        useremail = value.useremail;
        userpassword = value.userpassword;
    })

    await signinPage.loginToApplication(useremail, userpassword)

})

When ('Saurabh uses the credentials as vertical map', async function(datatable) {


    let useremail;

    let userpassword;

    datatable.hashes().map(function(value) {
        useremail = value.useremail;
        userpassword = value.userpassword;
    })

    await signinPage.loginToApplication(useremail, userpassword)

})


Then('Saurabh gets access to the application', async function () {

 //  await commonDriver.closeBrowser();
    
});