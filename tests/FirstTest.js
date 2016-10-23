var BasePage = require('../page-objects/BasePage.js');
var FirstTestTD = require('./FirstTest_TD.js');


describe('todo test', function() {

  it('First test', function() {
    var newPage = new BasePage();

    console.log("[Step 1] Navigating to Onet page");
    browser.get('http://www.onet.pl');

    console.log("[Step 2] Validation of URL");
    expect(newPage.getUrl()).toEqual(FirstTestTD.baseUrl);
    // expect(false).toBe(true);
  });
});
