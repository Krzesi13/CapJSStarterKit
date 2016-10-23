/**
 * Created by BPAZERA on 2016-10-11.
 */

var ContentPage = require('./../ContentPage.js');

function SurowceMainPO() {
    'use strict';

    this.relativeUrl = 'surowce';

}

SurowceMainPO.prototype = new ContentPage();

module.exports = SurowceMainPO;
