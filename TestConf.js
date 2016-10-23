'use strict'
var path = require('path')
var AppDir = path.resolve(__dirname);
var projectDir = AppDir;
var pagesDir = '/page-objects';
var MainConf = require(AppDir +'/Configuration/MainConf.js');


var Test = new MainConf(projectDir, pagesDir);
Test.runTests('FirstTest.js');

exports.config = Test.config;

