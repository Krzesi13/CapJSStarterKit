/**
 * Created by BPAZERA on 2016-10-11.
 */

var ContentPage = require('./../ContentPage.js');

function ZlotoForumMainPO() {
    'use strict';

    this.relativeUrl = 'forum/forum_zloto,52,1.html';

}

ZlotoForumMainPO.prototype = new ContentPage();

module.exports = ZlotoForumMainPO;
