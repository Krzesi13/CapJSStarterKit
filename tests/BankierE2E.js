'use strict';

var MainPO = require('../page-objects/bankier/BankierPage.js'),
    WalutyPO = require('../page-objects/bankier/rynki/WalutyPage.js'),
    ForexPO = require('../page-objects/bankier/rynki/waluty/ForexPage.js'),
    SortChecker = require('../utils/sort-checker'),
    Regex = require('../helpers/Regex.js'),
    testData = require('../utils/BankierE2E_TD.js');

describe('bankier.pl E2E testing', function () {
    it('functional test of bankier.pl Page', function () {

        CustLogger.info('[STEP_1] Navigate to bankier.pl');
        var bankierPage = new MainPO();
        bankierPage.navigateToUrl(testData.baseUrl);

        CustLogger.info('[STEP_2] Validate URL is correct ');
        since('Url is incorrect: \n expected was: #{expected} \n but found:#{actual}')
            .expect(browser.getCurrentUrl()).toBe(testData.baseUrl);

        CustLogger.info('[STEP_3] Select Rynki -> Waluty [EOM]');
        bankierPage.goToSection(testData.menuColumnText, testData.menuRowText);

        CustLogger.info('[STEP_4] Validate color of Zmiana value [EOM]');
        var walutySection = new WalutyPO();

        since('Zmiana Value element not present or loaded to page.').expect(walutySection.getZmianaValueElement().isPresent()).toBeTruthy(); // jasmine custom message -> since('').expect...
        var zmianaValueColor = walutySection.getZmianaValueColor(),
            zmianaValueText = walutySection.getZmianaValueText();
        if (zmianaValueText.toString().charAt(0) === '-') { // regEx
            expect(zmianaValueColor).toEqual(testData.changeDownColor)
        } else {
            expect(zmianaValueColor).toEqual(testData.changeUpColor)
        }

        CustLogger.info('[STEP_5] Validate format of Zmiana and Ostatni Kurs [EOM]');
        expect(zmianaValueText).toMatch(Regex.floatPercent);
        expect(walutySection.getOstatniKursValueElementText()).toMatch(Regex.floatFourDecimal);

        CustLogger.info('[STEP_6] Get Currencies names from Kursy NBP bracket and validate if equals: [EUR,USD,CHF,GBP,JPY]');
        expect(walutySection.getCurrenciesFromNBPExchangeRateTable()).toEqual(testData.NBPTableCurrencyArray);

        CustLogger.info('[STEP_7] Validate if triangle beside USD has corresponding color to current forecast');
        var NBPExchangeRatesTableUSDRowChangeTriangleClassName = walutySection.getNBPExchangeRatesTableUSDRowClassName(),
            NBPExchangeRatesTableUSDRowChangeValueText = walutySection.getNBPExchangeRatesTableUSDRowChangeValueText();
        if (NBPExchangeRatesTableUSDRowChangeValueText.toString().charAt(0) === '-') {
            expect(NBPExchangeRatesTableUSDRowChangeTriangleClassName).toMatch(Regex.changeDown)
        } else {
            expect(NBPExchangeRatesTableUSDRowChangeTriangleClassName).toMatch(Regex.changeUp)
        }

        CustLogger.info('[STEP_8] Click on "Wszystkie waluty forex" [EOM]');
        walutySection.goToWszystkieWalutyForex();

        browser.get('http://www.bankier.pl/waluty/kursy-walut/forex');

        CustLogger.info('[STEP_9] Validate header is correct [EOM]');
        var forexSection = new ForexPO();
        expect(forexSection.getForexSectionHeader()).toEqual(testData.forexPageHeader);

        CustLogger.info('[STEP_10] Sort by kurs descending [EOM]');
        forexSection.sortDescendingByKurs();

        CustLogger.info('[STEP_11] Validate if values are sorted correctly [EOM]');
        var sortChecker = new SortChecker(),
            arrayToValidate = forexSection.getCurrencyTableKupnoKursColumnValues();
        arrayToValidate.then(function (array) {
            array.splice(10, 1);
            since('Sort checker not passed for loaded array.').expect(sortChecker.validate(array, array.length)).toBe(true);
        });

        CustLogger.info('[STEP_12] Get time of one of events and validate format [EOM]');
        expect(forexSection.getCurrencyTableFirstRowText()).toMatch(Regex.fullDate);
    });
});