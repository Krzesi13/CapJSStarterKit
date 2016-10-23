var MainPO = require('../page-objects/bankier/BankierPage.js'),
    TestDataContainer = require('../utils/testDDT_TD');

describe('bankier.pl webpage', function () {
    'use strict';

    var testDataContainer = new TestDataContainer();

    using(testDataContainer.data, function (data) {

        afterEach(function () {
            browser.switchTo().alert().then(function (alert) {
                    alert.dismiss();
                },
                function (err) {
                }
            );
        });

        it('testName', function () {
            CustLogger.info('[STEP_1] Navigate to bankier.pl Page');
            var bankierPage = new MainPO();
            bankierPage.navigateToUrl(data.baseUrl);

            CustLogger.info('[STEP_2] Navigate to tab name');
            bankierPage.goToSection(data.menuColumnText, data.menuRowText);

            // Step 3
            CustLogger.info('[STEP_3] Validate URL is correct [EOM]');
            since('Page element not loaded:').expect(data.pageObject.getPageContentNavigationMenuElement().isPresent()).toBeTruthy();
            expect(browser.getCurrentUrl()).toBe(data.baseUrl + data.pageObject.relativeUrl);
        });
    });
});
