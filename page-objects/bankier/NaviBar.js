/**
 * Created by PPATRONI on 06.10.2016.
 */

function MainMenuPO() {
    'use strict';

    this.menuElement = element(by.css('#mainNav .menu'));

}

MainMenuPO.prototype.goToSection = function (tabText, linkText) {
    var self = this;
    return this.hooverOverMenu(tabText).then(function(){
        return self.clickMenuLink(linkText);

    });
}

MainMenuPO.prototype.hooverOverMenu = function (tabText) {
    return browser.actions().mouseMove(this.menuElement.element(by.cssContainingText('.menuItem', tabText))).perform();
}

MainMenuPO.prototype.clickMenuLink = function (linkText) {
    return element(by.linkText(linkText)).click();
}

module.exports = MainMenuPO;
