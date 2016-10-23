/**
 * Created by BPAZERA on 2016-10-11.
 */

var ContentPage = require('./../ContentPage.js');

function WalutyMainPO() {
    'use strict';

    this.zmianaValueElement = element(by.css('.box205.left.EURPLN .summaryTable .changeValue.adjustFontSize'));
    this.ostatniKursValueElement = element(by.cssContainingText('.box205.left.EURPLN tr', 'Ostatni kurs:')).element(by.css('td strong'));
    this.NBPExchangeRatesTableElement = element(by.css('#boxKursyNbpTab1 .exchange'));
    this.NBPExchangeRatesTableUSDRowElement = this.NBPExchangeRatesTableElement.element(by.cssContainingText('.change', 'USD'));
    this.NBPExchangeRatesTableUSDRowChangeValueElement = this.NBPExchangeRatesTableUSDRowElement.element(by.className('changeValue'));
    this.wszystkieWalutyForexLinkElement = element(by.css('.item-5.right .more-link'));

    this.relativeUrl = 'waluty';
}


WalutyMainPO.prototype = new ContentPage();

WalutyMainPO.prototype.getZmianaValueElement = function () {
    return this.zmianaValueElement;
}

WalutyMainPO.prototype.getZmianaValueColor = function () {
    return this.zmianaValueElement.getCssValue('color').then(function (color) {
        return color;
    });
}

WalutyMainPO.prototype.getZmianaValueText = function () {
    return this.zmianaValueElement.getText().then(function (text) {
        return text;
    });
}

WalutyMainPO.prototype.getOstatniKursValueElementText = function () {
    return this.ostatniKursValueElement.getText().then(function (text) {
        return text;
    });
}

WalutyMainPO.prototype.getCurrenciesFromNBPExchangeRateTable = function () {
    return this.NBPExchangeRatesTableElement.all(by.css('.name.textNowrap .name')).map(function (element) {
        return element.getText();
    }).then(function (currencies) {
        return currencies;
    });
}

WalutyMainPO.prototype.getNBPExchangeRatesTableUSDRowClassName = function () {
    return this.NBPExchangeRatesTableUSDRowElement.getAttribute('class').then(function (className) {
        return className;
    });
}

WalutyMainPO.prototype.getNBPExchangeRatesTableUSDRowChangeValueText = function () {
    return this.NBPExchangeRatesTableUSDRowChangeValueElement.getText('class').then(function (valueText) {
        return valueText;
    });
}

WalutyMainPO.prototype.goToWszystkieWalutyForex = function () {
    this.wszystkieWalutyForexLinkElement.click();
}

module.exports = WalutyMainPO;
