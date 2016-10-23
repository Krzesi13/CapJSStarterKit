/**
 * Created by BPAZERA on 2016-10-11.
 */
'use strict'
var path = require('path');
var AppDir = path.resolve(__dirname);
var log4Spec = require(AppDir + '/../helpers/CustomLogger.js');

function MainConf(projectDir, pagesDir) {
    this.projectDir = projectDir;
    this.config = {
        framework: 'jasmine2',
        allScriptsTimeout: (100 * 1000),
        capabilities: {
            browserName: 'chrome',
            maxInstances: 1
        },
        seleniumAddress: 'http://localhost:4444/wd/hub',
        jasmineNodeOptions: {
            onComplete: null,
            isVerbose: true,
            showColors: true,
            includeStackTrace: true,
            defaultTimeoutInterval: 10 * 60 * 1000
        },
        onPrepare: function () {
            browser.driver.manage().window().maximize();
            browser.ignoreSynchronization = true;
            require('jasmine2-custom-message');
            global.CustLogger = log4Spec;
            global.using = require('jasmine-data-provider');
        }
    }
}
MainConf.prototype.specs = function (specs) {
    this.config.suites = undefined;
    this.config.specs = specs;
};

MainConf.prototype.runTests = function(testName) {
    var array = [];
    if (testName instanceof Array){
        for (var singleTest in testName) {
            var single = this.projectDir +"\\tests\\"+ testName[singleTest];
            array.push(single);
        }
    }
    else {
        var single = this.projectDir +"\\tests\\"+ testName;
        array.push(single);
    }
    this.specs(array)
};

module.exports = MainConf;