/**
 * Created by PPATRONI on 06.10.2016.
 */

function TestData(menuColumnText, menuRowText, pageObject) {

    this.baseUrl = 'http://www.bankier.pl/';
    this.menuColumnText = menuColumnText;
    this.menuRowText = menuRowText;
    this.forexPageHeader = 'Kursy rynkowe (forex)';
    this.NBPTableCurrencyArray = ['EUR', 'USD', 'CHF', 'GBP', 'JPY'];
    this.changeDownColor = 'rgba(236, 28, 36, 1)';
    this.changeUpColor = 'rgba(27, 154, 60, 1)';
    this.pageObject = pageObject;

}

module.exports = TestData;
