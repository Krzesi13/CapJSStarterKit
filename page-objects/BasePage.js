/**
 * Created by BPAZERA on 2016-10-20.
 */
'use strict'

function BasePage() {

}

BasePage.prototype.getUrl  = function(){
    return browser.driver.getCurrentUrl();
}

module.exports = BasePage;