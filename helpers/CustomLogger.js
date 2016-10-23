/**
 * Created by BPAZERA on 2016-10-22.
 */
'use strict'

var log4js = require('log4js')
var log4jsLogger = log4js.getLogger();

function CustomLogger() {
}

var useInBrowser = function(obj,func,message,immediate) {
    if (immediate){
        func.call(obj,message)
    }
    else {
        browser.controlFlow().execute(function(){
            func.call(obj,message);
        });
    }
};

var use4log4js = function(func, message, immediate) {
    useInBrowser(log4jsLogger, func, message, immediate)
}

CustomLogger.prototype.info = function (message, immediate){
    use4log4js(log4jsLogger.info, message, immediate)
}

CustomLogger.prototype.fatal = function (message, immediate){
    use4log4js(log4jsLogger.fatal, message, immediate)
}

CustomLogger.prototype.error = function (message, immediate){
    use4log4js(log4jsLogger.error, message, immediate)
}

CustomLogger.prototype.warn = function (message, immediate){
    use4log4js(log4jsLogger.warn, message, immediate)
}

CustomLogger.prototype.log = function (message, immediate){
    use4log4js(log4jsLogger.log, message, immediate)
}

CustomLogger.prototype.debug = function (message, immediate){
    use4log4js(log4jsLogger.debug, message, immediate)
}

CustomLogger.prototype.trace = function (message, immediate){
    use4log4js(log4jsLogger.trace, message, immediate)
}
var loggerInstance = new CustomLogger();
module.exports = loggerInstance;
