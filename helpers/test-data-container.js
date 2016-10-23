/**
 * Created by BPAZERA on 2016-10-22.
 */
'use strict';

var TestData = require('../utils/TestData'),
    FunduszeMainPO = require('../page-objects/bankier/rynki/FunduszePage.js'),
    SurowceMainPO = require('../page-objects/bankier/rynki/SurowcePage.js'),
    WalutyMainPO = require('../page-objects/bankier/rynki/WalutyPage.js'),
    ZlotoForumMainPO = require('../page-objects/bankier/forum/ZlotoForumPage.js');

function TestDataContainer() {

    this.data = [
        new TestData('Rynki', 'Waluty', new WalutyMainPO()),
        new TestData('Rynki', 'Surowce', new SurowceMainPO()),
        new TestData('Rynki', 'Fundusze', 'fundusze', new FunduszeMainPO()),
        new TestData('Forum', 'Złoto', new ZlotoForumMainPO())
    ]
}

module.exports = TestDataContainer;
