/**
 * Created by PPATRONI on 06.10.2016.
 */

function TestDataFunc() {
    this.baseUrl = 'http://www.bankier.pl/';
    this.menuColumnText = 'Rynki';
    this.menuRowText = 'Waluty';
    this.forexPageHeader = 'Kursy rynkowe (forex)';
    this.NBPTableCurrencyArray = ['EUR', 'USD', 'CHF', 'GBP', 'JPY'];
    this.changeDownColor = 'rgba(236, 28, 36, 1)';
    this.changeUpColor = 'rgba(27, 154, 60, 1)';
}

var testData = new TestDataFunc();

module.exports = testData;
