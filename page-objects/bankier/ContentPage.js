/**
 * Created by BPAZERA on 2016-10-11.
 */

var MainMenu = require('./NaviBar.js');

function ContentPagePO() {
    'use strict';

    this.pageContentNavigationMenuElement = element(by.css('#breadcrumbsNav .menu'));

}

ContentPagePO.prototype = new MainMenu();

ContentPagePO.prototype.getPageContentNavigationMenuElement = function () {
    return this.pageContentNavigationMenuElement;
}

module.exports = ContentPagePO;
