/**
 * Created by BPAZERA
 */
'use strict';
var MainMenu = require('./NaviBar.js');

function BankierMainPO() {
MainMenu.call(this);
}
BankierMainPO.prototype = Object.create(MainMenu.prototype);

BankierMainPO.prototype.navigateToUrl = function (url) {
    return browser.get(url);
}

module.exports = BankierMainPO;
