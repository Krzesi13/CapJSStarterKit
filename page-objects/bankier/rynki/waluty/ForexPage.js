/**
 * Created by PPATRONI on 06.10.2016.
 */

var ContentPage = require('./../../ContentPage.js');

function ForexPO() {
    'use strict';

    this.headerElement = element(by.css('#pageMainContainerLeft645 .section-title'));
    this.kursColumnTitleElement = element(by.cssContainingText('.textAlignCenter.tablesorter-header', 'Kurs'));
    this.currencyTableElement = element(by.css('#boxCurrency .sortTable tbody'));
    this.currencyTableAllRowElements = this.currencyTableElement.all(by.tagName('tr'));
    this.currencyTableFirstRowElement = this.currencyTableAllRowElements.first();

}

ForexPO.prototype = new ContentPage();

ForexPO.prototype.getForexSectionHeader = function () {
    return this.headerElement.getText();
}

ForexPO.prototype.sortDescendingByKurs = function () {
    this.clickOnKursColumnTitle();
    if (this.kursColumnTitleElement.getAttribute('aria-label').toString() !== 'ascending') {
        this.clickOnKursColumnTitle();
    }
}

ForexPO.prototype.clickOnKursColumnTitle = function () {
    return this.kursColumnTitleElement.click();
}

ForexPO.prototype.getCurrencyTableKupnoKursColumnValues = function () { // regex?
    return this.currencyTableAllRowElements.map(function (item, index) {
        if (index !== 10) {
            return item.all(by.css('.colKurs')).first().getText();
        }
    });
}

ForexPO.prototype.getCurrencyTableFirstRowText = function () {
    return this.currencyTableFirstRowElement.all(by.css('td')).last().getText();
}

module.exports = ForexPO;
