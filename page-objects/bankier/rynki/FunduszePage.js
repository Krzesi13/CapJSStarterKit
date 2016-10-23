/**
 * Created by BPAZERA on 2016-10-11.
 */

var ContentPage = require('../ContentPage.js');

function FunduszeMainPO() {
    'use strict';

    this.relativeUrl = 'fundusze';

}

FunduszeMainPO.prototype = new ContentPage();

module.exports = FunduszeMainPO;
